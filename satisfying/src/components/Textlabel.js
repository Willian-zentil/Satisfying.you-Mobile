import React from 'react'
import { Text, StyleSheet } from 'react-native'

function Textlabel(props) {
    return (
        <Text style={estilo.text}>{props.text}</Text>
    )
}


const estilo = StyleSheet.create({
    text: {
        color: '#fff',
        fontSize: 28
    }
})

export default Textlabel