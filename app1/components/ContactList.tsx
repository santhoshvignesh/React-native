import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function ContactList() {
  const contacts = [
    {
      uid: 1,
      name: 'Vignesh',
      status: 'Developer',
    },
    {
      uid: 2,
      name: 'Santhosh',
      status: 'Engineer',
    },
    {
      uid: 3,
      name: 'Dhanush',
      status: 'Businessman',
    },
    {
      uid: 4,
      name: 'Vignesh',
      status: 'Developer',
    },
  ];

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.headingText}>Contact List</Text>
      <ScrollView style={styles.container}>
        {contacts.map(({ uid, name, status }) => (
          <View key={uid} style={styles.userCard}>
            <Text style={styles.userName}>{name}</Text>
            <Text style={styles.userStatus}>{status}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    padding: 16,
  },
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
  },
  container: {
    flex: 1,
  },
  userCard: {
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between',
    backgroundColor: '#ffffff',
    padding: 16,
    marginBottom: 12,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  userStatus: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
});