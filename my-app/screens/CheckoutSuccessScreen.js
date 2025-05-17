import React, { useRef, useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { CartContext } from '../context/CartContext';

const CheckoutSuccessScreen = ({ navigation }) => {
  const { clearCart } = useContext(CartContext);
  const scaleValue = useRef(new Animated.Value(0)).current;
  const fadeValue = useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.parallel([
      Animated.spring(scaleValue, {
        toValue: 1,
        friction: 3,
        useNativeDriver: true,
      }),
      Animated.timing(fadeValue, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start();

    clearCart(); // Clear cart when checkout is successful
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header} />
      
      <View style={styles.content}>
        <Animated.View 
          style={[
            styles.checkmarkContainer,
            { transform: [{ scale: scaleValue }] }
          ]}
        >
          <Ionicons name="checkmark-circle" size={100} color="#0D47A1" />
        </Animated.View>
        
        <Animated.View style={{ opacity: fadeValue }}>
          <Text style={styles.title}>Order Confirmed!</Text>
          <Text style={styles.subtitle}>Your delicious cakes are on their way</Text>
          
          <Image 
            source={require('../assets/delivery.png')} 
            style={styles.deliveryImage} 
            resizeMode="contain"
          />
          
          <Text style={styles.message}>
            Thank you for shopping with CakeShop. Your order will be 
            prepared with love and delivered soon.
          </Text>
          
          <TouchableOpacity 
            onPress={() => navigation.navigate('Home')}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Back to Home</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Ionicons name="home" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
          <Ionicons name="cart" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('AboutUs')}>
          <Ionicons name="information-circle" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' }, // white background
  header: {
    height: 60,
    backgroundColor: '#0D47A1', // Classic blue
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  checkmarkContainer: {
    marginBottom: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#0D47A1', // Classic blue
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#555555',
    textAlign: 'center',
    marginBottom: 30,
  },
  deliveryImage: {
    width: 200,
    height: 150,
    marginVertical: 20,
  },
  message: {
    fontSize: 16,
    color: '#444444',
    textAlign: 'center',
    marginBottom: 30,
    lineHeight: 24,
  },
  button: {
    backgroundColor: '#0D47A1',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#0D47A1',
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 15,
  },
});

export default CheckoutSuccessScreen;
