import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListaNoticiasScreen from './ListaNoticiasScreen';
import DetalheNoticiaScreen from './DetalheNoticiaScreen';

const Stack = createNativeStackNavigator();

export function TecnologiaStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
      }}
    >
      <Stack.Screen
        name="ListaTecnologia"
        component={ListaNoticiasScreen}
        initialParams={{ categoria: 'Tecnologia' }}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Detalhes" component={DetalheNoticiaScreen} />
    </Stack.Navigator>
  );
}

export function EsportesStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
      }}
    >
      <Stack.Screen
        name="ListaEsportes"
        component={ListaNoticiasScreen}
        initialParams={{ categoria: 'Esportes' }}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Detalhes" component={DetalheNoticiaScreen} />
    </Stack.Navigator>
  );
}