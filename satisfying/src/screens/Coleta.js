import React from 'react'
import { View, StyleSheet, Text, Image, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import ViewBlue from '../components/ViewBlue'
import horrivel from '../../assets/image/horrivel.png'
import ruim from '../../assets/image/ruim.png'
import neutro from '../../assets/image/neutro.png'
import bom from '../../assets/image/bom.png'
import excelente from '../../assets/image/excelente.png'

function Coleta(props) {

  const goToObgPesquisa = () => {
    props.navigation.navigate('Obrigado')
  }

  return (
    <ViewBlue>
      <View style={coletaStyle.container}>
        <Text style={coletaStyle.title}>O que você achou do Carnaval 2024?</Text>

        <SafeAreaView>
          <ScrollView horizontal={true}>
            <View style={coletaStyle.containerBoxes}>
              <TouchableOpacity style={coletaStyle.box} onPress={goToObgPesquisa}>
                <Image style={coletaStyle.iconPessimo} source={horrivel} />
                <Text style={coletaStyle.text}>Péssimo</Text>
              </TouchableOpacity>
              <TouchableOpacity style={coletaStyle.box} onPress={goToObgPesquisa}>
                <Image style={coletaStyle.icon} source={ruim} />
                <Text style={coletaStyle.text}>Ruim</Text>
              </TouchableOpacity>
              <TouchableOpacity style={coletaStyle.box} onPress={goToObgPesquisa}>
                <Image style={coletaStyle.icon} source={neutro} />
                <Text style={coletaStyle.text}>Neutro</Text>
              </TouchableOpacity>
              <TouchableOpacity style={coletaStyle.box} onPress={goToObgPesquisa}>
                <Image style={coletaStyle.icon} source={bom} />
                <Text style={coletaStyle.text}>Bom</Text>
              </TouchableOpacity>
              <TouchableOpacity style={coletaStyle.box} onPress={goToObgPesquisa}>
                <Image style={coletaStyle.icon} source={excelente} />
                <Text style={coletaStyle.text}>Excelente</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </SafeAreaView>

      </View>

    </ViewBlue>
  )
}

const coletaStyle = StyleSheet.create({
  box: {
    width: 115,
    height: 100,
    marginRight: 30
  },
  containerBoxes: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 100
  },
  text: {
    color: '#fff',
    fontSize: 26,
    marginTop: 10,
    textAlign: 'center'
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
    maxWidth: 50,
    maxHeight: 50,
    flex: 1,
    alignSelf: 'center'
  },
  iconPessimo: {
    maxWidth: 60,
    maxHeight: 60,
    flex: 1,
    alignSelf: 'center'
  }
})

export default Coleta