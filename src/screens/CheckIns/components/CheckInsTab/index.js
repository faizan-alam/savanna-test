import React, { useMemo } from "react";

import TabView from "../../../../components/TabView";
import Checkins from "../../../../containers/Checkins";
import Submit from "../../../../containers/Submit";

const CheckInsTab = () => {
  const tabItems = useMemo(() => {
    return [
      {
        name: "Submit",
        Component: Submit,
      },
      {
        name: "Check-ins",
        Component: Checkins,
      },
    ];
  }, []);
  return <TabView items={tabItems} />;
};

export default CheckInsTab;
