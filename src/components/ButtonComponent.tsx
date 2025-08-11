import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { FONT_BODY, PRIMARY_COLOR, SECUNDARY_COLOR } from '../theme/appTheme';

interface Props{
    textButton: string;
    handleLogin: () => void;
}

export const ButtonComponent = ({textButton, handleLogin}:Props) => {
  return (
    <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>{textButton}</Text>
    </TouchableOpacity>
  )
}

const styles=StyleSheet.create({
    button:{
        backgroundColor: PRIMARY_COLOR,
        paddingVertical: 18,
        borderRadius: 9999, 
        elevation: 3,
        shadowColor: '#000',
    },
    buttonText:{
        fontFamily: FONT_BODY,
        color: SECUNDARY_COLOR,
        fontSize:16,
        fontWeight: '700',
        textAlign: 'center'
    }
})