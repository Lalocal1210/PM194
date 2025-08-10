import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function DetalleScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalle del Usuario</Text>
      <Text>Aquí iría la info detallada del usuario.</Text>
      <Button title="Regresar a Perfil" onPress={() => navigation.goBack()} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
});
