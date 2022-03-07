import { StyleSheet } from "react-native";
import { screenWidth } from "../../commons";

export default StyleSheet.create({
  tabTitle: (isActive) => ({
    color: "black",
    fontSize: 15,
    opacity: isActive ? 1 : 0.5,
    fontWeight: "bold",
    textTransform: "capitalize",
  }),
  indicator: {
    backgroundColor: "black",
    height: 3,
  },
  tab: {
    backgroundColor: "#fff",
  },
  tabView: {
    backgroundColor: "#f1f1f1",
    width: "100%",
  },
});
