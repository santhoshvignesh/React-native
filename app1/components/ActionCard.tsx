import {
  Alert,
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

export default function ActionCard() {
  function openWebsite(website: string) {
    Linking.openURL(website).catch(() =>
      Alert.alert('Error', 'Unable to open the link')
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View>
          <Text style={styles.headingCard}>
            What's new in ACGCET 2024-CSE
          </Text>
          <Image
            source={{
              uri: 'https://static.zollege.in/public/college_data/images/appImage/12771_accet_new.jpg?tr=h-250,w-400,c-force',
            }}
            style={styles.imgCard}
          />
          <View style={styles.bodyContainer}>
            <Text numberOfLines={3}>
              ACGCET (Alagappa Chettiar Government College of Technology) is a
              government engineering college in Karaikudi, Tamil Nadu,
              established in 1952. It offers quality engineering education and
              fosters innovation in various disciplines.
            </Text>
          </View>
          <View style={styles.footerContainer}>
            <TouchableOpacity
              onPress={() => openWebsite('https://accet.ac.in/')} style={styles.socialLinks}
            >
              <Text style={styles.footerText}>Read more..</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => openWebsite('https://accet.ac.in/')}style={styles.socialLinks}
            >
              <Text style={styles.footerText}>Follow us</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  headingText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    marginVertical: 8,
  },
  elevatedCard: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  headingCard: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  imgCard: {
    height: 150,
    width:340,
    borderRadius: 8,
    marginBottom: 8,
  },
  bodyContainer: {
    marginBottom: 8,
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding:8
  },
  footerText: {
    fontSize: 16,
    color: 'white',
    backgroundColor:'black',
    padding:10,
    borderRadius:8,
    // textDecorationLine: 'underline',
  },
  socialLinks:{}
  
});