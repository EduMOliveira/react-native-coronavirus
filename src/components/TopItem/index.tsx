import React, { memo } from "react";
import { Text, View, Image, ImageSourcePropType, ImageProps } from "react-native";

import US from "../../assets/paises/US.png";

import styles from "./styles";

interface TopItemProps {
  img: ImageSourcePropType;
  title: string;
  cases: string;
  rec: string;
  dead: string;
}

const TopItem: React.FC<TopItemProps> = (props) => {
  return (
    <View style={styles.topItem}>
      <View style={styles.topImgContainer}>
        <Image source={props.img} style={styles.topImg} />
      </View>
      <View style={styles.topDataContainer}>
        <Text style={styles.topTitle}>{props.title}</Text>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.topDataRow}>
            <Text style={styles.topSub}>Casos: </Text>
            <Text style={[styles.topValues, { color: "#FB0D0D" }]}>
              {props.cases}
            </Text>
          </View>
          <View style={styles.topDataRow}>
            <Text style={styles.topSub}>Recup.: </Text>
            <Text style={[styles.topValues, { color: "#44DD40" }]}>{props.rec}</Text>
          </View>
          <View style={styles.topDataRow}>
            <Text style={styles.topSub}>Mortos: </Text>
            <Text style={[styles.topValues, { color: "#919C91" }]}>
              {props.dead}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default memo(TopItem);
