import React, { memo } from "react";
import { View, Text, Image } from "react-native";

import { PrevinaProps } from "../../data/Previna";

import styles from "./styles";

const PrevinaItem: React.FC<PrevinaProps> = (props) => {
  return (
    <View style={styles.cardRow}>
      <View style={styles.cardCol}>
        <Text style={styles.cardTitle}>{props.title}</Text>
        <Text style={styles.cardDesc}>{props.desc}</Text>
      </View>
      <View style={styles.cardCircleCol}>
        <View style={styles.cardCircle} />
        <Image source={props.img} style={styles.cardImg} />
      </View>
    </View>
  );
};

export default memo(PrevinaItem);
