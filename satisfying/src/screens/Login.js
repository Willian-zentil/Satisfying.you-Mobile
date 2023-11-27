import React, { useEffect, useState } from 'react'
import { View, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Textlabel from '../components/Textlabel'
import Button from '../components/Button'
import ErrorText from '../components/ErrorText'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth_mod } from '../firebase/config'

const Login = (props) => {

  const [ email, setEmail ] = useState('')
  const [ validEmail, setvalidEmail ] = useState(false)
  const [ password, setPassword ] = useState('')



  const goToNovaConta = () => {
    props.navigation.navigate('Nova Conta')
  }

  const goToEsqueciSenha = () => {
    props.navigation.navigate('Recuperação de senha')
  }

  const goToHome = () => {
    props.navigation.navigate('Drawer')
  }


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

  const autenticarUser = () => {
    signInWithEmailAndPassword(auth_mod,email, password)
      .then(()=>{
        console.log('usuario autenticado com sucesso')
        goToHome()
      })
      .catch('erro ao autenticar usuario')
  }


  return (
    <View style={loginStl.view}>
      <View style={loginStl.viewTitle}>
        <Text style={loginStl.textTitle}>Satisfying.you</Text>
        <Icon name="sentiment-satisfied" size={60} color="#fff"></Icon>
      </View>

      <Textlabel text='E-mail' />
      <TextInput style={loginStl.textInput} value={email} onChangeText={(text) => validarEmail(text)}></TextInput>

      <View style={loginStl.viewSenha}>
        <Textlabel text='Senha' />
        <TextInput secureTextEntry={true} style={loginStl.textInput} value={password} onChangeText={setPassword}></TextInput>
        {!validEmail || !password && <ErrorText message="E-mail e/ou senha inválidos." color="#FD7979" />}
      </View>

      <Button text='Entrar' funcao={autenticarUser} />
      <View style={loginStl.subButtons}>
        <TouchableOpacity style={loginStl.btnCriarConta} onPress={goToNovaConta}>
          <Text style={loginStl.textButtons}>Criar minha conta</Text>
        </TouchableOpacity>
        <TouchableOpacity style={loginStl.btnEsqueci} onPress={goToEsqueciSenha}>
          <Text style={loginStl.textButtons}>Esqueci minha senha</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

export default Login


const loginStl = StyleSheet.create({
  view: {
    backgroundColor: '#372775',
    height: '100%',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingHorizontal: 20
  },
  viewTitle: {
    marginBottom: 32,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  textTitle: {
    color: '#fff',
    fontSize: 38,
    textAlign: 'center',
    marginRight: 20
  },
  viewSenha: {
    marginTop: 20,
    marginBottom: 40
  },
  textInput: {
    backgroundColor: '#fff',
    color: '#3F92C5',
    fontSize: 28
  },
  textButtons: {
    color: '#fff',
    fontSize: 28,
    textAlign: 'center'
  },
  btnCriarConta: {
    backgroundColor: '#419ED7',
    marginVertical: 10,
    width: '100%',
    padding: 6,
  },
  btnEsqueci: {
    backgroundColor: '#B0CCDE',
    marginVertical: 10,
    padding: 6,
    width: '100%'
  },
  subButtons: {
    marginTop: 52
  }
})