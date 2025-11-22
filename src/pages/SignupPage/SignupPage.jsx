import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { signupThunk } from "../../redux/auth/operations";
import { signupValidationSchema } from "../../helpers/schema";
import Container from "../../components/Container/Container";

import s from "./SignupPage.module.css";
import GoogleButton from "../../components/GoogleButton/GoogleButton";

const SignupPage = () => {
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
    <div className={s.signupBackground}>
      <Link className={s.backLink} to="/">
        <svg className={s.backIcon} width="24" height="24">
          <use href="sprite.svg#arrow-back"></use>
        </svg>
        Back to main
      </Link>
      <Container>
        <div className={s.wrapper}>
          <Formik
            initialValues={initialValues}
            validationSchema={signupValidationSchema}
            onSubmit={handleSubmit}
          >
            <Form className={s.form}>
              <h2 className={s.title}>Sign up</h2>

              <div className={s.field}>
                <label className={s.label} htmlFor="username">
                  Name:
                </label>
                <Field
                  className={s.input}
                  type="text"
                  name="username"
                  id="username"
                />
                <ErrorMessage
                  name="username"
                  component="div"
                  style={{ color: "red" }}
                />
              </div>
              <div className={s.field}>
                <label className={s.label} htmlFor="email">
                  Email:
                </label>
                <Field
                  className={s.input}
                  type="email"
                  name="email"
                  id="email"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  style={{ color: "red" }}
                />
              </div>
              <div>
                <label className={s.label} htmlFor="password">
                  Password:
                </label>
                <Field
                  className={s.input}
                  type="password"
                  name="password"
                  id="password"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  style={{ color: "red" }}
                />
              </div>
              <div className={s.field}>
                <label className={s.label} htmlFor="confirmPassword">
                  Confirm Password:
                </label>
                <Field
                  className={s.input}
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
              <button className={s.submitBtn} type="submit">
                Sign Up
              </button>
              <div className={s.divider}>
                <span className={s.span}>or</span>
              </div>

              <GoogleButton>Continue with Google</GoogleButton>
              <p className={s.footerText}>
                Already have an account?
                <Link className={s.link} to="/signin">
                  Sign In
                </Link>
              </p>
            </Form>
          </Formik>
        </div>
      </Container>
    </div>
  );
};

export default SignupPage;
