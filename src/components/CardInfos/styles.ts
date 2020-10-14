import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const styles = StyleSheet.create({
  iconWrapper: {
    elevation: 10,
    zIndex: 1,
    width: wp("90%"),
  },

  iconCard: {
    width: 90,
    height: 90,
    right: -13,
    position: "absolute",
  },

  cardSintomas: {
    marginTop: 23,
    alignSelf: "center",
    backgroundColor: "#256B71",
    width: wp("90%"),
    height: hp("15%"),
    maxHeight: 100,
    maxWidth: 450,
    borderRadius: 15,
    flexDirection: "row",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },

  cardTextCol: {
    flex: 1,
    flexDirection: "column",
  },

  sintomaText: {
    fontSize: wp("6.4%"),
    marginTop: 9,
    marginLeft: 25,
    color: "#fff",
    fontFamily: "Ubuntu_700Bold",
  },

  sintomaDescText: {
    fontSize: wp("3.35%"),
    marginLeft: 25,
    color: "#2F4858",
    fontFamily: "Ubuntu_700Bold",
  },

  saibaMaisRow: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
    marginLeft: 12,
    marginBottom: 9,
  },

  sintomaMoreText: {
    fontSize: wp("3%"),
    color: "#fff",
    fontFamily: "Ubuntu_700Bold",
  },

  cardCircleCol: {
    flex: 1,
    flexDirection: "column",
    overflow: "hidden",
    borderRadius: 15,
  },

  circleI: {
    width: "75%",
    height: "100%",
    borderRadius: 80,
    marginTop: 20,
    alignSelf: "flex-end",
    backgroundColor: "rgba(47, 103, 109, 0.85)",
    position: "absolute",
  },

  circleII: {
    width: "65%",
    height: "100%",
    borderBottomLeftRadius: 100,
    borderTopLeftRadius: 100,
    alignSelf: "flex-end",
    backgroundColor: "rgba(68, 126, 131, 0.75)",
  },
});

export default styles;
