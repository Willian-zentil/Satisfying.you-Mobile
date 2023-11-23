import React, { useEffect, useState } from 'react'
import { View, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Textlabel from '../components/Textlabel'
import ViewBlue from '../components/ViewBlue'
import Button from '../components/Button'
import ViewInput from '../components/ViewInput'
import ViewBtn from '../components/ViewBtn'
import ErrorText from '../components/ErrorText'

import { sendPasswordResetEmail } from 'firebase/auth'
import { auth_mod } from '../firebase/config'

function EsqueciSenha(props) {

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

    const recuperarSenha = () => {
        sendPasswordResetEmail(auth_mod, email)
            .then(() => {
                console.log('email enviado com sucesso')
                props.navigation.navigate('Login')
            })
            .catch((error) => {
                console.log(JSON.stringify(error))
            })
    }  
    

    return (
        <ViewBlue>
            <ViewInput>
                <Textlabel text='E-mail' />
                <TextInput style={esqueciSenha.textInput} value={email} onChangeText={(text) => validarEmail(text)}></TextInput>
            </ViewInput>

            {!validEmail && <ErrorText message="E-mail e/ou senha inválidos." color="#FD7979" />}

            <ViewBtn>
                <Button funcao={recuperarSenha} text='RECUPERAR' />
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