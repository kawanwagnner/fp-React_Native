import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, Button } from "react-native";

export default function Contador() {
  const [count, setCount] = useState(0);
  const [msg, setMsg] = useState(0);

  useEffect(() => {
    setMsg("O valor do conunt foi atualizado " + count + " Vez(es)");
  }, [count]);

  return (
    <>
      <Text style={styles.texto}>Clique para adicionar = {count}</Text>
      <Text style={styles.msg}>{msg}</Text>

      <View style={styles.buttonList}>
        <Button
          onPress={() => {
            setCount(count + 1);
          }}
          title="Clique aqui"
        />
      </View>

      <View style={styles.buttonList}>
        <Button
          onPress={() => {
            if (!(count <= 0)) {
              setCount(count - 1);
            } else {
              alert("Minímo excedido");
            }
          }}
          title="Diminuir"
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  buttonList: {
    padding: 10,
  },

  msg: {
    textAlign: "center",
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
