import { StyleSheet, Platform } from "react-native";
import Constants from "expo-constants";
import { screenWidth } from "../../commons";

export default StyleSheet.create({
  root: {
    backgroundColor: "#fff",
    width: screenWidth * 0.9,
    margin: screenWidth * 0.05,
    borderRadius: 10,
    padding: screenWidth * 0.05,
    marginBottom: 0,
  },
  image: {
    width: "100%",
    height: screenWidth * 0.6,
    borderRadius: 10,
    resizeMode: "contain",
    marginBottom: screenWidth * 0.05,
  },
});
