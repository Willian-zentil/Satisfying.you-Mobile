import React, { useEffect } from 'react'
import { View, StyleSheet, Text, Image, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import ViewBlue from '../components/ViewBlue'



function Obrigado(props) {


       
    useEffect(() => {
        setTimeout(() => {
            props.navigation.navigate('Coleta')
        }, 3000);
    }, [])
    
    


    return (
        <ViewBlue>
            <View style={obgStyle.container}>
                <Text style={obgStyle.text}>Obrigado por participar da pesquisa!</Text>
                <Text style={obgStyle.text}>Aguardamos você no próximo ano!</Text>
            </View>
        </ViewBlue>
    )
}

const obgStyle = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 30,
        textAlign: 'center',
        color: '#fff',
        marginBottom: 120
    }
})

export default Obrigado