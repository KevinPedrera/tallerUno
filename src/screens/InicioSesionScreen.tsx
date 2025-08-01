import React from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'

export const InicioSesionScreen = () => {
  return (
    <View>
        <Text> Iniciar Sessión</Text>

        <TextInput
        placeholder='Correo Electrónico'
        placeholderTextColor="#a16207"
        autoCorrect = {false}
        keyboardType='email-address'>
        </TextInput>

        <TextInput
        placeholder='Contraseña'
        placeholderTextColor="#a16207"
        secureTextEntry>
        </TextInput>

        <TouchableOpacity>
            <Text>Ingresar</Text>
        </TouchableOpacity>

        <TouchableOpacity>
            <Text>No tienes cuenta? Registratre</Text>
        </TouchableOpacity>
    </View>
  )
}
