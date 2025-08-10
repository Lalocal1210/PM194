import { View, Text, StyleSheet, Button } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Profile({ navigation }) {
  return (
    <View style={styles.container}>
      <Ionicons name="person-outline" size={30} color="green" />
      <Text style={styles.text}>Perfil de Usuario</Text>
      <Button
        title="Detalles del usuario"
        onPress={() => navigation.navigate('Detalle')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { marginTop: 10, fontSize: 18, color: 'green', fontWeight: 'bold' },
});
