import * as SplashScreen from 'expo-splash-screen';
import { ImageBackground } from 'react-native';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function App() {
  const [appReady, setAppReady] = useState(false);

  useEffect(() => {
    async function prepareApp() {
      try {
        await SplashScreen.preventAutoHideAsync();
        // Simula una carga de recursos
        setTimeout(async () => {
          setAppReady(true);
          await SplashScreen.hideAsync();
        }, 2000);
      } catch (e) {
        console.warn(e);
      }
    }

    prepareApp();
  }, []);

  return (
    <ImageBackground
      source={require('./assets/upq.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.title}>Bienvenido a mi App</Text>
        <Text style={styles.subtitle}>
          {appReady ? 'Carga completa' : 'Cargando...'}
        </Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    color: 'white',
    fontSize: 18,
  },
});
