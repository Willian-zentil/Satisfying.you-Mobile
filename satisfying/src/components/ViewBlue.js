import React from 'react'
import { View, StyleSheet } from 'react-native'


function ViewBlue(props) {
    return (
        <View style={viewStyle.view}>
            {props.children}
        </View>
    )
}

const viewStyle = StyleSheet.create({
    view: {
        backgroundColor: '#372775',
        height: '100%',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        paddingTop: 100,
        paddingHorizontal: 20
    }
})

export default ViewBlue