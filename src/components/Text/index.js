import PropTypes from "prop-types";
import React from "react";

import { Text as ElementText } from "react-native-elements";

const Text = ({ children, ...rest }) => {
  return <ElementText {...rest}>{children}</ElementText>;
};

Text.propTypes = {
  children: PropTypes.any,
  ...ElementText.propTypes,
};

export default Text;
