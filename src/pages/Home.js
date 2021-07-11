import React, { useState } from "react";
import {
  View,
  Text,
  Platform,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";

export function Home() {
  const [newSkill, setNewSkill] = useState(''); //[estado, função_que_trata o estado]
  const[mySkills, setMySkills] = useState([]);

  function handleAddNewSkill() { //handle é um padrão usado toda vez que tive ação do usuário
    setMySkills(oldState =>[...oldState, newSkill]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.nome}>Seja Bem-vindo, Gustavo</Text>
      <TextInput
        style={styles.input}
        placeholder="Nova Skill"
        placeholderTextColor="#aaa"
        onChangeText={setNewSkill} //Quando o texto for alterado, a função setNewSkill atualiza o estado
      />
      <TouchableOpacity 
      style={styles.button} 
      activeOpacity={0.7}
      onPress={handleAddNewSkill}>
        <Text style={styles.buttontext}>Adicionar</Text>
      </TouchableOpacity>
      <Text
        style={[styles.title, {marginVertical:40}]}>
        Minhas Skills
      </Text>
      {
        mySkills.map(skill => (
        <TouchableOpacity key={skill} style={styles.buttonskills}>
        <Text style={styles.textskills}>
          {skill}
        </Text>
        </TouchableOpacity>
        ))
      }
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
    backgroundColor:'#313131',
    marginTop: 30,
    color: "#fff",
    fontSize: 18,
    padding: Platform.OS === "ios" ? 15 : 10,
    borderRadius: 7,
  },
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
  title:{
    color:'#fff', 
    fontSize: 20,
  },
  textskills:{
  color:'#fff', 
  fontSize:18,
  fontWeight:'400'
  },
  buttonskills:{
    backgroundColor:'#313131',
    padding:10,    
    borderRadius:20,
    alignItems:'center',
    marginVertical: 10
  }

});
