import React from 'react'
import { SafeAreaView, Text, View } from 'react-native';
import { InicioSesionScreen } from './src/screens/InicioSesionScreen';
import { RegistroScreen } from './src/screens/RegistroScreen';

export const App = () => {
  return (
    <SafeAreaView style = {{flex: 1}}>
      {/* <InicioSesionScreen/> */}
      <RegistroScreen/>
    </SafeAreaView>
  )
}

export default App;