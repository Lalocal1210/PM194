import React from 'react';
import { View, Text, Button } from 'react-native';

export default function Settings({ navigation }) {
  return (
    <View>
      <Text>Pantalla Configuración</Text>
      <Button title="Regresar" onPress={() => navigation.goBack()} />
    </View>
  );
}
