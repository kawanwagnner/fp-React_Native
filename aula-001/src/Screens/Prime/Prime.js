import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Prime() {
  return (
    <>
      <View style={styles.header}>
        <Text style={styles.titleHeader}>Details of System</Text>
        <Text style={styles.line}>__________________</Text>
      </View>
      <View>
        <Text style={styles.nameList}>What is Lorem Ipsum?</Text>
      </View>
      <View>
        <Text style={styles.listDescription}>
          What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged.
        </Text>

        <View style={styles.containerPrice}>
          <Text style={styles.totalPrice}>Total a pagar</Text>
          <Text style={styles.price}>R$ 40,00</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 150,
    backgroundColor: "blue",
  },
  titleHeader: {
    width: "100%",
    color: "#fff",
    textAlign: "center",
    paddingTop: 70,
    fontSize: 20,
    fontWeight: "bold",
  },
  line: {
    textAlign: "center",
    color: "#fff",
  },
  listDescription: {
    paddingTop: 20,
    fontSize: 15,
    marginLeft: 20,
  },
  nameList: {
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 50,
  },
  description: {
    paddingTop: 20,
    color: "#00008B",
    marginLeft: 20,
    fontSize: 20,
    lineHeight: 26,
  },
  containerPrice: {
    marginRight: 200,
  },
  totalPrice: {
    textAlign: "center",
    marginLeft: -35,
    marginTop: 350,
  },
  price: {
    color: "green",
    textAlign: "center",
    fontSize: 30,
  },
});
