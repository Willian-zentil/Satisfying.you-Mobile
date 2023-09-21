import React from 'react'
import { View, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native'


function ViewInput(props) {
    return (
        <View style={viewStyle.view}>{props.children}</View>
    )
}

export default ViewInput

const viewStyle = StyleSheet.create({
    view: {
        marginTop: 20,
        marginBottom: 20
    }
})