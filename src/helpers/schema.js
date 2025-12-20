import * as Yup from "yup";

const onlyLetters = /^[A-Za-zĄąĆćĘęŁłŃńÓóŚśŹźŻż\s-]+$/;
const onlyEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export const signinValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("Email is required")
    .matches(onlyEmail, "Invalid email format")
    .min(3, "Email must be at least 3 characters long")
    .max(50, "Email is too long")
    .trim(),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 8 characters long")
    .max(35, "Password is too long"),
});

export const signupValidationSchema = Yup.object().shape({
  username: Yup.string()
    .required("Field name is required")
    .matches(onlyLetters, "The name cannot contain numbers!")
    .min(3, "The name must be longer than 3 symbols!")
    .max(50, "Maximum 50 symbols"),
  email: Yup.string()
    .matches(onlyEmail, "Invalid email format")
    .email("Invalid email format")
    .required("Field email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .max(35, "Password is too long")
    .required("Field password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
});

export const signinAdminValidationSchema = Yup.object().shape({
  email: Yup.string().required("Field name is required"),
  password: Yup.string().required("Field name is required"),
});

export const createWineValidationSchema = Yup.object().shape({
  thumb: Yup.mixed().test("fileSize", "File size is too large", (value) => {
    return !value || (value && value.size <= 5 * 1024 * 1024);
  }),
  title: Yup.string()
    .min(4, "Must be at least 4 characters")
    .max(50, "Must be 50 characters or less")
    .required(),
  type: Yup.string().required(),
  country: Yup.string()
    .min(4, "Must be at least 4 characters")
    .max(15, "Must be 15 characters or less")
    .required(),
  region: Yup.string().required(),
  winery: Yup.string().required(),
  varietal: Yup.array()
    .of(Yup.string().trim())
    .min(1, "At least one varietal is required")
    .required(),
  year: Yup.string().min(4).max(4).required(),
  description: Yup.string()
    .min(30, "Must be at least 30 characters")
    .max(1000, "Must be 500 characters or less")
    .required(),
});

export const editWineValidationSchema = Yup.object().shape({
  thumb: Yup.mixed().test("fileSize", "File size is too large", (value) => {
    return !value || (value instanceof File && value.size <= 5 * 1024 * 1024);
  }),
  title: Yup.string()
    .min(4, "Must be at least 4 characters")
    .max(50, "Must be 50 characters or less"),
  type: Yup.string(),
  country: Yup.string()
    .min(4, "Must be at least 4 characters")
    .max(15, "Must be 15 characters or less"),
  region: Yup.string(),
  winery: Yup.string(),
  varietal: Yup.array().of(Yup.string().trim()),
  year: Yup.string().min(4).max(4),
  description: Yup.string()
    .min(30, "Must be at least 30 characters")
    .max(1000, "Must be 500 characters or less"),
});
