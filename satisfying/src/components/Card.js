import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

function Card(props) {
    return (
        <TouchableOpacity key={props.key} style={cardStyle.card} onPress={props.funcao}>
            <Icon name={props.icon} size={100} color={props.colorIcon}></Icon>
            <Text style={cardStyle.title}>{props.text}</Text>
            <Text style={cardStyle.data}>{props.data}</Text>
        </TouchableOpacity>
    )
}

const cardStyle = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 15,
        width: 250,
        maxHeight: 230,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 30
    },
    title: {
        color: '#3F92C5',
        fontSize: 30,
    },
    data: {
        color: '#8B8B8B',
        fontSize: 22,
    }
})

export default Card