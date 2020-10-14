import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { useNavigation, useIsFocused } from "@react-navigation/native";

import CardGlobal from "../../components/CardGlobal";
import TopItem from "../../components/TopItem";

import api from "../../services/api";
import Images from "../../data/Images";
import { formatNumToDot, formatNumToUnit } from "../../services/utils";

import styles from "./styles";

const Sala = () => {
  const { navigate } = useNavigation();
  const isFocused = useIsFocused();

  const [countries, setCountries] = useState([]);
  const [global, setGlobal] = useState({
    confirmedDaily: "",
    confirmed: "",
    actives: "",
    activesDaily: "",
    recovered: "",
    recoveredDaily: "",
    dead: "",
    deadDaily: "",
    loading: true,
  });

  const handleNavigateToTodos = () => {
    navigate("SalaTodos", { data: countries });
  };

  useEffect(() => {
    async function getDataFromApi() {
      setGlobal({ ...global, loading: true });
      api.get("summary").then((res) => {
        const r = res.data.Global;
        if (r) {
          setGlobal({
            confirmedDaily: formatNumToDot(r.NewConfirmed),
            confirmed: formatNumToDot(r.TotalConfirmed),
            actives: formatNumToDot(
              r.TotalConfirmed - r.TotalDeaths - r.TotalRecovered
            ),
            activesDaily: formatNumToDot(
              r.NewConfirmed - r.NewDeaths - r.NewRecovered
            ),
            recovered: formatNumToDot(r.TotalRecovered),
            recoveredDaily: formatNumToDot(r.NewRecovered),
            dead: formatNumToDot(r.TotalDeaths),
            deadDaily: formatNumToDot(r.NewDeaths),
            loading: false,
          });

          setCountries(
            res.data.Countries.sort(
              (a: any, b: any) => b.TotalConfirmed - a.TotalConfirmed
            )
          );
        }
      });
    }

    isFocused ? getDataFromApi() : null;
  }, [isFocused]);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Global</Text>
      <View style={styles.cardRow}>
        <CardGlobal
          title="Confirmados"
          dayBg="#FBC9C9"
          Color="#FB0D0D"
          dailyValue={global.confirmedDaily}
          totalValue={global.confirmed}
          loading={global.loading}
          data={[450.102, 220.555, 213.0, 325.0, 351.827, 450.827]}
        />
        <CardGlobal
          title="Ativos"
          dayBg="#FAF5C8"
          Color="#EAD410"
          dailyValue={global.activesDaily}
          totalValue={global.actives}
          loading={global.loading}
          data={[40.102, 50.555, 200.0, 180.0, 100.827, 50.827]}
        />
      </View>
      <View style={styles.cardRow}>
        <CardGlobal
          title="Recuperados"
          dayBg="#D9F5D8"
          Color="#44DD40"
          dailyValue={global.recoveredDaily}
          totalValue={global.recovered}
          loading={global.loading}
          data={[180.102, 220.555, 170.0, 300.0, 250.827, 258.827]}
        />
        <CardGlobal
          title="Mortes"
          dayBg="#E3E7E3"
          Color="#919C91"
          dailyValue={global.deadDaily}
          totalValue={global.dead}
          loading={global.loading}
          data={[3.102, 7.555, 5.0, 2.0, 10.827, 5.827]}
        />
      </View>
      <Text style={styles.title}>Top 3</Text>

      <TouchableOpacity onPress={handleNavigateToTodos} delayLongPress={0}>
        <Text style={styles.seeAll}>Ver Todos {">"}</Text>
      </TouchableOpacity>

      {global.loading ? (
        <ActivityIndicator size="large" color="black" />
      ) : (
        countries.slice(0, 3).map((i: any) => {
          return (
            <TopItem
              key={i.CountryCode}
              title={i.Country}
              img={Images[i.CountryCode] ? Images[i.CountryCode] : Images["ERROR"]}
              cases={formatNumToUnit(i.TotalConfirmed)}
              rec={formatNumToUnit(i.TotalRecovered)}
              dead={formatNumToUnit(i.TotalDeaths)}
            />
          );
        })
      )}

      <View style={{ margin: 25 }} />
    </ScrollView>
  );
};

export default Sala;
