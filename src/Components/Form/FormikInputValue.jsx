import { useField } from "formik";
import React from "react";
import { StyleSheet } from "react-native";
import StyleInputText from "../Text/StyleInputText";
import StyleText from "../Text/StyleText";

const styles = StyleSheet.create({
    error: {
        color: "red",
        fontSize: 12,
        marginBottom: 20,
        marginTop: -5,
    }
});

const FormikInputValue = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);

  return (
    <>
      <StyleInputText
        value={field.value}
        onChangeText={(value) => helpers.setValue(value)}
        error={meta.error}
        {...props}
      />
      {meta.error && <StyleText style={styles.error}>{meta.error}</StyleText>}
    </>
  );
};

export default FormikInputValue;
