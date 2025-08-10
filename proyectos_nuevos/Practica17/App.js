import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import PerfilScreen from './screens/PerfilScreen';
import DetalleScreen from './screens/DetalleScreen';
import ConfiguracionScreen from './screens/ConfiguracionScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function PerfilStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Perfil" component={PerfilScreen} />
      <Stack.Screen name="Detalle" component={DetalleScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Perfil" component={PerfilStack} />
        <Tab.Screen name="Configuración" component={ConfiguracionScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
