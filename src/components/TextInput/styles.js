import { StyleSheet } from "react-native";
import { screenWidth } from "../../commons";

export default StyleSheet.create({
  root: {
    borderWidth: 1,
    width: "100%",
    minHeight: 50,
    marginBottom: 10,
    borderColor: "#ccc",
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  message: {
    borderColor: "red",
    marginBottom: 0,
  },
  error: {
    color: "red",
    marginBottom: 10,
    textTransform: "capitalize",
    fontSize: 12,
  },
});
