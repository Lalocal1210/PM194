import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';

const Texto = ({ estiloFondo }) => {
  const [contenido, setContenido] = useState('Hola mundo RNative');
  const actualizarTexto = () => setContenido('Estado actualizado del Text');
  return (
    <Text style={[styles.textoBlanco, estiloFondo]} onPress={actualizarTexto}>
      {contenido}
    </Text>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      <Texto estiloFondo={styles.red} />
      <Texto estiloFondo={styles.blue} />
      <Texto estiloFondo={styles.green} />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'baseline',
    justifyContent: 'center',
    flexDirection:'row-reverse'
  
  },
  textoBlanco: {
    color: 'white',
    fontSize: 18,
    margin: 10,
    width: 100,
    textAlign: 'center',
    padding: 10,
   
  },
  red: {
    backgroundColor: 'red',
  },
  blue: {
    backgroundColor: 'blue',
  },
  green: {
    backgroundColor: 'green',
  },
});

