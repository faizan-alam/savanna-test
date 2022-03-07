import React from "react";
import { View, Alert } from "react-native";
import { Formik } from "formik";

import TextInput from "../../../../components/TextInput";
import Button from "../../../../components/Button";
import { validationSchema } from "./schema";
import { useMutation } from "@apollo/client";
import { INSERT_ONE_CHECK_IN } from "../../../../graphql/mutations/checkins";

const INIT_FORM_VALUE = {
  comment: "",
  imageURL: "",
  name: "",
};

const CheckInsForm = () => {
  const [updateCheckIn] = useMutation(INSERT_ONE_CHECK_IN);
  const handleSubmit = (value, { resetForm }) => {
    updateCheckIn({
      variables: {
        ...value,
        createdAt: new Date().toISOString(),
      },
      onCompleted: () => {
        Alert.alert("Successfully Submitted");
        resetForm();
      },
      onError: () => {
        Alert.alert("Something went wrong");
      },
    });
  };
  return (
    <Formik
      initialValues={INIT_FORM_VALUE}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
        isSubmitting,
      }) => (
        <View>
          <TextInput
            onChangeText={handleChange("name")}
            onBlur={handleBlur("name")}
            value={values.name}
            placeholder="Name"
            errorMessage={touched.name && errors.name}
          />
          <TextInput
            onChangeText={handleChange("comment")}
            onBlur={handleBlur("comment")}
            value={values.comment}
            placeholder="Comment"
            errorMessage={touched.comment && errors.comment}
          />
          <TextInput
            onChangeText={handleChange("imageURL")}
            onBlur={handleBlur("imageURL")}
            value={values.imageURL}
            placeholder="ImageUrl"
            errorMessage={touched.imageURL && errors.imageURL}
          />

          <Button title="ADD" onPress={handleSubmit} loading={isSubmitting} />
        </View>
      )}
    </Formik>
  );
};

export default CheckInsForm;
