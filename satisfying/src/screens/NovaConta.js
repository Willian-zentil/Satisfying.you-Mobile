import React from 'react'
import { View, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Textlabel from '../components/Textlabel'
import ViewBlue from '../components/ViewBlue'
import Button from '../components/Button'
import ViewInput from '../components/ViewInput'
import ViewBtn from '../components/ViewBtn'


const NovaConta = () => {
    return (
        <ViewBlue>
            <Textlabel text='E-mail' />
            <TextInput style={novaConta.textInput}></TextInput>

            <ViewInput>
                <Textlabel text='Senha' />
                <TextInput style={novaConta.textInput}></TextInput>
            </ViewInput>

            <Textlabel text='Repetir senha' />
            <TextInput style={novaConta.textInput}></TextInput>

            <ViewBtn>
                <Button text='CADASTRAR' />
            </ViewBtn>
        </ViewBlue>
    )
}
const novaConta = StyleSheet.create({
    textInput: {
        backgroundColor: '#fff',
        color: '#3F92C5',
        fontSize: 28
    }
})


export default NovaConta