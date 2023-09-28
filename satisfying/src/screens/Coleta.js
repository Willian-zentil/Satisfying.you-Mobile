import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'
import ViewBlue from '../components/ViewBlue'
import horrivel from '../../assets/image/horrivel.png'
import ruim from '../../assets/image/ruim.png'
import neutro from '../../assets/image/neutro.png'
import bom from '../../assets/image/bom.png'
import excelente from '../../assets/image/excelente.png'

function Coleta() {
  return (
    <ViewBlue>
      <View style={coletaStyle.container}>
        <Text style={coletaStyle.title}>O que você achou do Carnaval 2024?</Text>

        <View>
          <View style={coletaStyle.box}>
            <Image style={coletaStyle.icon} source={horrivel} />
            <Text style={coletaStyle.text}>Péssimo</Text>
          </View>
          <View style={coletaStyle.box}>
            <Image style={coletaStyle.icon} source={ruim} />
            <Text style={coletaStyle.text}>Péssimo</Text>
          </View>
          <View style={coletaStyle.box}>
            <Image style={coletaStyle.icon} source={neutro} />
            <Text style={coletaStyle.text}>Péssimo</Text>
          </View>
          <View style={coletaStyle.box}>
            <Image style={coletaStyle.icon} source={bom} />
            <Text style={coletaStyle.text}>Péssimo</Text>
          </View>
          <View style={coletaStyle.box}>
            <Image style={coletaStyle.icon} source={excelente} />
            <Text style={coletaStyle.text}>Péssimo</Text>
          </View>
        </View>

      </View>

    </ViewBlue>
  )
}

const coletaStyle = StyleSheet.create({
  box: {
    width: '100%',
    height: 150
  },
  text: {
    color: '#fff',
    fontSize: 26,
    marginTop: 10
  },
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  title: {
    color: '#fff',
    fontSize: 26,
    marginTop: 10,
    textAlign: 'center'
  },
  icon: {
    width: 50,
    height: 50,
  }
})

export default Coleta