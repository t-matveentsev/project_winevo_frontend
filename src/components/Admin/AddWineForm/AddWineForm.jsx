import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { selectTypes } from "../../../redux/type/selectors";
import { selectVarietals } from "../../../redux/varietal/selectors";
import { createWineValidationSchema } from "../../../helpers/schema";
import { createWine } from "../../../redux/wines/operations";
import { useNavigate } from "react-router-dom";
import { COUNTRIES } from "../../../constants/countries";
import ImageEditorModal from "../../ImageEditorModal/ImageEditorModal";

import s from "./AddWineForm.module.css";

const AddWineForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const types = useSelector(selectTypes);
  const varietals = useSelector(selectVarietals);
  const [selectedVarietals, setSelectedVarietals] = useState([]);
  const [currentVarietal, setCurrentVarietal] = useState("");

  // logic for added varietal and deleted in list
  const handleAddVarietal = (setFieldValue) => {
    if (currentVarietal && !selectedVarietals.includes(currentVarietal)) {
      setSelectedVarietals([...selectedVarietals, currentVarietal]);
      setFieldValue("varietal", [...selectedVarietals, currentVarietal]);
      setCurrentVarietal("");
    }
  };

  // logic for deleted varietal end added in list
  const handleRemoveVarietal = (varietalId, setFieldValue) => {
    const updatedVarietals = selectedVarietals.filter(
      (id) => id !== varietalId
    );
    setSelectedVarietals(updatedVarietals);
    setFieldValue("varietal", updatedVarietals);
  };

  const [rawPreview, setRawPreview] = useState(null); // URL оригіналу
  const [finalPreview, setFinalPreview] = useState(null); // URL після кропу
  const [editorOpen, setEditorOpen] = useState(false);

  const onFilePicked = (e, setFieldValue) => {
    const file = e.currentTarget.files?.[0];
    if (!file) return;

    const url = URL.createObjectURL(file);
    setRawPreview(url);
    setEditorOpen(true);

    // тимчасово очищаємо thumb, встановимо після кропу
    setFieldValue("thumb", "");
  };

  const handleSubmit = async (values, actions) => {
    const formData = new FormData();
    if (values.thumb) {
      formData.append("thumb", values.thumb);
    }
    formData.append("title", values.title);
    formData.append("type", values.type);
    formData.append("country", values.country);
    formData.append("region", values.region);
    formData.append("winery", values.winery);
    values.varietal.forEach((varietalId) => {
      formData.append("varietal[]", varietalId);
    });
    formData.append("year", values.year);
    formData.append("description", values.description);

    try {
      const response = await dispatch(createWine(formData)).unwrap();
      actions.resetForm();
      setSelectedVarietals([]);
      navigate(`/wine-details/${response._id}`, {
        state: { admin: true, from: "/admin" },
      });
    } catch (e) {
      console.log(e.message);
    }
  };

  const initialValues = {
    thumb: "",
    title: "",
    type: "",
    country: "",
    region: "",
    winery: "",
    varietal: [],
    year: "",
    description: "",
  };

  return (
    <div className={s.wrapper}>
      <h2 className={s.title}>Add New Wine</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={createWineValidationSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue }) => (
          <Form className={s.form}>
            {/* Wine Image */}
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

              {(rawPreview || finalPreview) && (
                <div className={s.previewWrapper}>
                  <img
                    src={finalPreview || rawPreview}
                    alt="Preview"
                    className={finalPreview ? s.previewFinal : s.previewDraft}
                  />
                </div>
              )}
            </div>

            {/* Title */}
            <div className={s.field}>
              <label htmlFor="title" className={s.label}>
                Title
              </label>
              <Field
                id="title"
                name="title"
                type="text"
                placeholder="Enter wine title"
                className={s.input}
              />
              <ErrorMessage name="title" component="div" className={s.error} />
            </div>

            {/* Type */}
            <div className={s.field}>
              <label htmlFor="type" className={s.label}>
                Type
              </label>
              <Field as="select" id="type" name="type" className={s.select}>
                <option value="">Select a type</option>
                {types.map(({ _id, type }) => (
                  <option key={_id} value={_id}>
                    {type}
                  </option>
                ))}
              </Field>
              <ErrorMessage name="type" component="div" className={s.error} />
            </div>

            {/* Country */}
            <div className={s.field}>
              <label htmlFor="country" className={s.label}>
                Country
              </label>
              <Field
                as="select"
                id="country"
                name="country"
                autoComplete="country"
                className={s.select}
              >
                <option value="">Select a country</option>
                {COUNTRIES.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </Field>
              <ErrorMessage
                name="country"
                component="div"
                className={s.error}
              />
            </div>

            {/* Region */}
            <div className={s.field}>
              <label htmlFor="region" className={s.label}>
                Region
              </label>
              <Field
                id="region"
                name="region"
                type="text"
                placeholder="Enter region"
                autoComplete="region"
                className={s.input}
              />
              <ErrorMessage name="region" component="div" className={s.error} />
            </div>

            {/* Winery */}
            <div className={s.field}>
              <label htmlFor="winery" className={s.label}>
                Winery
              </label>
              <Field
                id="winery"
                name="winery"
                type="text"
                placeholder="Enter winery"
                className={s.input}
              />
              <ErrorMessage name="winery" component="div" className={s.error} />
            </div>

            {/* Varietals */}
            <div className={`${s.field} ${s.fieldSpan2}`}>
              <label htmlFor="varietal" className={s.label}>
                Grape varieties
              </label>
              <div className={s.varietalControls}>
                <Field
                  as="select"
                  id="varietal"
                  value={currentVarietal}
                  className={s.select}
                  onChange={(e) => setCurrentVarietal(e.target.value)}
                >
                  <option value="">Select a varietal</option>
                  {varietals
                    .filter((v) => !selectedVarietals.includes(v._id))
                    .map((varietal) => (
                      <option key={varietal._id} value={varietal._id}>
                        {varietal.varietal}
                      </option>
                    ))}
                </Field>
                <button
                  type="button"
                  onClick={() => handleAddVarietal(setFieldValue)}
                  disabled={!currentVarietal}
                  className={s.varietalAddBtn}
                >
                  Add
                </button>
              </div>

              {selectedVarietals.length > 0 ? (
                <ul className={s.varietalList}>
                  {selectedVarietals.map((varietalId) => {
                    const varietal = varietals.find(
                      (v) => v._id === varietalId
                    );
                    return (
                      <li key={varietalId} className={s.varietalItem}>
                        <span>{varietal?.varietal || "Unknown Varietal"}</span>
                        <button
                          type="button"
                          className={s.varietalRemoveBtn}
                          onClick={() =>
                            handleRemoveVarietal(varietalId, setFieldValue)
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

            {/* Year */}
            <div className={s.field}>
              <label htmlFor="year" className={s.label}>
                Year
              </label>
              <Field
                id="year"
                name="year"
                type="text"
                placeholder="Enter year"
                className={s.input}
              />
              <ErrorMessage name="year" component="div" className={s.error} />
            </div>

            {/* Description */}
            <div className={`${s.field} ${s.fieldFull}`}>
              <label htmlFor="description" className={s.label}>
                Description
              </label>
              <Field
                as="textarea"
                id="description"
                name="description"
                placeholder="Enter description"
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
                create wine
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
};

export default AddWineForm;
