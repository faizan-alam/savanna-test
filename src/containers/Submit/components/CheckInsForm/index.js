import React from "react";
import { View } from "react-native";
import TextInput from "../../../../components/TextInput";
import Button from "../../../../components/Button";

const CheckInsForm = () => {
  return (
    <View>
      <TextInput placeholder="Name" errorMessage="some" />
      <TextInput placeholder="Comment" />
      <TextInput placeholder="ImageUrl" />

      <Button title="ADD" onPress={() => null} />
    </View>
  );
};

export default CheckInsForm;
