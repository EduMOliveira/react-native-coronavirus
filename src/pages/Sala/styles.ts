import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  title: {
    fontSize: 25,
    fontFamily: "Prompt_700Bold",
    marginLeft: 25,
    marginTop: 16,
  },

  cardRow: {
    width: wp("85%"),
    paddingTop: 15,
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  seeAll: {
    fontSize: 12,
    fontFamily: "QuattrocentoSans_700Bold",
    color: "#7A7A7A",
    alignSelf: "flex-end",
    paddingHorizontal: wp("9%"),
  },
});

export default styles;
