import PropTypes from "prop-types";
import React from "react";
import { TextInput as RNTextInput } from "react-native";
import Text from "../Text";

import styles from "./styles";

const TextInput = ({ errorMessage = "", ...rest }) => {
  return (
    <>
      <RNTextInput
        style={[styles.root, !!errorMessage && styles.message]}
        {...rest}
      />
      {!!errorMessage && <Text style={styles.error}>{errorMessage}</Text>}
    </>
  );
};

TextInput.propTypes = {};

export default TextInput;
