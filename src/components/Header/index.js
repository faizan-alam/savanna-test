import React from "react";
import PropTypes from "prop-types";

import { View } from "react-native";

import Text from "../Text";

import styles from "./styles";

const Header = ({ title }) => {
  return (
    <View style={styles.root}>
      <Text style={styles.heading}>{title}</Text>
    </View>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
