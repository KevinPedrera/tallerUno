import React, { useState } from 'react';
import {
  StatusBar, Text, View, Alert, StyleSheet, TouchableOpacity,
  Image, ScrollView, KeyboardAvoidingView, Platform
} from 'react-native';
import { PRIMARY_COLOR, FONT_SERIF, FONT_BODY, SECUNDARY_COLOR, TERTIARY_COLOR } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { InputComponent } from '../components/InputComponent';
import { ButtonComponent } from '../components/ButtonComponent';

interface FormLogin {
  username: string;
  password: string;
}

export const LoginScreen = ({ navigation }: any) => {
  const [formLogin, setFormLogin] = useState<FormLogin>({
    username: '',
    password: ''
  });
  const [hiddenPassword, setHiddenPassword] = useState<boolean>(true);

  const changeForm = (property: string, value: string): void => {
    setFormLogin({ ...formLogin, [property]: value });
  }

  const handleLogin = (): void => {
    if (formLogin.username === '' || formLogin.password === '') {
      Alert.alert('Error', 'Por favor complete todos los campos');
      return;
    }
    console.log(formLogin)
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <StatusBar backgroundColor={'#fef3c7'} barStyle="dark-content" />

        <View style={styles.logoContainer}>
            <Image
                source={require('../img/logo.png')}
                style={styles.logo}
            />
            <Text style={styles.appName}>PATITAS FELICES</Text>
        </View>

        <View style={styles.formContainer}>
            <Text style={styles.titleWelcome}>Bienvenido de Nuevo</Text>
            <Text style={styles.textDescription}>Inicia sesión para continuar</Text>
            
            <InputComponent 
                placeholder='Usuario'
                keyboardType='default'
                changeForm={changeForm}
                property='username' />
            
            <View style={styles.passwordInputContainer}>
                <InputComponent 
                    placeholder='Contraseña'
                    keyboardType='default'
                    changeForm={changeForm}
                    property='password'
                    isPassword={hiddenPassword} />
                <Icon name={hiddenPassword ? 'visibility' : 'visibility-off'}
                    size={24}
                    color={'#b45309'}
                    style={styles.icon}
                    onPress={() => setHiddenPassword(!hiddenPassword)} />
            </View>
            
            <ButtonComponent textButton='Iniciar Sesión' handleLogin={handleLogin} />

            <TouchableOpacity style={styles.registerContainer} onPress={() => navigation.navigate('Register')}>
                <Text style={styles.registerText}>¿No tienes una cuenta? </Text>
                <Text style={[styles.registerText, styles.registerLink]}>Regístrate</Text>
            </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fef3c7', 
    },
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'center',
    },
    logoContainer: {
        alignItems: 'center',
        paddingVertical: 40,
    },
    logo: {
        width: 220,
        height: 100,
        resizeMode: 'contain',
    },
    appName: {
        fontFamily: FONT_SERIF,
        fontSize: 30,
        fontWeight: '700',
        color: PRIMARY_COLOR,
        marginTop: 10,
    },
    formContainer: {
        flex: 1,
        backgroundColor: SECUNDARY_COLOR,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        paddingHorizontal: 30,
        paddingVertical: 40,
        elevation: 10,
        shadowColor: '#000',
    },
    titleWelcome: {
        fontFamily: FONT_BODY,
        fontSize: 22,
        fontWeight: 'bold',
        color: '#1f2937',
        textAlign: 'center',
    },
    textDescription: {
        fontFamily: FONT_BODY,
        fontSize: 16,
        color: '#6c757d',
        textAlign: 'center',
        marginBottom: 25,
        marginTop: 5,
    },
    passwordInputContainer: {
        position: 'relative',
        justifyContent: 'center',
    },
    icon: {
        position: 'absolute',
        right: 15,
    },
    registerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 25,
    },
    registerText: {
        fontFamily: FONT_BODY,
        color: '#6c757d',
        fontSize: 15,
    },
    registerLink: {
        color: PRIMARY_COLOR,
        fontWeight: 'bold',
    },
});