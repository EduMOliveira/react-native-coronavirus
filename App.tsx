import React from "react";
import { AppLoading } from "expo";
import { StatusBar } from "expo-status-bar";
import {
  useFonts,
  Ubuntu_700Bold,
  Ubuntu_400Regular,
} from "@expo-google-fonts/ubuntu";
import { SecularOne_400Regular } from "@expo-google-fonts/secular-one";
import {
  QuattrocentoSans_400Regular,
  QuattrocentoSans_700Bold,
} from "@expo-google-fonts/quattrocento-sans";
import { Prompt_700Bold } from "@expo-google-fonts/prompt";

import AppStack from "./src/routes/AppStack";

export default function App() {
  let [fontsLoaded] = useFonts({
    Ubuntu_700Bold,
    SecularOne_400Regular,
    Ubuntu_400Regular,
    QuattrocentoSans_400Regular,
    QuattrocentoSans_700Bold,
    Prompt_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <>
        <AppStack />
        <StatusBar style="dark" />
      </>
    );
  }
}
