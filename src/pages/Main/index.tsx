import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";
import {
  MaterialCommunityIcons,
  AntDesign,
  FontAwesome5,
  MaterialIcons,
} from "@expo/vector-icons";
import { useNavigation, useIsFocused } from "@react-navigation/native";

import HeaderImg from "../../assets/header.png";
import iconSintomas from "../../assets/iconSintomas.png";
import iconPrevina from "../../assets/iconPrevina.png";
import CardInfos from "../../components/CardInfos";
import CardData from "../../components/CardData";

import api from "../../services/api";
import { formatNumToUnit } from "../../services/utils";

import styles from "./styles";

function Main() {
  const isFocused = useIsFocused();
  const { navigate } = useNavigation();
  const [mainData, setMainData] = useState({
    confirmed: "",
    recovered: "",
    dead: "",
    loading: true,
  });

  const handleNavigateToPage = (item: string) => {
    navigate(item);
  };

  useEffect(() => {
    async function getDataFromAPI() {
      setMainData({ ...mainData, loading: true });

      await api.get("world/total").then((res) => {
        if (res.data.TotalConfirmed) {
          setMainData({
            confirmed: formatNumToUnit(res.data.TotalConfirmed),
            recovered: formatNumToUnit(res.data.TotalRecovered),
            dead: formatNumToUnit(res.data.TotalDeaths),
            loading: false,
          });
        }
      });
    }

    isFocused ? getDataFromAPI() : null;
  }, [isFocused]);

  return (
    <ScrollView bounces={false} contentContainerStyle={{ flex: 1 }}>
      <View style={styles.headerContainer}>
        <Image source={HeaderImg} style={styles.headerImg} />
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>Covid-19 Tracker</Text>
        </View>
      </View>

      <View style={styles.container}>
        <CardInfos
          title="Sintomas"
          desc="Avalie os sintomas"
          iconUri={iconSintomas}
          onClick={() => handleNavigateToPage("Sintomas")}
        />
        <View style={{ marginTop: 10 }} />
        <CardInfos
          title="Previna-se"
          desc="Aprenda a se prevenir"
          iconUri={iconPrevina}
          onClick={() => handleNavigateToPage("Previna")}
        />

        <View style={styles.dataRow}>
          <CardData
            color="rgba(234, 109, 109, 0.5)"
            loading={mainData.loading}
            value={mainData.confirmed}
            type="Confirmados"
          >
            <MaterialCommunityIcons name="bacteria" size={18} color="#FF4A4A" />
          </CardData>
          <CardData
            color="rgba(105, 235, 84, 0.5)"
            loading={mainData.loading}
            value={mainData.recovered}
            type="Recuperados"
          >
            <AntDesign name="heart" size={18} color="#39F24B" />
          </CardData>
          <CardData
            color="rgba(153, 149, 149, 0.5)"
            loading={mainData.loading}
            value={mainData.dead}
            type="Mortes"
          >
            <FontAwesome5 name="skull" size={18} color="#444444" />
          </CardData>
        </View>

        <TouchableWithoutFeedback onPress={() => handleNavigateToPage("Sala")}>
          <View style={styles.buttonSala}>
            <Text style={styles.buttonSalaText}>Sala de Situação</Text>
            <View style={styles.buttonSalaCircle}>
              <MaterialIcons name="keyboard-arrow-right" size={22} color="white" />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </ScrollView>
  );
}

export default Main;
