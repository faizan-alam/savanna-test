import React from "react";
// import PropTypes from "prop-types";

import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { View } from "react-native";

import styles from "./styles";

const StatusBar = (props) => {
  return (
    <View style={styles.root}>
      <ExpoStatusBar style="dark" {...props} />
    </View>
  );
};

StatusBar.propTypes = {
  ...ExpoStatusBar.prototype,
};
export default StatusBar;
