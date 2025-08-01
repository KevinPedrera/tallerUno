import React from 'react'
import { SafeAreaView, Text, View } from 'react-native';
import { InicioSesionScreen } from './src/screens/InicioSesionScreen';

export const App = () => {
  return (
    <SafeAreaView style = {{flex: 1}}>
      <InicioSesionScreen/>
    </SafeAreaView>
  )
}

export default App;
