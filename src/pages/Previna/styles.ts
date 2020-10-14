import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

const styles = StyleSheet.create({
  listContent: {
    flexGrow: 1,
    paddingBottom: 30,
    alignItems: "center",
  },
  container: {
    flex: 1,
    alignSelf: "center",
    width: wp("95%"),
  },
});

export default styles;
