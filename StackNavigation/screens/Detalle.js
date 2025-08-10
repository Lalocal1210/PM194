import { View, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Detalle() {
  return (
    <View style={styles.container}>
      <Ionicons name="information-circle-outline" size={30} color="purple" />
      <Text style={styles.text}>Detalle del Usuario</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { marginTop: 10, fontSize: 18, color: 'purple', fontWeight: 'bold' },
});
