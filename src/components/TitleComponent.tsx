import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { SECUNDARY_COLOR } from '../theme/appTheme';

interface Props{
    title: string;
}

export const TitleComponent = ({title}:Props) => {
    return (
        <Text style = {styles.title}>{title}</Text>
    )
}

const styles = StyleSheet.create({
    title:{
        color: SECUNDARY_COLOR,
        fontSize: 27,
        fontWeight: 'bold',
        paddingVertical: 60,
        paddingHorizontal: 30
    },
})