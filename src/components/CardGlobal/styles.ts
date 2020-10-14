import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const styles = StyleSheet.create({
  cardTypes: {
    width: wp("40%"),
    height: hp("22%"),
    minHeight: 140,
    backgroundColor: "#fff",
    borderRadius: 15,

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },

  cardTitle: {
    fontSize: wp("4.2%"),
    padding: 12,
    fontFamily: "QuattrocentoSans_700Bold",
  },

  cardDailyContainer: {
    alignSelf: "flex-end",
    paddingHorizontal: 5,
    marginRight: 15,
    borderRadius: 10,
  },

  cardDaily: {
    fontSize: wp("3.8%"),
    fontFamily: "QuattrocentoSans_400Regular",
    alignSelf: "flex-end",
    borderRadius: 10,
  },

  cardTotal: {
    fontSize: wp("5%"),
    fontFamily: "QuattrocentoSans_700Bold",
    marginLeft: 12,
  },

  cardChart: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    maxHeight: 70,
  },

  chart: {
    height: "95%",
    width: "70%",
  },
});

export default styles;
