import * as Yup from "yup";

const onlyLetters = /^[A-Za-zА-Яа-яЄєІіЇїҐґ-\s]+$/;
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
    .max(12, "Password is too long"),
});

export const signupValidationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Field name is required")
    .matches(onlyLetters, "The name cannot contain numbers!")
    .min(3, "The name must be longer than 3 symbols!")
    .max(50, "Maximum 50 symbols"),
  email: Yup.string()
    .matches(onlyEmail, "Invalid email format")
    .email("Invalid email format")
    .required("Field email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Field password is required"),
});
