import { useMemo, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage, useFormikContext } from "formik";
import { useNavigate } from "react-router-dom";

import { selectTypes } from "../../../redux/type/selectors";
import { selectVarietals } from "../../../redux/varietal/selectors";
import { selectLoading } from "../../../redux/wines/selectors";
import { createWine, updateWine } from "../../../redux/wines/operations";

import {
  createWineValidationSchema,
  editWineValidationSchema,
} from "../../../helpers/schema";

import { COUNTRIES } from "../../../constants/countries";
import ImageEditorModal from "../../ImageEditorModal/ImageEditorModal";
import Loader from "../../Loader/Loader";
import s from "./WineForm.module.css";

const DRAFT_KEY = "wineFormDraft_v1";

function debounce(fn, delay = 500) {
  let t;
  return (...args) => {
    clearTimeout(t);
    t = setTimeout(() => fn(...args), delay);
  };
}

function DraftAutosave({ enabled }) {
  const { values } = useFormikContext();
  console.log({ values });
  const save = useMemo(
    () =>
      debounce((vals) => {
        if (!enabled) return;
        const { ...rest } = vals;
        localStorage.setItem(DRAFT_KEY, JSON.stringify(rest));
      }, 500),
    [enabled]
  );

  useEffect(() => {
    save(values);
  }, [values, save]);

  return null;
}

export default function WineForm({ wine }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loading = useSelector(selectLoading);
  const types = useSelector(selectTypes);
  const varietals = useSelector(selectVarietals);

  const isEdit = Boolean(wine?._id);

  const [currentVarietal, setCurrentVarietal] = useState("");
  const [rawPreview, setRawPreview] = useState(null);
  const [finalPreview, setFinalPreview] = useState(null);
  const [editorOpen, setEditorOpen] = useState(false);

  const defaultInitialValues = useMemo(
    () => ({
      thumb: "",
      title: wine?.title || "",
      type: wine?.type?._id || wine?.type || "",
      country: wine?.country || "",
      region: wine?.region || "",
      winery: wine?.winery || "",
      varietal: Array.isArray(wine?.varietal)
        ? wine.varietal.map((v) => v?._id || v)
        : [],
      year: wine?.year ? String(wine.year) : "",
      description: wine?.description || "",
    }),
    [wine]
  );

  const initialValues = useMemo(() => {
    if (isEdit) return defaultInitialValues;
    try {
      const saved = localStorage.getItem(DRAFT_KEY);
      if (!saved) return defaultInitialValues;
      const parsed = JSON.parse(saved);
      return { ...defaultInitialValues, ...parsed, thumb: "" };
    } catch {
      return defaultInitialValues;
    }
  }, [defaultInitialValues, isEdit]);

  const validationSchema = isEdit
    ? editWineValidationSchema
    : createWineValidationSchema;

  const onFilePicked = (e, setFieldValue) => {
    const file = e.currentTarget.files?.[0];
    if (!file) return;

    setRawPreview(URL.createObjectURL(file));
    setEditorOpen(true);
    setFieldValue("thumb", "");
  };

  const buildFormData = (values) => {
    const fd = new FormData();

    if (values.thumb instanceof File) {
      fd.append("thumb", values.thumb);
    }

    const original = defaultInitialValues;

    const maybeAppend = (key) => {
      const val = values[key];

      if (val === "" || val === null || val === undefined) return;

      if (!isEdit) {
        fd.append(key, val);
        return;
      }

      if (String(val) !== String(original[key] ?? "")) {
        fd.append(key, val);
      }
    };

    maybeAppend("title");
    maybeAppend("type");
    maybeAppend("country");
    maybeAppend("region");
    maybeAppend("winery");
    maybeAppend("year");
    maybeAppend("description");

    const currentVarietal = values.varietal || [];
    const originalVarietal = original.varietal || [];

    const sameVarietal =
      currentVarietal.length === originalVarietal.length &&
      currentVarietal.every((id, i) => id === originalVarietal[i]);

    if (currentVarietal.length > 0 && (!isEdit || !sameVarietal)) {
      currentVarietal.forEach((id) => fd.append("varietal[]", id));
    }

    return fd;
  };

  const handleSubmit = async (values, actions) => {
    try {
      const formData = buildFormData(values);

      if (isEdit) {
        await dispatch(updateWine({ id: wine._id, formData })).unwrap();
        navigate("/admin/home");
      } else {
        const created = await dispatch(createWine(formData)).unwrap();
        localStorage.removeItem(DRAFT_KEY);
        navigate(`/wine-details/${created._id}`, { state: { admin: true } });
      }

      actions.resetForm();
      setCurrentVarietal("");
      setRawPreview(null);
      setFinalPreview(null);
    } catch (e) {
      console.log(e);
    }
  };

  if (loading) return <Loader />;

  return (
    <div className={s.wrapper}>
      {console.log(validationSchema)}
      {console.log(isEdit)}
      <h2 className={s.title}>{isEdit ? "Edit Wine" : "Add New Wine"}</h2>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        enableReinitialize
      >
        {({ values, setFieldValue }) => (
          <Form className={s.form}>
            <DraftAutosave enabled={!isEdit} />
            <div className={`${s.field} ${s.fieldSpan2}`}>
              <label htmlFor="thumb" className={s.label}>
                Wine Image
              </label>

              <input
                id="thumb"
                name="thumb"
                type="file"
                accept="image/*"
                onChange={(e) => onFilePicked(e, setFieldValue)}
                className={s.fileInput}
              />

              <ErrorMessage name="thumb" component="div" className={s.error} />

              {(finalPreview || rawPreview || (isEdit && wine?.thumb)) && (
                <div className={s.previewWrapper}>
                  <img
                    src={finalPreview || rawPreview || wine.thumb}
                    alt="Preview"
                    className={
                      finalPreview || rawPreview
                        ? s.previewDraft
                        : s.previewFinal
                    }
                  />
                </div>
              )}
            </div>

            {/* TITLE */}
            <div className={s.field}>
              <label htmlFor="title" className={s.label}>
                Title
              </label>
              <Field id="title" name="title" className={s.input} />
              <ErrorMessage name="title" component="div" className={s.error} />
            </div>

            {/* TYPE */}
            <div className={s.field}>
              <label htmlFor="type" className={s.label}>
                Type
              </label>
              <Field as="select" id="type" name="type" className={s.select}>
                <option value="">Select a type</option>
                {types.map((t) => (
                  <option key={t._id} value={t._id}>
                    {t.type}
                  </option>
                ))}
              </Field>
              <ErrorMessage name="type" component="div" className={s.error} />
            </div>

            {/* COUNTRY */}
            <div className={s.field}>
              <label htmlFor="country" className={s.label}>
                Country
              </label>
              <Field
                as="select"
                id="country"
                name="country"
                className={s.select}
              >
                <option value="">Select a country</option>
                {COUNTRIES.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </Field>
              <ErrorMessage
                name="country"
                component="div"
                className={s.error}
              />
            </div>

            {/* REGION */}
            <div className={s.field}>
              <label htmlFor="region" className={s.label}>
                Region
              </label>
              <Field id="region" name="region" className={s.input} />
              <ErrorMessage name="region" component="div" className={s.error} />
            </div>

            {/* WINERY */}
            <div className={s.field}>
              <label htmlFor="winery" className={s.label}>
                Winery
              </label>
              <Field id="winery" name="winery" className={s.input} />
              <ErrorMessage name="winery" component="div" className={s.error} />
            </div>

            {/* VARIETALS */}
            <div className={`${s.field} ${s.fieldSpan2}`}>
              <label className={s.label}>Grape varieties</label>

              <div className={s.varietalControls}>
                <select
                  value={currentVarietal}
                  onChange={(e) => setCurrentVarietal(e.target.value)}
                  className={s.select}
                >
                  <option value="">Select a varietal</option>
                  {varietals
                    .filter((v) => !(values.varietal || []).includes(v._id))
                    .map((v) => (
                      <option key={v._id} value={v._id}>
                        {v.varietal}
                      </option>
                    ))}
                </select>

                <button
                  type="button"
                  disabled={!currentVarietal}
                  className={s.varietalAddBtn}
                  onClick={() => {
                    setFieldValue("varietal", [
                      ...(values.varietal || []),
                      currentVarietal,
                    ]);
                    setCurrentVarietal("");
                  }}
                >
                  Add
                </button>
              </div>

              <ErrorMessage
                name="varietal"
                component="div"
                className={s.error}
              />

              {(values.varietal || []).length > 0 ? (
                <ul className={s.varietalList}>
                  {values.varietal.map((id) => {
                    const v = varietals.find((x) => x._id === id);
                    return (
                      <li key={id} className={s.varietalItem}>
                        <span>{v?.varietal || "Unknown"}</span>
                        <button
                          type="button"
                          className={s.varietalRemoveBtn}
                          onClick={() =>
                            setFieldValue(
                              "varietal",
                              values.varietal.filter((x) => x !== id)
                            )
                          }
                        >
                          ✕
                        </button>
                      </li>
                    );
                  })}
                </ul>
              ) : (
                <div className={s.hint}>At least one varietal is required</div>
              )}
            </div>

            {/* YEAR */}
            <div className={s.field}>
              <label htmlFor="year" className={s.label}>
                Year
              </label>
              <Field id="year" name="year" className={s.input} />
              <ErrorMessage name="year" component="div" className={s.error} />
            </div>

            {/* DESCRIPTION */}
            <div className={`${s.field} ${s.fieldFull}`}>
              <label htmlFor="description" className={s.label}>
                Description
              </label>
              <Field
                as="textarea"
                id="description"
                name="description"
                rows="4"
                className={s.textarea}
              />
              <ErrorMessage
                name="description"
                component="div"
                className={s.error}
              />
            </div>

            <div className={s.fieldFull}>
              <button type="submit" className={s.submitBtn}>
                {isEdit ? "Save changes" : "Create wine"}
              </button>
            </div>

            {editorOpen && (
              <ImageEditorModal
                src={rawPreview}
                aspect={1}
                onCancel={() => setEditorOpen(false)}
                onApply={({ file, previewUrl }) => {
                  setFieldValue("thumb", file);
                  setFinalPreview(previewUrl);
                  setEditorOpen(false);
                }}
              />
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
}
