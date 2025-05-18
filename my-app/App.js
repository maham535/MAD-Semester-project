import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { CartProvider } from './context/CartContext';

// Screens
import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import HomeScreen from './screens/HomeScreen';
import AboutUs from './screens/AboutUs';
import CartScreen from './screens/CartScreen';
import DetailScreen from './screens/DetailScreen';
import CheckoutSuccessScreen from './screens/CheckoutSuccessScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function MainDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        drawerActiveTintColor: '#8B0000',
        drawerInactiveTintColor: '#333',
        drawerStyle: { backgroundColor: '#FFF8F0' },
      }}
    >
      <Drawer.Screen name="Home" component={HomeScreen} options={{ title: 'Cake Shop' }} />
      <Drawer.Screen name="About" component={AboutUs} options={{ title: 'About Us' }} />
      <Drawer.Screen name="Cart" component={CartScreen} options={{ title: 'Your Cart' }} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <CartProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Welcome"
            screenOptions={{
              headerStyle: { backgroundColor: '#0D47A1' },
              headerTintColor: '#fff',
              headerTitleStyle: { fontWeight: 'bold' },
            }}
          >
            <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Login' }} />
            <Stack.Screen name="Signup" component={SignupScreen} options={{ title: 'Create Account' }} />
            <Stack.Screen name="Main" component={MainDrawer} options={{ headerShown: false }} />
            <Stack.Screen name="Details" component={DetailScreen} options={{ title: 'Cake Details' }} />
            <Stack.Screen
              name="CheckoutSuccess"
              component={CheckoutSuccessScreen}
              options={{ title: 'Order Confirmed', headerLeft: null }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </CartProvider>
    </SafeAreaProvider>
  );
}