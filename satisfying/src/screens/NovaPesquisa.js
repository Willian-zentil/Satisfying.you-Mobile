import React from 'react'
import { View, StyleSheet, SafeAreaView, ScrollView, TextInput } from 'react-native'
import ViewBlue from '../components/ViewBlue'
import Textlabel from '../components/Textlabel'
import Button from '../components/Button'
import ViewBtn from '../components/ViewBtn'
import ViewInput from '../components/ViewInput'
import Icon from 'react-native-vector-icons/MaterialIcons'



function NovaPesquisa() {
    return (
        <ViewBlue>
            <Textlabel text='Nome' />
            <TextInput style={novaPesquisa.textInput}></TextInput>

            <ViewInput>
                <Textlabel text='Data' />
                <Icon style={novaPesquisa.icon} name="event" size={35} color="#999999"></Icon>
                <TextInput style={novaPesquisa.textInput} type={'data'}></TextInput>
            </ViewInput>

            <Textlabel text='Imagem' />
            <TextInput style={novaPesquisa.imageInput} placeholder='Câmera/Galeria de imagens'></TextInput>

            <ViewBtn>
                <Button text='CADASTRAR' />
            </ViewBtn>
        </ViewBlue>
    )
}

const novaPesquisa = StyleSheet.create({
    textInput: {
        backgroundColor: '#fff',
        color: '#3F92C5',
        fontSize: 28
    },
    imageInput: {
        backgroundColor: '#fff',
        color: '#3F92C5',
        fontSize: 22,
        height: 100,
        width: 300,
        textAlign: 'center'
    },
    icon: {
        position: 'absolute',
        top: 50,
        right: 10,
        zIndex: 1
    }
})

export default NovaPesquisa