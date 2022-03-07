import PropTypes from "prop-types";
import React from "react";
import { View } from "react-native";

import Image from "../Image";

import TitleBlock from "./components/TitleBlock";
import DescriptionBlock from "./components/DescriptionBlock";

import styles from "./styles";

const Checkin = ({ imageURL, title, createdAt, description }) => {
  return (
    <View style={styles.root}>
      {!!imageURL && (
        <Image source={{ uri: imageURL }} containerStyle={styles.image} />
      )}
      <TitleBlock text={title} createdAt={createdAt} />
      <DescriptionBlock text={description} />
    </View>
  );
};

Checkin.propTypes = {
  createdAt: PropTypes.string,
  description: PropTypes.string,
  imageURL: PropTypes.any,
  title: PropTypes.string,
};

export default Checkin;
