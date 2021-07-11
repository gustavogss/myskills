import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export function Button({ onPress }) {
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.7}
      onPress={onPress}
    >
      <Text style={styles.buttontext}>Adicionar</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: "#A370F7",
    alignItems: "center",
    padding: 15,
    borderRadius: 7,
    marginTop: 20,
  },
  buttontext: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "700",
  },
});
