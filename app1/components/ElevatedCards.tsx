import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>Elevated Cards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card,styles.cardElevated]}>
            <Text style={styles.ECtext}>Tap</Text>
        </View>
        <View style={[styles.card,styles.cardElevated]}>
            <Text style={styles.ECtext}>me</Text>
        </View>
        <View style={[styles.card,styles.cardElevated]}>
            <Text style={styles.ECtext}>To</Text>
        </View>
        <View style={[styles.card,styles.cardElevated]}>
            <Text style={styles.ECtext}>Scroll</Text>
        </View>
        <View style={[styles.card,styles.cardElevated]}>
            <Text style={styles.ECtext}>more...</Text>
        </View>
        <View style={[styles.card,styles.cardElevated]}>
            <Text style={styles.ECtext}>😎</Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:8
       },
       container:{
        padding:8,


       },
       ECtext:{
       color:'black'
       },
       card:{
        width:100,
        height:100,
        flex:1,
        alignItems:"center",
        justifyContent:'center',
        flexDirection:'row',
        borderRadius:4,
        margin:8,
        color:'ffffff',
        elevation:4,
        shadowOffset:{
            width:1,
            height:1

        },
        shadowColor:'green',
        shadowOpacity:0.4,
        shadowRadius:4
        



       },

       cardElevated:{
        backgroundColor:'#f5f5f5'

       }
})