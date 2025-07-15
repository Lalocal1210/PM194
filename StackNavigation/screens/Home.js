import React from 'react';
import { View, Text, Button } from 'react-native';

export default function Home({ navigation }) {
  return (
    <View>
      <Text>Pantalla Home</Text>
      <Button title="Ir a Perfil" onPress={() => navigation.navigate('Profile')} />
      <Button title="Ir a Configuración" onPress={() => navigation.navigate('Settings')} />
    </View>
  );
}
