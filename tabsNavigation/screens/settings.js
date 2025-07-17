import { View, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Settings() {
  return (
    <View style={styles.container}>
      <Ionicons name="settings-outline" size={30} color="blue" />
      <Text style={styles.text}>Configuración</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { marginTop: 10, fontSize: 18, color: 'blue', fontWeight: 'bold' },
});
