import { useDispatch, useSelector } from "react-redux";
import { signinValidationSchema } from "../../helpers/schema";
import { signinThunk } from "../../redux/auth/operations";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";

import Container from "../Container/Container";
import GoogleButton from "../GoogleButton/GoogleButton";

const SigninForm = ({ admin = false, main = false }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const location = useLocation();
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
        navigate("/", { replace: true });
        options.resetForm();
      })
      .catch(() =>
        options.setFieldError("password", "invalid email or password")
      )
      .finally(() => options.setSubmitting(false));
  };

  if (isLoggedIn) {
    return <Navigate to="/home" replace state={{ from: location }} />;
  }

  return (
    <Container>
      {admin && <h3>Admin Sign In</h3>}
      {main && <h3>Sign in</h3>}
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
            <p>
              Don’t have an account? <Link to="/signup">signup</Link>
            </p>

            <GoogleButton>Google</GoogleButton>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default SigninForm;
