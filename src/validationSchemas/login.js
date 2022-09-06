import * as yup from "yup";

export const loginValidationSchema = yup.object().shape({
    email: yup.string().email().required("Email is required"),
    password: yup.string().min(8, "Too Short!").max(32, "Too Long!").required("Password is required")
})