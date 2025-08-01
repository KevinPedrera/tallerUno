import React from 'react'
import { Text, TextInput, TouchableOpacity, View, StyleSheet } from 'react-native'

export const RegistroScreen = () => {
  return (
    <View style = {styles.contenedor}>
        <Text style = {styles.titulo}>Crear Cuenta</Text>
        
        <TextInput style = {styles.inputs}
        placeholder='Nombre'
        placeholderTextColor="#a16207">
        </TextInput>

        <TextInput style = {styles.inputs}
        placeholder='Apellido'
        placeholderTextColor="#a16207">
        </TextInput>

        <TextInput style = {styles.inputs}
        placeholder='Direccion'
        placeholderTextColor="#a16207">
        </TextInput>

        <TextInput style = {styles.inputs}
        placeholder='Telefono'
        placeholderTextColor="#a16207"
        keyboardType='numeric'>
        </TextInput>

        <TextInput style = {styles.inputs}
        placeholder='Correo Electrónico '
        placeholderTextColor="#a16207"
        keyboardType='email-address'
        autoCapitalize='none'
        autoCorrect={false}>
        </TextInput>

        <TextInput style = {styles.inputs}
        placeholder='Contraseña'
        placeholderTextColor="#a16207">
        </TextInput>

        <TextInput style = {styles.inputs}
        placeholder='Confirmar La Contraseña'
        placeholderTextColor="#a16207"
        secureTextEntry>
        </TextInput>

        <TouchableOpacity style = {styles.boton}>
            <Text style = {styles.textoBoton}>Registrarme</Text>
        </TouchableOpacity>

        <TouchableOpacity>
            <Text style = {styles.textoIniciarSesion}>¿Ya tienes cuenta? Inicia sesión</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  contenedor:{
    flex: 1,
    backgroundColor: '#fefefe',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  
  titulo:{
    fontSize:26,
    fontWeight: '700',
    color: "#d97706",
    marginBottom: 20,
  },

  inputs:{
    width: '100%',
    height: 48,
    borderColor: "#d1d5db",
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 15,
    marginBottom: 12,
    backgroundColor: "#fefefe",
    color: "#1f2937"
  },

  boton:{
    backgroundColor: "#d97706",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 30,
    marginTop: 12,
    elevation: 3,
  },

  textoBoton:{
    color: "#fefefe",
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center'
  },

  textoIniciarSesion:{
    color: "#6b7280",
    fontSize: 14,
    textDecorationLine: 'underline',
    paddingVertical: 20
  },



})