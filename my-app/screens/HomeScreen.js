import React, { useContext } from 'react'; 
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { CartContext } from '../context/CartContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Ionicons } from '@expo/vector-icons';

const cakes = [
  { id: '1', name: 'Chocolate Cake', price: 10, image: require('../assets/choco.jpg'), description: 'Rich chocolate cake with layers of fudge and chocolate ganache.' },
  { id: '2', name: 'Vanilla Cake', price: 12, image: require('../assets/vanilla.jpg'), description: 'Classic vanilla cake with buttercream frosting and sprinkles.' },
  { id: '3', name: 'Strawberry Cake', price: 14, image: require('../assets/strawberry.jpg'), description: 'Fresh strawberry cake with real fruit filling and whipped cream.' },
  { id: '4', name: 'Black Forest Cake', price: 15, image: require('../assets/blackforest.jpg'), description: 'Traditional German cake with cherries and whipped cream.' },
];

const HomeScreen = ({ navigation }) => {
  const { addToCart } = useContext(CartContext);
  const scrollY = new Animated.Value(0);

  const renderItem = ({ item }) => (
    <Animated.View style={styles.card}>
      <TouchableOpacity onPress={() => navigation.navigate('Details', { item })}>
        <Image source={item.image} style={styles.image} />
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.description}>{item.description}</Text>
          <Text style={styles.price}>${item.price.toFixed(2)}</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.buttonGroup}>
        <TouchableOpacity onPress={() => addToCart(item)} style={styles.addButton}>
          <Ionicons name="cart" size={20} color="white" />
          <Text style={styles.buttonText}>Add to Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Details', { item })} style={styles.viewButton}>
          <Ionicons name="eye" size={20} color="white" />
          <Text style={styles.buttonText}>View Details</Text>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );

  return (
    <View style={styles.container}>
      <Header title="CakeShop" navigation={navigation} />
      <Text style={styles.title}>🍰 Welcome to CakeShop 🍰</Text>
      <Animated.FlatList
        data={cakes}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
        showsVerticalScrollIndicator={false}
      />
      <Footer navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 15,
    color: '#0F4C81',
  },
  listContent: {
    paddingBottom: 80,
  },
  card: {
    marginHorizontal: 15,
    marginBottom: 20,
    borderRadius: 15,
    backgroundColor: '#FFFFFF',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3.84,
  },
  image: {
    width: '100%',
    height: 180,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  infoContainer: {
    padding: 15,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0F4C81',
  },
  description: {
    fontSize: 14,
    color: '#555',
    marginVertical: 5,
  },
  price: {
    color: '#0F4C81',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#E6E6E6',
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0F4C81',
    padding: 10,
    borderRadius: 5,
    marginLeft: 10,
    flex: 1,
    justifyContent: 'center',
  },
  viewButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1B6CA8',
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
    flex: 1,
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    marginLeft: 5,
  },
});

export default HomeScreen;
