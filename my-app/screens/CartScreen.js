// screens/CartScreen.js
import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { CartContext } from '../context/CartContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Ionicons } from '@expo/vector-icons';

const CartScreen = ({ navigation }) => {
  const { cart, increaseQty, decreaseQty, removeItem, clearCart } = useContext(CartContext);

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.qty), 0).toFixed(2);
  };

  const renderItem = ({ item }) => (
    <View style={styles.cartItem}>
      <Image source={item.image} style={styles.itemImage} />
      <View style={styles.itemDetails}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemPrice}>${item.price.toFixed(2)}</Text>
        <View style={styles.quantityContainer}>
          <TouchableOpacity onPress={() => decreaseQty(item.id)}>
            <Ionicons name="remove-circle" size={24} color="#0D47A1" />
          </TouchableOpacity>
          <Text style={styles.quantity}>{item.qty}</Text>
          <TouchableOpacity onPress={() => increaseQty(item.id)}>
            <Ionicons name="add-circle" size={24} color="#0D47A1" />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity onPress={() => removeItem(item.id)} style={styles.removeButton}>
        <Ionicons name="trash" size={24} color="#0D47A1" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Header title="Your Cart" navigation={navigation} showBack={true} />
      
      {cart.length === 0 ? (
        <View style={styles.emptyCart}>
          <Ionicons name="cart-outline" size={80} color="#0D47A1" />
          <Text style={styles.emptyText}>Your cart is empty</Text>
          <TouchableOpacity 
            style={styles.shopButton}
            onPress={() => navigation.navigate('Home')}
          >
            <Text style={styles.shopButtonText}>Shop Cakes</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <>
          <FlatList
            data={cart}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            contentContainerStyle={styles.listContent}
          />
          <View style={styles.totalContainer}>
            <Text style={styles.totalText}>Total: ${calculateTotal()}</Text>
            <TouchableOpacity 
              style={styles.checkoutButton}
              onPress={() => navigation.navigate('CheckoutSuccess')}
            >
              <Text style={styles.checkoutButtonText}>Checkout</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.clearButton}
              onPress={clearCart}
            >
              <Text style={styles.clearButtonText}>Clear Cart</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
      
      <Footer navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#FFFFFF' // White background
  },
  listContent: {
    paddingBottom: 120,
  },
  cartItem: {
    flexDirection: 'row',
    padding: 15,
    margin: 10,
    backgroundColor: '#F5F9FF', // light blue-tinted white
    borderRadius: 10,
    alignItems: 'center',
    elevation: 3,
  },
  itemImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  itemDetails: {
    flex: 1,
    marginLeft: 15,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0D47A1', // Classic Blue
  },
  itemPrice: {
    fontSize: 14,
    color: '#5472d3', // Accent Blue
    marginVertical: 5,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantity: {
    marginHorizontal: 15,
    fontSize: 16,
    color: '#0D47A1',
  },
  removeButton: {
    padding: 10,
  },
  emptyCart: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 100,
  },
  emptyText: {
    fontSize: 18,
    marginTop: 20,
    color: '#333333',
  },
  shopButton: {
    marginTop: 20,
    backgroundColor: '#0D47A1',
    padding: 15,
    borderRadius: 8,
  },
  shopButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  totalContainer: {
    position: 'absolute',
    bottom: 60,
    left: 0,
    right: 0,
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
    color: '#0D47A1',
  },
  checkoutButton: {
    backgroundColor: '#0D47A1',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  checkoutButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  clearButton: {
    backgroundColor: '#ccc',
    padding: 15,
    borderRadius: 8,
  },
  clearButtonText: {
    color: '#333',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
export default CartScreen;