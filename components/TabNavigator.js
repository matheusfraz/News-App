import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TecnologiaStack, EsportesStack } from './StackNavigator';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#2196F3',
        tabBarInactiveTintColor: '#9CA3AF',
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Tecnologia') {
            iconName = 'cpu';
          } else if (route.name === 'Esportes') {
            iconName = 'trophy-outline';
          }
          return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Tecnologia" component={TecnologiaStack} />
      <Tab.Screen name="Esportes" component={EsportesStack} />
    </Tab.Navigator>
  );
}