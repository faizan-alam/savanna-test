import React from "react";

import { View } from "react-native";

import Header from "../../components/Header";
import CheckInsTab from "./components/CheckInsTab";

const CheckInsScreen = () => {
  return (
    <>
      <Header title="Checkins" />
      <CheckInsTab />
    </>
  );
};

export default CheckInsScreen;
