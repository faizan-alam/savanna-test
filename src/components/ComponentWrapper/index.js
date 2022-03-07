import PropTypes from "prop-types";
import React from "react";
import { View, ActivityIndicator } from "react-native";
import Text from "../Text";

import styles from "./styles";

const ComponentWrapper = ({
  children,
  loading = false,
  error = "",
  empty = true,
}) => {
  return (
    <View style={styles.root}>
      {loading && <ActivityIndicator size="large" />}
      {!loading && (error || empty) && <Text>{error || "No Data Found"}</Text>}
      {!loading && !error && !empty && children}
    </View>
  );
};

ComponentWrapper.propTypes = {
  empty: PropTypes.bool,
  error: PropTypes.string,
  loading: PropTypes.bool,
};

export default ComponentWrapper;
