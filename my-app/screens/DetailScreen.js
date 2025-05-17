// screens/DetailScreen.js
import React, { useContext } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { CartContext } from '../context/CartContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Ionicons } from '@expo/vector-icons';

const DetailScreen = ({ route, navigation }) => {
  const { item } = route.params;
  const { addToCart } = useContext(CartContext);

  return (
    <View style={styles.container}>
      <Header title={item.name} navigation={navigation} showBack={true} />
      
      <ScrollView contentContainerStyle={styles.content}>
        <Image source={item.image} style={styles.image} />
        
        <Text style={styles.price}>${item.price.toFixed(2)}</Text>
        
        <Text style={styles.description}>{item.description}</Text>
        
        <TouchableOpacity 
          style={styles.addButton}
          onPress={() => {
            addToCart(item);
            Alert.alert('Added to Cart', `${item.name} has been added to your cart`);
          }}
        >
          <Ionicons name="cart" size={20} color="white" />
          <Text style={styles.addButtonText}>Add to Cart</Text>
        </TouchableOpacity>
      </ScrollView>

      <Footer navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#FFF8F0' 
  },
  content: {
    padding: 20,
    paddingBottom: 80,
  },
  image: {
    width: '100%',
    height: 300,
    borderRadius: 10,
    marginBottom: 20,
  },
  price: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#8B0000',
    marginBottom: 15,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#555',
    marginBottom: 30,
  },
  addButton: {
    flexDirection: 'row',
    backgroundColor: '#0D47A1',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 10,
    fontSize: 16,
  },
});

export default DetailScreen;