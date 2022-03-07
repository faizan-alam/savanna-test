import PropTypes from "prop-types";
import React from "react";

import { ActivityIndicator } from "react-native";

import { Image as ElementImage } from "react-native-elements";

const Image = ({ source, containerStyle, ...rest }) => {
  return (
    <ElementImage
      PlaceholderContent={
        <ActivityIndicator
          style={[containerStyle, { backgroundColor: "#fff" }]}
        />
      }
      source={source}
      resizeMode="cover"
      containerStyle={containerStyle}
      {...rest}
    />
  );
};

Image.propTypes = {
  containerStyle: PropTypes.string,
  source: PropTypes.object,
  ...ElementImage.prototype,
};

export default Image;
