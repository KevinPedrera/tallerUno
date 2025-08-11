import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export const CargaScreen = () => {
  return (
    <View style={styles.contenedor}>
      <Image 
        source={require('../img/carga.png')} 
        style={styles.imagen} 
        resizeMode='contain'
      />
      <Text style={styles.texto}>Más que una tienda, somos familia.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#fff7ed',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  imagen: {
    width: 180,
    height: 180,
    marginBottom: 30,
  },
  texto: {
    fontSize: 22,
    fontWeight: '600',
    color: '#d97706',
    textAlign: 'center',
    fontFamily: 'Playfair Display',
  },
})
