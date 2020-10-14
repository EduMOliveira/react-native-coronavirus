import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Main from "../pages/Main";
import Sintomas from "../pages/Sintomas";
import Previna from "../pages/Previna";
import Sala from "../pages/Sala";
import SalaTodos from "../pages/SalaTodos";

const AppStack = () => {
  const { Navigator, Screen } = createStackNavigator();
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="Main" component={Main} options={{ headerShown: false }} />
        <Screen
          name="Sintomas"
          component={Sintomas}
          options={{
            title: "Sintomas",
            headerStyle: {
              backgroundColor: "#fff",
            },
            headerTintColor: "#000",
            headerTitleStyle: {
              fontSize: 21,
              fontFamily: "Ubuntu_400Regular",
            },
            headerBackTitle: "Voltar",
          }}
        />
        <Screen
          name="Previna"
          component={Previna}
          options={{
            title: "Previna-se",
            headerStyle: {
              backgroundColor: "#fff",
            },
            headerTintColor: "#000",
            headerTitleStyle: {
              fontSize: 21,
              fontFamily: "Ubuntu_400Regular",
            },
            headerBackTitle: "Voltar",
          }}
        />
        <Screen
          name="Sala"
          component={Sala}
          options={{
            title: "Sala de Situação",
            headerStyle: {
              backgroundColor: "#fff",
            },
            headerTintColor: "#000",
            headerTitleStyle: {
              fontSize: 21,
              fontFamily: "Ubuntu_400Regular",
            },
            headerBackTitle: "Voltar",
          }}
        />
        <Screen
          name="SalaTodos"
          component={SalaTodos}
          options={{
            title: "Sala de Situação",
            headerStyle: {
              backgroundColor: "#fff",
            },
            headerTintColor: "#000",
            headerTitleStyle: {
              fontSize: 21,
              fontFamily: "Ubuntu_400Regular",
            },
            headerBackTitle: "Voltar",
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
};

export default AppStack;
