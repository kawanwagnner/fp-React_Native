import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";

export default function Contador() {
  return (
    <>
      <Text style={styles.texto}>Você clicou aqui</Text>

      <View style={styles.buttonList}>
        <Button title="Clique aqui" />
      </View>

      <View style={styles.buttonList}>
        <Button title="Diminuir" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  buttonList: {
    padding: 10,
  },

  texto: {
    color: "#0000FF",
    fontWeight: "bold",
    fontSize: 26,
    marginTop: 20,
    marginLeft: 20,
    textAlign: "center",
  },
});
