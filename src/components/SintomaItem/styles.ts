import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const styles = StyleSheet.create({
  cardContainer: {
    width: wp("42%"),
    height: 180,
    borderRadius: 15,
    backgroundColor: "#fff",
    paddingTop: 24,
    paddingBottom: 9,
    flexDirection: "column",
    justifyContent: "space-between",

    shadowColor: "#000",
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 10,
  },

  bgImg: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
    position: "absolute",
    alignSelf: "center",
  },

  sintomaImg: {
    width: "62%",
    height: "62%",
    resizeMode: "contain",
    alignSelf: "center",
  },

  sintomaText: {
    fontSize: 16,
    textAlign: "center",
    fontFamily: "QuattrocentoSans_400Regular",
  },
});

export default styles;
