import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { signupThunk } from "../../redux/auth/operations";
import { signupValidationSchema } from "../../helpers/schema";

const SignupForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const handleSubmit = (values, options) => {
    try {
      dispatch(signupThunk(values));
    } catch (error) {
      console.log(error);
    } finally {
      navigate("/");
      options.resetForm();
    }
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={signupValidationSchema}
      >
        <Form>
          <label>
            <span>Name:</span>
            <Field name="name"></Field>
            <ErrorMessage name="name" component="p" />
          </label>
          <label>
            <span>Email:</span>
            <Field name="email"></Field>
            <ErrorMessage name="email" component="p" />
          </label>
          <label>
            <span>Password:</span>
            <Field name="password" type="password"></Field>
            <ErrorMessage name="password" component="p" />
          </label>
          <label>
            <span>Confirm password:</span>
            <Field name="confirmPassword" type="password"></Field>
            <ErrorMessage name="confirmPassword" component="p" />
          </label>
          <button type="submit">Register</button>
          <div>
            <p>You already have account?</p>
            <Link to="/login">Log In</Link>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default SignupForm;
