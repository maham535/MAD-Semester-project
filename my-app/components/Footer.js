import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

const Footer = ({ navigation }) => {
  return (
    <SafeAreaView edges={['bottom']} style={styles.safeArea}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Ionicons name="home" size={24} color="#FFFFFF" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
          <Ionicons name="cart" size={24} color="#FFFFFF" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('AboutUs')}>
          <Ionicons name="information-circle" size={24} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
      <View style={styles.copyRightContainer}>
        <Text style={styles.copyRightText}>© 2025 Maham Cake Shop</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#0F4C81',
  },
  container: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#0F4C81',
    borderTopWidth: 1,
    borderTopColor: '#DDE6ED',
  },
  copyRightContainer: {
    alignItems: 'center',
    paddingVertical: 5,
    backgroundColor: '#0F4C81',
  },
  copyRightText: {
    color: '#FFFFFF',
    fontSize: 12,
  },
});

export default Footer;
