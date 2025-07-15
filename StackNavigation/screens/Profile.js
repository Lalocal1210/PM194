import React from 'react';
import { View, Text, Button } from 'react-native';

export default function Profile({ navigation }) {
  return (
    <View>
      <Text>Pantalla Perfil</Text>
      <Button title="Regresar" onPress={() => navigation.goBack()} />
    </View>
  );
}
