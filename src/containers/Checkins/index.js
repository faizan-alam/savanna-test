import PropTypes from "prop-types";
import React from "react";
import { FlatList } from "react-native";

import Checkin from "../../components/CheckIn";

import styles from "./styles";

import useCheckins from "../../hook/useCheckins";
import ComponentWrapper from "../../components/ComponentWrapper";

const Checkins = ({ active = false }) => {
  const [getData, { data, loading, error }] = useCheckins();
  React.useEffect(() => {
    if (active) getData();
  }, [active]);

  const renderCheckin = ({ item }) => (
    <Checkin
      createdAt={item.created_at}
      description={item.comment}
      imageURL={item.image_url}
      title={item.name}
    />
  );

  return (
    <ComponentWrapper empty={!data?.length} error={error} loading={loading}>
      <FlatList
        contentContainerStyle={styles.root}
        data={data}
        keyExtractor={(data, index) => `checkin-item-${data.id}-${index}`}
        renderItem={renderCheckin}
      />
    </ComponentWrapper>
  );
};

Checkins.propTypes = {
  active: PropTypes.bool,
};

export default Checkins;
