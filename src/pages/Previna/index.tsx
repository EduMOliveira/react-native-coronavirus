import React from "react";
import { View, FlatList } from "react-native";

import PrevinaItem from "../../components/PrevinaItem";
import { PrevinaData, PrevinaProps } from "../../data/Previna";

import styles from "./styles";

const Previna = () => {
  return (
    <View style={{ flex: 1 }}>
      <FlatList<PrevinaProps>
        contentContainerStyle={styles.listContent}
        style={styles.container}
        data={PrevinaData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <PrevinaItem
            id={item.id}
            title={item.title}
            desc={item.desc}
            img={item.img}
          />
        )}
      />
    </View>
  );
};

export default Previna;
