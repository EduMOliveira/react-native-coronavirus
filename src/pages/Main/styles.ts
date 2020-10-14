import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  headerContainer: {
    width: wp("100%"),
    height: hp("28%"),
  },

  headerImg: {
    marginTop: -2,
    width: "100%",
    height: "100.2%",
    resizeMode: "stretch",
  },

  headerTextContainer: {
    width: 190,
    position: "absolute",
    height: 195,
    justifyContent: "center",
  },

  headerText: {
    fontSize: wp("8%"),
    textAlign: "center",
    color: "#fff",
    fontFamily: "Ubuntu_700Bold",
  },

  dataRow: {
    marginTop: 15,
    width: wp("90%"),
    maxWidth: 450,
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "center",
  },

  buttonSala: {
    width: 190,
    height: wp("11%"),
    borderBottomLeftRadius: 15,
    borderTopLeftRadius: 15,
    marginTop: 12,
    paddingHorizontal: 15,
    backgroundColor: "#256B71",
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-end",
    justifyContent: "space-between",

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 15,
  },

  buttonSalaText: {
    fontSize: wp("3.4%"),
    fontFamily: "SecularOne_400Regular",
    color: "#fff",
  },

  buttonSalaCircle: {
    width: 30,
    height: 30,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    right: 0,
    backgroundColor: "rgba(62, 120, 126, 0.5)",
  },
});

export default styles;
