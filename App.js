// App.js
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import TabNavigator from './components/TabNavigator';
import SobreScreen from './components/SobreScreen';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="NoticiasTab"
        screenOptions={{
          headerTitle: 'Notícias',
          headerTitleAlign: 'center',
          drawerActiveTintColor: '#2196F3',
          drawerInactiveTintColor: '#4B5563',
        }}
      >
        <Drawer.Screen
          name="NoticiasTab"
          component={TabNavigator}
          options={{
            drawerLabel: 'Notícias',
            drawerIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="newspaper" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Sobre"
          component={SobreScreen}
          options={{
            drawerLabel: 'Sobre',
            drawerIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="information-outline" size={size} color={color} />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}