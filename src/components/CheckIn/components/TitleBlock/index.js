import PropTypes from "prop-types";
import React from "react";
import { View } from "react-native";
import { Icon } from "react-native-elements";
import moment from "moment";

import Text from "../../../Text";

import styles from "./styles";

const TitleBlock = ({ text, createdAt }) => {
  return (
    <View style={styles.root}>
      <Icon
        name="account-group"
        type="material-community"
        containerStyle={styles.rootIcon}
        iconStyle={styles.icon}
      />
      <View style={styles.rootText}>
        <Text style={styles.text}>{text}</Text>
        <Text style={styles.date}>
          {moment(createdAt).format("Do of MMMM YYYY")}
        </Text>
      </View>
    </View>
  );
};

TitleBlock.propTypes = {
  createdAt: PropTypes.string,
  text: PropTypes.string,
};

export default TitleBlock;
