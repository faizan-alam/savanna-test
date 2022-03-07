import PropTypes from "prop-types";
import React from "react";
import { View } from "react-native";
import Text from "../../../Text";

import styles from "./styles";

const DescriptionBlock = ({ text }) => {
  return (
    <View style={styles.root}>
      <Text>{text}</Text>
    </View>
  );
};

DescriptionBlock.propTypes = {
  text: PropTypes.string,
};

export default DescriptionBlock;
