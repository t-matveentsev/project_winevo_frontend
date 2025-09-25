import { Formik, Form, Field, ErrorMessage } from "formik";
import { signinValidationSchema } from "../../../helpers/schema";
import { useDispatch } from "react-redux";
import { signinThunk } from "../../../redux/auth/operations";
import { useNavigate } from "react-router-dom";

const AdminSignin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = async (values, options) => {
    await dispatch(signinThunk(values))
      .unwrap()
      .then(() => {
        navigate("/admin/wines", { replace: true });
        options.resetForm();
      })
      .catch(() =>
        options.setFieldError("password", "invalid email or password")
      )
      .finally(() => options.setSubmitting(false));
  };

  return (
    <div>
      <h3>Admin Sign In</h3>
      <Formik
        initialValues={initialValues}
        validationSchema={signinValidationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <label htmlFor="email">Email:</label>
              <Field type="email" name="email" id="email" />
              <ErrorMessage
                name="email"
                component="div"
                style={{ color: "red" }}
              />
            </div>

            <div>
              <label htmlFor="password">Password:</label>
              <Field type="password" name="password" id="password" />
              <ErrorMessage
                name="password"
                component="div"
                style={{ color: "red" }}
              />
            </div>

            <button type="submit" disabled={isSubmitting}>
              Sign In
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AdminSignin;
