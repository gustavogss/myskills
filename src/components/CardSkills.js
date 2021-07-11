import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export function CardSkills({ skill }) {
  return (
    <TouchableOpacity style={styles.buttonskills}>
      <Text style={styles.textskills}>{skill}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  textskills: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "400",
  },
  buttonskills: {
    backgroundColor: "#313131",
    padding: 10,
    borderRadius: 20,
    alignItems: "center",
    marginVertical: 10,
  },
});
