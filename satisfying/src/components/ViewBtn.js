import React from 'react'
import { View, StyleSheet } from 'react-native'


function ViewBtn(props) {
    return (
        <View style={viewStyle.btn}>{props.children}</View>
    )
}

export default ViewBtn

const viewStyle = StyleSheet.create({
    btn: {
        marginTop: 52
    }
})