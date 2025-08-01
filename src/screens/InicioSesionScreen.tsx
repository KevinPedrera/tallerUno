import React from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

export const InicioSesionScreen = () => {
  return (
    <View style = {styles.contenedor}>
        <Text style = {styles.titulo}> Iniciar Sessión</Text>

        <TextInput style = {styles.inputs}
        placeholder='Correo Electrónico'
        placeholderTextColor="#a16207"
        autoCorrect = {false}
        keyboardType='email-address'>
        </TextInput>

        <TextInput style = {styles.inputs}
        placeholder='Contraseña'
        placeholderTextColor="#a16207"
        secureTextEntry>
        </TextInput>

        <TouchableOpacity style = {styles.boton}>
            <Text style = {styles.textoBoton}>Ingresar</Text>
        </TouchableOpacity>

        <TouchableOpacity>
            <Text style = {styles.textoRegistro}>¿No tienes cuenta? Regístrate</Text>
        </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        backgroundColor: '#fefefe',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 30,
    },

    titulo:{
        fontSize: 26,
        fontWeight: '700',
        color: "#d97706",
        marginBottom: 20,
    },

    inputs:{
        width: '100%',
        height: 50,
        borderColor: "#fcd34d",
        borderWidth: 1.6,
        borderRadius: 15,
        paddingHorizontal: 17,
        marginBottom: 15,
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

    textoRegistro:{
        color: "#6b7280",
        fontSize: 14,
        textDecorationLine: 'underline',
        paddingVertical: 20
    }
})
