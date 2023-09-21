import React from 'react'
import { View, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Textlabel from '../components/Textlabel'
import ViewBlue from '../components/ViewBlue'
import Button from '../components/Button'
import ViewInput from '../components/ViewInput'
import ViewBtn from '../components/ViewBtn'

function EsqueciSenha() {
    return (
        <ViewBlue>
            <ViewInput>
                <Textlabel text='E-mail' />
                <TextInput style={esqueciSenha.textInput}></TextInput>
            </ViewInput>

            <ViewBtn>
                <Button text='RECUPERAR' />
            </ViewBtn>
        </ViewBlue>
    )
}

const esqueciSenha = StyleSheet.create({
    textInput: {
        backgroundColor: '#fff',
        color: '#3F92C5',
        fontSize: 28
    }
})


export default EsqueciSenha