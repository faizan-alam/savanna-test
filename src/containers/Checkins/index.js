import React from "react";
import { FlatList } from "react-native";

import Checkin from "../../components/CheckIn";

import styles from "./styles";

import DUMMY_DATA from "../../commons/dummy.json";

const Checkins = () => {
  const renderCheckin = ({ item }) => (
    <Checkin
      createdAt={item.created_at}
      description={item.comment}
      imageURL={item.image_url}
      title={item.name}
    />
  );
  return (
    <FlatList
      contentContainerStyle={styles.root}
      data={DUMMY_DATA.check_in}
      keyExtractor={(data, index) => `checkin-item-${data.id}-${index}`}
      renderItem={renderCheckin}
    />
  );
};

export default Checkins;
