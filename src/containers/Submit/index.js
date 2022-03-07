import React from "react";
import { View } from "react-native";
import Text from "../../components/Text";
import CheckInsForm from "./components/CheckInsForm";

import styles from "./styles";

const Submit = () => {
  return (
    <View style={styles.root}>
      <CheckInsForm />
    </View>
  );
};

export default Submit;
