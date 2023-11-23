import React, { useEffect, useState } from 'react'
import { View, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Textlabel from '../components/Textlabel'
import ViewBlue from '../components/ViewBlue'
import Button from '../components/Button'
import ViewInput from '../components/ViewInput'
import ViewBtn from '../components/ViewBtn'
import ErrorText from '../components/ErrorText'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth_mod } from '../firebase/config'





const NovaConta = (props) => {

    const [email, setEmail] = useState('')
    const [password1, setPassword1] = useState('')
    const [password2, setPassword2] = useState('')
    const [validEmail, setvalidEmail] = useState(false)
    const [validPass, setValidPass] = useState(false)

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

    const cadastrarUser = () => {
        createUserWithEmailAndPassword(auth_mod, email, password1)
            .then((userCredential) => {
                setPassword1('')
                setPassword2('')
                setEmail('')
                props.navigation.navigate('Login')
            })
            .catch(() => {
                console.log('erro ao criar usuario1')
            })
    }

    useEffect(() => {
        if ( password2 == password1){
            setValidPass(true)
        }else {
            setValidPass(false)
        }
    }, [password1, password2])
    

    return (
        <ViewBlue>
            <Textlabel text='E-mail' />
            <TextInput style={novaConta.textInput} value={email} onChangeText={(text) => validarEmail(text)}></TextInput>

            <ViewInput>
                <Textlabel text='Senha' />
                <TextInput secureTextEntry={true} style={novaConta.textInput} value={password1} 
                onChangeText={setPassword1}></TextInput>
            </ViewInput>

            <Textlabel text='Repetir senha' />
            <TextInput secureTextEntry={true} style={novaConta.textInput} value={password2} onChangeText={setPassword2}></TextInput>

            {!validPass && <ErrorText message="O campo repetir senha difere da senha." color="#FD7979" />}
            {!validEmail && <ErrorText message="Preencha um E-mail válido." color="#FD7979" />}

            <ViewBtn>
                <Button funcao={cadastrarUser} text='CADASTRAR' />
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