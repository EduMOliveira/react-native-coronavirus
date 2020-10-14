import React from "react";
import { View, Text, Animated, ActivityIndicator } from "react-native";

import styles from "./styles";

interface CardDataProps {
  value: string;
  color: string;
  type: string;
  loading: boolean;
}

const CardData: React.FC<CardDataProps> = (props) => {
  return (
    <View style={styles.dataCard}>
      <Animated.View
        style={[styles.dataIconCircle, { backgroundColor: props.color }]}
      >
        {props.children}
      </Animated.View>
      {props.loading ? (
        <ActivityIndicator size="small" color="white" />
      ) : (
        <Text style={styles.dataValue}>{props.value}</Text>
      )}
      <Text style={styles.dataType}>{props.type}</Text>
    </View>
  );
};

export default CardData;
