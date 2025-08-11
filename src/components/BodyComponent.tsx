import React, { ReactNode } from 'react';
import { View, StyleSheet, useWindowDimensions } from 'react-native';
import { SECUNDARY_COLOR } from '../theme/appTheme';

interface Props{
    children: ReactNode;
}

export const BodyComponent = ({children}: Props) => {
    const { height } = useWindowDimensions();
    return (
        <View style={{
            ...styles.contanier,
            height: height * 0.88}}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    contanier:{
        backgroundColor: SECUNDARY_COLOR,
        borderTopLeftRadius: 30,
        borderTopRightRadius:30,
        paddingHorizontal:40,
        paddingTop:40
    },
})