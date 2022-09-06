import React from "react";
import { Formik, useFormik } from "formik";
import { Button, StyleSheet, View } from "react-native";
import FormikInputValue from "../Form/FormikInputValue";
import { loginValidationSchema } from "../../validationSchemas/login";

const initialValues = {
  email: "",
  password: "",
};

const styles = StyleSheet.create({
  form: {
    margin: 12,
  },
});

const Login = () => {
  return (
    <Formik
      validationSchema={loginValidationSchema}
      initialValues={initialValues}
      onSubmit={(values) => console.log(values)}
    >
      {({ handleSubmit, isSubmitting }) => {
        return (
          <View style={styles.form}>
            <FormikInputValue placeholder="Email" name="email" />
            <FormikInputValue
              placeholder="Password"
              name="password"
              secureTextEntry
            />
            <Button
              onPress={handleSubmit}
              disabled={isSubmitting}
              title="Log in"
            />
          </View>
        );
      }}
    </Formik>
  );
};

export default Login;
