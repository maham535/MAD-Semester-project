import React from 'react'; 
import { View, Text, Button, StyleSheet } from 'react-native';

const CheckoutSuccess = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎉 Order Placed Successfully!</Text>
      <Text style={styles.message}>Thank you for shopping with us. 🎂</Text>
      <View style={styles.buttonWrapper}>
        <Button 
          title="Back to Home" 
          color="#0D47A1" // Classic Blue
          onPress={() => navigation.navigate('Home')} 
        />
      </View>
    </View>
  );
};

export default CheckoutSuccess;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF', // White background
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0D47A1', // Classic Blue
    marginBottom: 20,
    textAlign: 'center',
  },
  message: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#333333', // Professional dark gray
  },
  buttonWrapper: {
    width: '60%',
    borderRadius: 8,
    overflow: 'hidden',
  },
});
