import React, { useState } from 'react'
import { View, StyleSheet, SafeAreaView, ScrollView, TextInput } from 'react-native'
import ViewBlue from '../components/ViewBlue'
import Textlabel from '../components/Textlabel'
import Button from '../components/Button'
import ViewBtn from '../components/ViewBtn'
import ViewInput from '../components/ViewInput'
import Icon from 'react-native-vector-icons/MaterialIcons'
import ErrorText from '../components/ErrorText'



function NovaPesquisa() {

    const [ nome, setNome ] = useState('')
    const [ data, setData ] = useState('')
    const [ imagem, setImg ] = useState('')



    return (
        <ViewBlue>
            <Textlabel text='Nome' />
            <TextInput style={novaPesquisa.textInput} value={nome} onChangeText={setNome}></TextInput>
            {!nome && <ErrorText message="Informe um nome" color="#FD7979" />}

            <ViewInput>
                <Textlabel text='Data' />
                <Icon style={novaPesquisa.icon} name="event" size={35} color="#999999"></Icon>
                <TextInput style={novaPesquisa.textInput} type={'data'} value={data} onChangeText={setData}></TextInput>
                {!data && <ErrorText message="Informe a data" color="#FD7979" />}
            </ViewInput>

            <Textlabel text='Imagem' />
            <TextInput style={novaPesquisa.imageInput} placeholder='Câmera/Galeria de imagens' value={imagem} onChangeText={setImg}></TextInput>
            {!imagem && <ErrorText message="Escolha uma imagem" color="#FD7979" />}

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