import React, { useState } from 'react';
import {
  Alert,
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function App() {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [aceptaTerminos, setAceptaTerminos] = useState(false);

  const validarCorreo = (correo) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(correo);
  };

  const handleRegistro = () => {
    if (!nombre || !correo) {
      Alert.alert('Error', 'Por favor completa todos los campos.');
      return;
    }

    if (!validarCorreo(correo)) {
      Alert.alert('Error', 'Por favor ingresa un correo electrónico válido.');
      return;
    }

    if (!aceptaTerminos) {
      Alert.alert('Error', 'Debes aceptar los términos y condiciones.');
      return;
    }

    Alert.alert('¡Registro exitoso!', `Nombre: ${nombre}\nCorreo: ${correo}`);
  };

  return (
    <ImageBackground
      source={require('./assets/fondo.jpg')}
      style={styles.fondo}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.contenedor}>
        {/* LOGO */}
        <Image
          source={require('./assets/upq.png')} 
          style={styles.logo}
          resizeMode="contain"
        />

        <View style={styles.formulario}>
          <Text style={styles.titulo}>Registro de Usuario</Text>

          <TextInput
            placeholder="Nombre completo"
            placeholderTextColor="#ccc"
            style={styles.input}
            value={nombre}
            onChangeText={setNombre}
          />

          <TextInput
            placeholder="Correo electrónico"
            placeholderTextColor="#ccc"
            style={styles.input}
            keyboardType="email-address"
            value={correo}
            onChangeText={setCorreo}
          />

          <View style={styles.switchContainer}>
            <Text style={styles.terminosText}>Aceptar términos y condiciones</Text>
            <Switch
              value={aceptaTerminos}
              onValueChange={setAceptaTerminos}
              trackColor={{ false: '#767577', true: '#81b0ff' }}
              thumbColor={aceptaTerminos ? '#2196F3' : '#f4f3f4'}
            />
          </View>

          <TouchableOpacity style={styles.boton} onPress={handleRegistro}>
            <Text style={styles.botonTexto}>Registrarse</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
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
  logo: {
    width: 120,
    height: 120,
    marginBottom: 10,
  },
  formulario: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    width: '90%',
    padding: 20,
    borderRadius: 10,
  },
  titulo: {
    color: '#fff',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: 'bold',
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
