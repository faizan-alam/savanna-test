import React from "react";
import PropTypes from "prop-types";
import { Tab, TabView as ElementTabView } from "react-native-elements";

import styles from "./styles";

const TabView = ({ items = [] }) => {
  const [index, setIndex] = React.useState(0);

  return (
    <React.Fragment>
      <Tab
        value={index}
        onChange={(e) => setIndex(e)}
        indicatorStyle={styles.indicator}
      >
        {items.map((item, i) => (
          <Tab.Item
            key={`tab-title-item-${i}`}
            title={item.name}
            titleStyle={styles.tabTitle(index === i)}
            style={styles.tab}
            buttonStyle={styles.tab}
          />
        ))}
      </Tab>

      <ElementTabView value={index} onChange={setIndex} animationType="spring">
        {items.map((item, i) => (
          <ElementTabView.Item
            key={`tab-item-${i}`}
            style={styles.tabView}
            onMoveShouldSetResponder={(e) => e.stopPropagation()}
          >
            <item.Component active={index === i} />
          </ElementTabView.Item>
        ))}
      </ElementTabView>
    </React.Fragment>
  );
};

TabView.propTypes = {
  items: PropTypes.array,
};

export default TabView;
