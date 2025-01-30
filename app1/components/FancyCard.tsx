import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
    return (
        <View>
            <Text style={styles.headingText}>Trending places</Text>
            <View style={[styles.card, styles.cardElevated]}>
                <Image
                    source={
                        {
                            uri: 'https://static.zollege.in/public/college_data/images/appImage/12771_accet_new.jpg?tr=h-250,w-400,c-force'
                        }
                    }
                    style={styles.cardImage}
                />
                <View style={styles.cardBody}>
                    <Text style={styles.cardTitle}>ACGCET</Text>
                    <Text style={styles.cardLabel}>College-Karaikudi</Text>
                    <Text style={styles.cardDescription}>ACGCET (Alagappa Chettiar Government College of Engineering and Technology) is a government engineering college in Karaikudi, Tamil Nadu, established in 1952. It offers quality engineering education and fosters innovation in various disciplines.</Text>
                    <Text style={styles.cardFooter}>60km away from Home</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },
    card: {
        width: 390,
        height:360,
        borderRadius:8,
        marginVertical:12,
        marginHorizontal:16,
        padding:10


    },
    cardElevated: {

        backgroundColor:'#f5f5f5',
       elevation:3,
       shadowOffset:{
        width:1,
        height:1
       },
       shadowColor:'blue',
       shadowOpacity:0.4,
       shadowRadius:4
    },
    cardImage: {
        height: 180,
        marginBottom:8,
        borderTopLeftRadius:6
    },
    cardBody: {
        flex:1,
        flexGrow:1,
        paddingHorizontal:12,
       

    },
    cardTitle: {
        fontSize:20,
        color:'blue',
        fontWeight:'bold',
        marginBottom:4
    },
    cardLabel: {
        color:'green',
        fontSize:15,
        marginBottom:4
    },
    cardDescription: {
  fontSize:12,
  marginBottom:4,
  lineHeight:15

    },
    cardFooter: {
        color:'orange',
        
    }
})