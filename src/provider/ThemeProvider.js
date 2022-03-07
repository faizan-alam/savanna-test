import PropTypes from "prop-types";
import React from "react";

import { ThemeProvider as ElementThemeProvider } from "react-native-elements";
import { SafeAreaProvider } from "react-native-safe-area-context";

import StatusBar from "../components/StatusBar";

const ThemeProvider = ({ children }) => {
  return (
    <SafeAreaProvider>
      <StatusBar />
      <ElementThemeProvider>{children}</ElementThemeProvider>
    </SafeAreaProvider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.any,
};

export default ThemeProvider;
