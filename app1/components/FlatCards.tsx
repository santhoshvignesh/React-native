import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function App() {
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.headingText}>FlatCards</Text>
      </View>
    <View style={styles.container}>  
      <View style={[styles.card,styles.cardOne]}>
      <Text style={styles.cardText}>red</Text>
      </View>
      <View style={[styles.card,styles.cardTwo]}>
      <Text style={styles.cardText}>Blue</Text>
      </View>
      <View style={[styles.card,styles.cardThree]}>
      <Text style={styles.cardText}>Green</Text>
      </View>
      <View style={[styles.card,styles.cardThree]}>
      <Text style={styles.cardText}>Green</Text>
      </View>
      <View style={[styles.card,styles.cardThree]}>
      <Text style={styles.cardText}>Green</Text>
      </View>
    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  headingText:{
   fontSize:24,
   fontWeight:'bold',
   paddingHorizontal:8
  },
  container:{
    flex:1,
    flexDirection:'row',
    padding:8
  
  },
  card:{
    width:20,
    height:100,
    borderRadius:8,
    margin:8,
    justifyContent:'center',
    alignItems:"center",
    flex:1
  },
  cardOne:{
      backgroundColor:'red'
  },
  cardTwo:{
    backgroundColor:'blue'
},
cardThree:{
  backgroundColor:'green'
},
  cardText:{
    color:'white',
   
  }
})