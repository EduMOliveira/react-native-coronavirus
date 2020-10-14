import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const styles = StyleSheet.create({
  topItem: {
    width: wp("85%"),
    height: hp("9%"),
    maxHeight: 67,
    minHeight: 67,
    backgroundColor: "#fff",
    alignSelf: "center",
    borderRadius: 15,
    marginTop: 15,
    flexDirection: "row",

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },

  topImgContainer: {
    flex: 1,
    maxWidth: 65,
    justifyContent: "center",
    alignItems: "center",
  },

  topImg: {
    height: "65%",
    width: "65%",
    resizeMode: "contain",
  },

  topDataContainer: {
    flex: 3,
  },

  topTitle: {
    fontSize: wp("4%"),
    paddingTop: 12,
    paddingHorizontal: 4,
    fontFamily: "QuattrocentoSans_700Bold",
  },

  topDataRow: {
    paddingTop: 8,
    flexDirection: "row",
    marginHorizontal: 5,
  },

  topSub: {
    fontSize: wp("3.1%"),
    fontFamily: "QuattrocentoSans_400Regular",
  },

  topValues: {
    fontSize: wp("3.1%"),
    fontFamily: "QuattrocentoSans_700Bold",
  },
});

export default styles;
