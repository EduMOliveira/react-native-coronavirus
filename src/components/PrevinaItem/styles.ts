import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const styles = StyleSheet.create({
  cardRow: {
    marginTop: hp("2%"),
    width: wp("86%"),
    height: hp("16.6%"),
    borderRadius: 15,
    backgroundColor: "#fff",
    flexDirection: "row",

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 10,
  },

  cardCol: {
    flex: 2,
    flexDirection: "column",
  },

  cardTitle: {
    marginLeft: 15,
    marginTop: 12,
    fontSize: wp("5.3%"),
    color: "#000",
    fontFamily: "QuattrocentoSans_400Regular",
  },

  cardDesc: {
    fontSize: wp("3.5%"),
    marginLeft: 15,
    color: "#8C8C8C",
    fontFamily: "QuattrocentoSans_400Regular",
  },

  cardCircleCol: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    overflow: "hidden",
    borderRadius: 15,
  },

  cardCircle: {
    height: "150%",
    position: "absolute",
    width: "100%",
    marginLeft: 10,
    borderBottomLeftRadius: 100,
    borderTopLeftRadius: 100,
    backgroundColor: "rgba(41, 89, 103, 0.3)",
  },

  cardImg: {
    alignSelf: "center",
    marginLeft: 15,
    width: "65%",
    height: "65%",
    resizeMode: "contain",
  },
});

export default styles;
