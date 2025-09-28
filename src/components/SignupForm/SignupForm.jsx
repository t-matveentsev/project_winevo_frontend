import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { signupThunk } from "../../redux/auth/operations";
import { signupValidationSchema } from "../../helpers/schema";

const SignupForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const handleSubmit = (values, options) => {
    const { username, email, password } = values;
    dispatch(signupThunk({ username, email, password }))
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

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={signupValidationSchema}
        onSubmit={handleSubmit}
      >
        <Form
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            width: "300px",
          }}
        >
          <div>
            <label htmlFor="username">Name:</label>
            <Field type="text" name="username" id="username" />
            <ErrorMessage
              name="username"
              component="div"
              style={{ color: "red" }}
            />
          </div>

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

          <div>
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <Field
              type="password"
              name="confirmPassword"
              id="confirmPassword"
            />
            <ErrorMessage
              name="confirmPassword"
              component="div"
              style={{ color: "red" }}
            />
          </div>

          <button type="submit">Sign Up</button>
        </Form>
      </Formik>
    </div>
  );
};

export default SignupForm;
