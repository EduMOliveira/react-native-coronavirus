import React from "react";
import { ActivityIndicator, Text, View } from "react-native";
import { LineChart } from "react-native-svg-charts";

import styles from "./styles";

interface CardGlobalProps {
  title: string;
  dayBg: string;
  Color: string;
  dailyValue: string;
  totalValue: string;
  data: number[];
  loading: boolean;
}

const CardGlobal: React.FC<CardGlobalProps> = (props) => {
  return (
    <View style={styles.cardTypes}>
      <Text style={styles.cardTitle}>{props.title}</Text>
      {props.loading ? (
        <ActivityIndicator size="small" color={props.Color} />
      ) : (
        <View>
          <View
            style={[styles.cardDailyContainer, { backgroundColor: props.dayBg }]}
          >
            <Text style={[styles.cardDaily, { color: props.Color }]}>
              +{props.dailyValue}
            </Text>
          </View>
          <Text style={[styles.cardTotal, { color: props.Color }]}>
            {props.totalValue}
          </Text>
        </View>
      )}
      <View style={styles.cardChart}>
        <LineChart
          style={styles.chart}
          data={props.data}
          svg={{
            stroke: props.Color,
            strokeWidth: 4,
            strokeLinecap: "round",
            strokeLinejoin: "round",
          }}
          contentInset={{ top: 20, bottom: 20 }}
        />
      </View>
    </View>
  );
};

export default CardGlobal;
