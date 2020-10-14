import React from "react";
import { FlatList, View } from "react-native";

import Images from "../../data/Images";
import TopItem from "../../components/TopItem";
import { formatNumToUnit } from "../../services/utils";

import styles from "./styles";

type dataArray = {
  params: {
    data: [
      {
        CountryCode: string;
        Country: string;
        TotalConfirmed: number;
        TotalDeaths: number;
        TotalRecovered: number;
      }
    ];
  };
};

interface SalaTodosProps {
  route: dataArray;
}

const SalaTodos: React.FC<SalaTodosProps> = ({ route }) => {
  return (
    <View>
      <FlatList
        contentContainerStyle={styles.listContent}
        data={route.params.data}
        keyExtractor={(item) => item.CountryCode}
        renderItem={({ item }) => (
          <TopItem
            key={item.CountryCode}
            title={item.Country}
            img={
              Images[item.CountryCode] ? Images[item.CountryCode] : Images["ERROR"]
            }
            cases={formatNumToUnit(item.TotalConfirmed)}
            rec={formatNumToUnit(item.TotalRecovered)}
            dead={formatNumToUnit(item.TotalDeaths)}
          />
        )}
      />
    </View>
  );
};

export default SalaTodos;
