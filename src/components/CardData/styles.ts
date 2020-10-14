import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const styles = StyleSheet.create({
  dataCard: {
    width: wp("28%"),
    height: hp("17%"),
    maxHeight: 130,
    backgroundColor: "#256B71",
    margin: 5,
    borderRadius: 15,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },

  dataIconCircle: {
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    width: 30,
    height: 30,
    borderRadius: 30,
    marginBottom: 18,
  },

  dataValue: {
    fontSize: wp("3.7%"),
    fontFamily: "SecularOne_400Regular",
    color: "#fff",
  },

  dataType: {
    fontSize: wp("3.2%"),
    fontFamily: "Ubuntu_700Bold",
    color: "#2F4858",
  },
});

export default styles;
