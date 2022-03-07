import { StyleSheet } from "react-native";
import { screenWidth } from "../../commons";

export default StyleSheet.create({
  root: {
    padding: screenWidth * 0.04,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontSize: screenWidth * 0.05,
    fontWeight: "bold",
  },
});
