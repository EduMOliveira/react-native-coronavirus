import React from "react";
import { FlatList, View } from "react-native";

import SintomaItem from "../../components/SintomaItem";
import { SintomasData, SintomasProps } from "../../data/Sintomas";

import styles from "./styles";

const Sintomas = () => {
  return (
    <View style={{ flex: 1 }}>
      <FlatList<SintomasProps>
        contentContainerStyle={{ flexGrow: 1, paddingBottom: 30 }}
        columnWrapperStyle={styles.listContainer}
        data={SintomasData}
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <SintomaItem
            id={item.id}
            sintoma={item.sintoma}
            bgImg={item.bgImg}
            img={item.img}
          />
        )}
      />
    </View>
  );
};

export default Sintomas;
