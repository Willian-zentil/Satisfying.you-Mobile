import React from 'react'
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native'
import ViewBlue from '../components/ViewBlue'
import grafico from '../../assets/image/pie-chart.png'


function Relatorio() {
  return (
    <ViewBlue>
      <TouchableOpacity>
        <Image style={relatorioStyle.imgPie} source={grafico} />
      </TouchableOpacity>

      <View style={relatorioStyle.container}>
        <View style={relatorioStyle.box}>
          <Text style={relatorioStyle.amarelo}></Text>
          <Text style={relatorioStyle.text}>Excelente</Text>
        </View>
        <View style={relatorioStyle.box}>
          <Text style={relatorioStyle.azul}></Text>
          <Text style={relatorioStyle.text}>Bom</Text>
        </View>
        <View style={relatorioStyle.box}>
          <Text style={relatorioStyle.verde}></Text>
          <Text style={relatorioStyle.text}>Neutro</Text>
        </View>
        <View style={relatorioStyle.box}>
          <Text style={relatorioStyle.vermelho}></Text>
          <Text style={relatorioStyle.text}>Ruim</Text>
        </View>
        <View style={relatorioStyle.box}>
          <Text style={relatorioStyle.claro}></Text>
          <Text style={relatorioStyle.text}>Péssimo</Text>
        </View>
      </View>
    </ViewBlue>
  )
}

const relatorioStyle = StyleSheet.create({
  imgPie: {
    width: 350,
    height: 300,
    marginBottom: 20
  },
  container: {
    flex: 1,
    width: 200,
    maxHeight: 200
  },
  text: {
    color: '#fff',
    fontSize: 21,
    width: 100,
    height: 30,
    marginLeft: 10
  },
  box: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  amarelo: {
    width: 14,
    height: 14,
    backgroundColor: '#F1CE7E'
  },
  azul: {
    width: 14,
    height: 14,
    backgroundColor: '#6994FE'
  },
  verde: {
    width: 14,
    height: 14,
    backgroundColor: '#5FCDA4'
  },
  vermelho: {
    width: 14,
    height: 14,
    backgroundColor: '#EA7288'
  },
  claro: {
    width: 14,
    height: 14,
    backgroundColor: '#53D8D8'
  }
})

export default Relatorio