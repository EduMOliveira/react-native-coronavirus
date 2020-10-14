import React, { memo } from "react";
import { View, Image, Text } from "react-native";

import styles from "./styles";

import { SintomasProps } from "../../data/Sintomas";

const SintomaItem: React.FC<SintomasProps> = (props) => {
  return (
    <View style={styles.cardContainer}>
      <Image source={props.bgImg} style={styles.bgImg} />
      <Image source={props.img} style={styles.sintomaImg} />
      <Text style={styles.sintomaText}>{props.sintoma}</Text>
    </View>
  );
};

export default memo(SintomaItem);
