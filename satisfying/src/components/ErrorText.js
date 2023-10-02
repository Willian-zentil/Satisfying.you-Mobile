import React from 'react'
import { Text, StyleSheet } from 'react-native';

function ErrorText(props) {
    return (
        <>
            <Text style={[styleText.text, { color: props.color }]}>{props.message}</Text>
        </>
    )
}

const styleText = StyleSheet.create({
    text: {
        fontFamily: 'AveriaLibre-Regular',
        fontSize: 16,
        marginTop: 5
    }
})

export default ErrorText