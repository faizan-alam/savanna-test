import { StyleSheet } from "react-native";

export default StyleSheet.create({
  root: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    height: 45,
  },
  rootIcon: {
    backgroundColor: "#d2d2d2",
    marginRight: 10,
    marginBottom: 10,
    borderRadius: 10,
    width: 45,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    color: "#fff",
  },
  rootText: {
    height: "100%",
    justifyContent: "space-between",
  },
  text: {
    fontSize: 19,
    textTransform: "capitalize",
  },
  date: {
    fontSize: 15,
    color: "#422adf",
  },
});
