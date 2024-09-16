import React, { useState } from "react";
import { Text, StyleSheet } from "react-native";

export default function Texto() {
  const [texto, setTexto] = useState("Texto do novo componente");

  return <Text style={styles.texto}>{texto}</Text>;
}

const styles = StyleSheet.create({
  texto: {
    color: "#CD3333",
    fontWeight: "bold",
    fontSize: 26,
    marginTop: 8,
    marginLeft: 20,
  },
});
