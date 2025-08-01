import React from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'

export const RegistroScreen = () => {
  return (
    <View>
        <Text>Crear Cuenta</Text>
        
        <TextInput
        placeholder='Nombre'
        placeholderTextColor="#a16207">
        </TextInput>

        <TextInput
        placeholder='Apellido'
        placeholderTextColor="#a16207">
        </TextInput>

        <TextInput
        placeholder='Direccion'
        placeholderTextColor="#a16207">
        </TextInput>

        <TextInput
        placeholder='Telefono'
        placeholderTextColor="#a16207">
        </TextInput>

        <TextInput
        placeholder='Correo Electrónico '
        placeholderTextColor="#a16207">
        </TextInput>

        <TextInput
        placeholder='Contraseña'
        placeholderTextColor="#a16207">
        </TextInput>

        <TextInput
        placeholder='Confirmar La Contraseña'
        placeholderTextColor="#a16207">
        </TextInput>

        <TouchableOpacity>
            <Text>Registrarme</Text>
        </TouchableOpacity>

        <TouchableOpacity>
            <Text>¿Ya tienes cuenta? Inicia sesión</Text>
        </TouchableOpacity>
    </View>
  )
}
