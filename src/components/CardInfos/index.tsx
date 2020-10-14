import React from "react";
import { View, Image, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

import styles from "./styles";

interface CardProps {
  title: string;
  desc: string;
  iconUri: any;
  onClick?(): void;
}

const CardInfos: React.FC<CardProps> = (props) => {
  return (
    <TouchableWithoutFeedback onPress={props.onClick}>
      <View style={styles.iconWrapper}>
        <Image source={props.iconUri} style={styles.iconCard} />
      </View>
      <View style={styles.cardSintomas}>
        <View style={styles.cardTextCol}>
          <Text style={styles.sintomaText}>{props.title}</Text>
          <Text style={styles.sintomaDescText}>{props.desc}</Text>
          <View style={styles.saibaMaisRow}>
            <Feather name="arrow-right" size={12} color="white" />
            <Text style={styles.sintomaMoreText}>Saiba mais</Text>
          </View>
        </View>

        <View style={styles.cardCircleCol}>
          <View style={styles.circleI} />
          <View style={styles.circleII} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CardInfos;
