import React, { useState } from 'react';
import {
  Alert,
  ImageBackground,
  Platform,
  SafeAreaView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ActivityIndicator,
  Button,
} from 'react-native';

export default function App() {
  const [loading, setLoading] = useState(false);
  const [mensaje, setMensaje] = useState('');

  const simularCarga = () => {
    setLoading(true);
    setMensaje('');
    setTimeout(() => {
      setLoading(false);
      setMensaje(' Carga completa');
    }, 3000);
  };

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>
        {loading ? ' Cargando...' : mensaje}
      </Text>

      {loading && <ActivityIndicator size="large" color="#2196F3" />}

      <Button title="Simular carga" onPress={simularCarga} />
    </View>
  );
}

const styles = StyleSheet.create({
 
  fondo: {
    flex: 1,
    width: '100%',
    height: '100%',
  },


  contenedor: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  
  titulo: {
    color: '#000',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: 'bold',
  },

 
  formulario: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    width: '90%',
    padding: 20,
    borderRadius: 10,
  },

 
  input: {
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 15,
  },

 
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    justifyContent: 'space-between',
  },

  terminosText: {
    color: '#fff',
    fontSize: 14,
  },


  boton: {
    backgroundColor: '#2196F3',
    paddingVertical: 12,
    borderRadius: 5,
  },

  botonTexto: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
