import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const styles = StyleSheet.create({
  listContainer: {
    marginTop: wp("4%"),
    width: wp("88%"),
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "center",
  },
});

export default styles;
