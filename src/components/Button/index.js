import PropTypes from "prop-types";
import React from "react";
import { Button as ElementButton } from "react-native-elements";

import styles from "./styles";

const Button = ({
  loading,
  disabled,
  style = {},
  title = "",
  onPress = () => null,
  ...rest
}) => {
  return (
    <ElementButton
      {...rest}
      buttonStyle={[styles.root, style && style]}
      title={title}
      onPress={onPress}
      disabled={disabled || loading}
      loading={loading}
      disabledStyle={styles.disabled}
    />
  );
};

Button.propTypes = {
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  onPress: PropTypes.func,
  style: PropTypes.object,
  title: PropTypes.string,
};

export default Button;
