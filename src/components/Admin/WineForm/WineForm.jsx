import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";

import { selectTypes } from "../../../redux/type/selectors";
import { selectVarietals } from "../../../redux/varietal/selectors";
// import { selectLoading } from "../../../redux/wines/selectors";
import { createWine, updateWine } from "../../../redux/wines/operations";

import {
  createWineValidationSchema,
  editWineValidationSchema,
} from "../../../helpers/schema";

import { COUNTRIES } from "../../../constants/countries";
import ImageEditorModal from "../../ImageEditorModal/ImageEditorModal";
import Loader from "../../Loader/Loader";
import s from "./WineForm.module.css";

export default function WineForm({ wine }) {
  const {
    _id,
    type,
    title,
    country,
    region,
    winery,
    varietal,
    year,
    description,
  } = wine || {};

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [currentVarietal, setCurrentVarietal] = useState("");
  const [rawPreview, setRawPreview] = useState(null);
  const [finalPreview, setFinalPreview] = useState(null);
  const [editorOpen, setEditorOpen] = useState(false);

  const varietals = useSelector(selectVarietals);
  const types = useSelector(selectTypes);
  // const loading = useSelector(selectLoading);

  const initialValues = useMemo(
    () => ({
      type: type || "",
      title: title || "",
      country: country || "",
      region: region || "",
      winery: winery || "",
      varietal: Array.isArray(wine?.varietal)
        ? varietals
            .filter((v) => varietal.includes(v.varietal))
            .map((v) => v._id)
        : [],
      year: year || "",
      description: description || "",
      thumb: "",
    }),
    [
      type,
      title,
      country,
      region,
      winery,
      wine?.varietal,
      varietals,
      year,
      description,
      varietal,
    ]
  );

  const onFilePicked = (e, setFieldValue) => {
    const file = e.currentTarget.files?.[0];
    if (!file) return;

    setRawPreview(URL.createObjectURL(file));
    setEditorOpen(true);
    setFieldValue("thumb", "");
  };

  function buildFormData(values) {
    const data = new FormData();

    let bodyHasAtLeastOneField = false;
    let hasThumb = false;

    if (values.thumb instanceof File) {
      data.append("thumb", values.thumb);
      hasThumb = true;
    }

    const maybeAppend = (key) => {
      const val = values[key];
      if (val === "" || val === null || val === undefined) return;

      if (!wine) {
        data.append(key, val);
        bodyHasAtLeastOneField = true;
        return;
      }

      if (String(val) !== String(initialValues[key] ?? "")) {
        data.append(key, val);
        bodyHasAtLeastOneField = true;
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
    const originalVarietal = initialValues.varietal || [];

    const sameVarietal =
      currentVarietal.length === originalVarietal.length &&
      currentVarietal.every((id) => originalVarietal.includes(id));

    if (!wine || !sameVarietal) {
      currentVarietal.forEach((id) => data.append("varietal[]", id));
      bodyHasAtLeastOneField = true;
    }

    if (wine && hasThumb && !bodyHasAtLeastOneField) {
      data.append("title", values.title || initialValues.title || "");
    }

    return data;
  }

  const handleSubmit = async (values, actions) => {
    try {
      const formData = buildFormData(values);

      if (wine) {
        await dispatch(updateWine({ id: _id, formData })).unwrap();
        navigate("/admin/home");
      } else {
        const created = await dispatch(createWine(formData)).unwrap();
        // localStorage.removeItem(DRAFT_KEY);
        navigate(`/wine-details/${created._id}`, { state: { admin: true } });
      }

      actions.resetForm();
      setCurrentVarietal("");
      setRawPreview(null);
      setFinalPreview(null);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className={s.wrapper}>
      <h2 className={s.title}>{wine ? "Edit Wine" : "Add New Wine"}</h2>

      <Formik
        initialValues={initialValues}
        validationSchema={
          wine ? editWineValidationSchema : createWineValidationSchema
        }
        onSubmit={handleSubmit}
        enableReinitialize
      >
        {({ values, setFieldValue }) => (
          <Form className={s.form}>
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

              {(finalPreview || rawPreview || (wine && wine?.thumb)) && (
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
                  {values.varietal.map((item) => {
                    const v = varietals.find(
                      (x) => x._id === item || x.varietal === item
                    );

                    return (
                      <li key={item} className={s.varietalItem}>
                        <span>{v?.varietal || item || "Unknown"}</span>

                        <button
                          type="button"
                          className={s.varietalRemoveBtn}
                          onClick={() =>
                            setFieldValue(
                              "varietal",
                              values.varietal.filter((x) => x !== item)
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
                {wine ? "Save changes" : "Create wine"}
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
