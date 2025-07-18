import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import screens
import LoginScreen from './src/screens/Auth/LoginScreen';
import RegisterScreen from './src/screens/Auth/RegisterScreen';
import HomeScreen from './src/screens/Home/HomeScreen';
import PaymentScreen from './src/screens/Payment/PaymentScreen';
import HistoriqueScreen from './src/screens/History/HistoriqueScreen'
import { enableScreens } from 'react-native-screens';

enableScreens();

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeTabs">
        <Stack.Screen name="HomeTabs" component={HomeTabs} options={{ headerShown: false }} />
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={({ navigation }) => ({
            title: 'Connexion',
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('HomeTabs')}>
                <Icon name="home" size={24} color="#84ab4c" style={{ marginRight: 16 }} />
              </TouchableOpacity>
            )
          })} 
        />
        <Stack.Screen 
          name="Register" 
          component={RegisterScreen} 
          options={({ navigation }) => ({
            title: 'Inscription',
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('HomeTabs')}>
                <Icon name="home" size={24} color="#84ab4c" style={{ marginRight: 16 }} />
              </TouchableOpacity>
            )
          })} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'HomeTab') {
            iconName = 'home';
          } else if (route.name === 'Historique') {
            iconName = 'clock';
          } else if (route.name === 'Payment') {
            iconName = 'credit-card';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#84ab4c',
        tabBarInactiveTintColor: '#b4b4b4',
        headerShown: false,
      })}
    >
      <Tab.Screen name="HomeTab" component={HomeScreen} options={{ title: 'Accueil' }} />
      <Tab.Screen name="Historique" component={HistoriqueScreen} />
      <Tab.Screen name="Payment" component={PaymentScreen} />
    </Tab.Navigator>
  );
}

