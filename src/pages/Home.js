import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Platform,
  StyleSheet,
  TextInput,
  FlatList,
} from "react-native";
import { Button } from "../components/Button";
import { CardSkills } from "../components/CardSkills";

export function Home() {
  const [newSkill, setNewSkill] = useState(""); //[estado, função_que_trata o estado]
  const [mySkills, setMySkills] = useState([]);
  const [gretting, setGretting] = useState("");

  function handleAddNewSkill() {
    //handle é um padrão usado toda vez que tive ação do usuário
    setMySkills((oldState) => [...oldState, newSkill]);
  }

  useEffect(() => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
      setGretting("Bom dia");
    } else if (currentHour >= 12 && currentHour < 18) {
      setGretting("Boa tarde");
    } else {
      setGretting("Boa noite");
    }
  }, []); //Tem como parâmetro uma função e uma array de dependências

  return (
    <View style={styles.container}>
      <Text style={styles.nome}>Olá, Gustavo</Text>
      <Text style={styles.gretting}> {gretting} </Text>
      <TextInput
        style={styles.input}
        placeholder="Nova Skill"
        placeholderTextColor="#aaa"
        onChangeText={setNewSkill} //Quando o texto for alterado, a função setNewSkill atualiza o estado
      />
      <Button onPress={handleAddNewSkill} />
      <Text style={[styles.title, { marginVertical: 40 }]}>Minhas Skills</Text>

      <FlatList
        data={mySkills}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <CardSkills skill={item} />}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#212121",
    paddingHorizontal: 20,
    paddingVertical: 50,
  },
  nome: {
    fontSize: 22,
    color: "white",
    fontWeight: "400",
  },
  input: {
    backgroundColor: "#313131",
    marginTop: 30,
    color: "#fff",
    fontSize: 18,
    padding: Platform.OS === "ios" ? 15 : 10,
    borderRadius: 7,
  },
  title: {
    color: "#fff",
    fontSize: 20,
  },
  gretting: {
    color: "#fff",
    marginVertical: 5,
  },
});
