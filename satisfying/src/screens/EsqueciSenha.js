import React, { useEffect, useState } from 'react'
import { View, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Textlabel from '../components/Textlabel'
import ViewBlue from '../components/ViewBlue'
import Button from '../components/Button'
import ViewInput from '../components/ViewInput'
import ViewBtn from '../components/ViewBtn'
import ErrorText from '../components/ErrorText'

function EsqueciSenha() {

    const [ email, setEmail ] = useState('')
    const [ validEmail, setvalidEmail ] = useState(false)

    const validarEmail = (text) => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    
        if (reg.test(text) === false) {
          setEmail(text)
          setvalidEmail(false)
        } else {
          setEmail(text)
          setvalidEmail(true)
        }
      }



    return (
        <ViewBlue>
            <ViewInput>
                <Textlabel text='E-mail' />
                <TextInput style={esqueciSenha.textInput} value={email} onChangeText={(text) => validarEmail(text)}></TextInput>
            </ViewInput>

            {!validEmail && <ErrorText message="E-mail e/ou senha inválidos." color="#FD7979" />}

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