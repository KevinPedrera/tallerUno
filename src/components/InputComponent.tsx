import React from 'react';
import { StyleSheet, TextInput, KeyboardTypeOptions } from 'react-native';
import { FONT_BODY, INPUT_COLOR } from '../theme/appTheme';

interface Props {
  placeholder: string
  keyboardType: KeyboardTypeOptions
  changeForm: (property: string, value: string) => void
  property: string
  isPassword?: boolean
}

export const InputComponent = ({ placeholder, keyboardType, changeForm, property, isPassword }: Props) => {
  return (
    <TextInput
      placeholder={placeholder}
      keyboardType={keyboardType}
      onChangeText={(value) => changeForm(property, value)}
      secureTextEntry={isPassword}
      style={styles.inputText}
    />
  )
}

const styles = StyleSheet.create({
  inputText: {
    fontFamily: FONT_BODY,
    backgroundColor: INPUT_COLOR,
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 15,
    marginVertical: 10,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#fde68a'
  },
})