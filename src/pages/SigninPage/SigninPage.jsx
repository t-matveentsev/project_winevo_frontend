import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { signinThunk } from "../../redux/auth/operations";
import { signinValidationSchema } from "../../helpers/schema";

import Container from "../../components/Container/Container";
import GoogleButton from "../../components/GoogleButton/GoogleButton";

import s from "./SigninPage.module.css";

const SigninPage = () => {
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
        navigate("/home", { replace: true });
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
    <section className={s.signinBackground}>
      <Link className={s.backLink} to="/">
        <p className={s.backBtn}>← Back</p>
      </Link>
      <Container>
        <div className={s.wrapper}>
          <Formik
            initialValues={initialValues}
            validationSchema={signinValidationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className={s.form}>
                <h2 className={s.title}>Sign in</h2>

                <div className={s.field}>
                  <label className={s.label} htmlFor="email">
                    Email
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
                    className={s.error}
                  />
                </div>

                <div className={s.field}>
                  <label className={s.label} htmlFor="password">
                    Password
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
                    className={s.error}
                  />
                </div>

                <button
                  className={s.submitBtn}
                  type="submit"
                  disabled={isSubmitting}
                >
                  Sign In
                </button>

                <div className={s.divider}>
                  <span className={s.span}>or</span>
                </div>

                <GoogleButton>Continue with Google</GoogleButton>
                <p className={s.footerText}>
                  New to Wineevo?
                  <Link className={s.link} to="/signup">
                    Create an account!
                  </Link>
                </p>
              </Form>
            )}
          </Formik>
        </div>
      </Container>
    </section>
  );
};

export default SigninPage;
