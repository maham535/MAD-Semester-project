import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutUs = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header title="About Us" navigation={navigation} showBack={true} />

      <ScrollView contentContainerStyle={styles.content}>
        <Image 
          source={require('../assets/logo.png')} 
          style={styles.logo} 
        />

        <Text style={styles.heading}>Our Story</Text>
        <Text style={styles.text}>
          Founded in 2010, CakeShop began as a small family bakery with a passion 
          for creating delicious, handcrafted cakes. What started as a humble 
          kitchen operation has grown into a beloved local bakery known for our 
          quality ingredients and creative designs.
        </Text>

        <Text style={styles.heading}>Our Philosophy</Text>
        <Text style={styles.text}>
          We believe that every cake should be a work of art and every bite should 
          be a moment of joy. That's why we use only the finest ingredients and 
          traditional baking methods to create cakes that look as good as they taste.
        </Text>

        <Text style={styles.heading}>Meet the Team</Text>
        <View style={styles.teamContainer}>
          <View style={styles.teamMember}>
            <Image 
              source={require('../assets/chef1.jpg')} 
              style={styles.teamImage} 
            />
            <Text style={styles.teamName}>Sarah Johnson</Text>
            <Text style={styles.teamRole}>Head Pastry Chef</Text>
          </View>
          <View style={styles.teamMember}>
            <Image 
              source={require('../assets/chef2.jpg')} 
              style={styles.teamImage} 
            />
            <Text style={styles.teamName}>Michael Chen</Text>
            <Text style={styles.teamRole}>Cake Designer</Text>
          </View>
        </View>

        <Text style={styles.heading}>Visit Us</Text>
        <View style={styles.contactItem}>
          <Ionicons name="location" size={20} color="#0F4C81" />
          <Text style={styles.contactText}>123 Sweet Street, Cakeville</Text>
        </View>
        <View style={styles.contactItem}>
          <Ionicons name="time" size={20} color="#0F4C81" />
          <Text style={styles.contactText}>Mon-Sat: 8AM - 6PM</Text>
        </View>
        <View style={styles.contactItem}>
          <Ionicons name="call" size={20} color="#0F4C81" />
          <Text style={styles.contactText}>(555) 123-4567</Text>
        </View>
      </ScrollView>

      <Footer navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#FFFFFF', // White background
  },
  content: {
    padding: 20,
    paddingBottom: 60, // leave space for footer
  },
  logo: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginBottom: 30,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0F4C81', // Classic Blue
    marginTop: 20,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333', // Dark gray for readability
    marginBottom: 15,
  },
  teamContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  teamMember: {
    alignItems: 'center',
    width: '48%',
  },
  teamImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
  },
  teamName: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#0F4C81',
  },
  teamRole: {
    color: '#555',
    fontSize: 14,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  contactText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#333',
  },
});

export default AboutUs;
