import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { selectTypes } from "../../../redux/type/selectors";
import { selectVarietals } from "../../../redux/varietal/selectors";
import { createWineValidationSchema } from "../../../helpers/schema";
import { createWine } from "../../../redux/wines/operations";
import { useNavigate } from "react-router-dom";
import { COUNTRIES } from "../../../constants/countries";

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
    } catch (error) {
      console.log(error.message);
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
    <div>
      <h2>Add New Wine</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={createWineValidationSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue }) => (
          <Form>
            {/* Thumb (File Input) */}
            <div>
              <label htmlFor="thumb">Wine Image</label>
              <input
                id="thumb"
                name="thumb"
                type="file"
                accept="image/*"
                onChange={(event) =>
                  setFieldValue("thumb", event.currentTarget.files[0])
                }
              />
              <ErrorMessage name="thumb" component="div" />
            </div>

            {/* Title */}
            <div>
              <label htmlFor="title">Title</label>
              <Field
                id="title"
                name="title"
                type="text"
                placeholder="Enter wine title"
              />
              <ErrorMessage name="title" component="div" />
            </div>

            {/* Type (Select) */}
            <div>
              <label htmlFor="type">Type</label>
              <Field as="select" id="type" name="type">
                <option value="">Select a type</option>
                {types.map(({ _id, type }) => (
                  <option key={_id} value={_id}>
                    {type}
                  </option>
                ))}
              </Field>
              <ErrorMessage name="type" component="div" />
            </div>

            {/* Country */}
            <div>
              <label htmlFor="country">Country</label>
              <Field
                as="select"
                id="country"
                name="country"
                autoComplete="country"
              >
                <option value="">Select a country</option>
                {COUNTRIES.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </Field>
              <ErrorMessage name="country" component="div" />
            </div>

            {/* Region */}
            <div>
              <label htmlFor="region">Region</label>
              <Field
                id="region"
                name="region"
                type="text"
                placeholder="Enter region"
                autoComplete="region"
              />
              <ErrorMessage name="region" component="div" />
            </div>

            {/* Winery */}
            <div>
              <label htmlFor="winery">Winery</label>
              <Field
                id="winery"
                name="winery"
                type="text"
                placeholder="Enter winery"
              />
              <ErrorMessage name="winery" component="div" />
            </div>

            {/* Varietal (Select with Add/Remove) */}
            <div>
              <label htmlFor="varietal">Varietal</label>
              <div>
                <Field
                  as="select"
                  id="varietal"
                  value={currentVarietal}
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
                >
                  Add
                </button>
              </div>
              <div>
                {selectedVarietals.length > 0 && (
                  <ul>
                    {selectedVarietals.map((varietalId) => {
                      const varietal = varietals.find(
                        (v) => v._id === varietalId
                      );
                      return (
                        <li key={varietalId}>
                          <span>
                            {varietal?.varietal || "Unknown Varietal"}
                          </span>
                          <button
                            type="button"
                            onClick={() =>
                              handleRemoveVarietal(varietalId, setFieldValue)
                            }
                          >
                            Remove
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
              {selectedVarietals.length === 0 && (
                <div>At least one varietal is required</div>
              )}
            </div>

            {/* Year */}
            <div>
              <label htmlFor="year">Year</label>
              <Field
                id="year"
                name="year"
                type="text"
                placeholder="Enter year"
              />
              <ErrorMessage name="year" component="div" />
            </div>

            {/* Description */}
            <div>
              <label htmlFor="description">Description</label>
              <Field
                as="textarea"
                id="description"
                name="description"
                placeholder="Enter description"
                rows="4"
              />
              <ErrorMessage name="description" component="div" />
            </div>
            <button type="submit">create wine</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddWineForm;
