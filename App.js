import React, {useState} from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar, TouchableOpacity, FlatList } from 'react-native';
import {Ionicons} from '@expo/vector-icons'

import TaskList from './src/components/TaskList'

export default function App() {
  const [task, setTask] = useState([
    {key:1, task:'Estudar React Native'},
    {key:2, task:'Pagar conta de energia'},
    {key:3, task:'Parcela da faculdade'},
    {key:4, task:'Pagar prestação do óculos'},
    {key:5, task:'Imprimir boleto'}
  ])

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar 
        backgroundColor="#171d31" 
        barStyle="light-content"
      />
      <View style={styles.content}>
        <Text style={styles.title}>Minhas tarefas</Text>
      </View>

      <FlatList
        showsHorizontalScrollIndicator={false}
        data={task}
        keyExtractor={(item)=>String(item.key)}
        renderItem={({ item })=><TaskList data={item}/>}
      />

      <TouchableOpacity style={styles.fab}>
        <Ionicons name="ios-add" size={35} color="#fff"/>
      </TouchableOpacity>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#171d31"
  },

  title:{
    marginTop:15,
    paddingBottom:10,
    fontSize:16,
    textAlign:'center',
    color:'#fff'
  },

  fab:{
    position:'absolute',
    width:60,
    height:60,
    backgroundColor:"#0094ff",
    alignItems:'center',
    justifyContent:'center',
    borderRadius:30,
    right:25,
    bottom:25,
    elevation:2,
    zIndex:9,
    shadowColor:'#000',
    shadowOpacity:0.2,
    shadowOffset:{
      width:1,
      height:3
    }
  }
});
