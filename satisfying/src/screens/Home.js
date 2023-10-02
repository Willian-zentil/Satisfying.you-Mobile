import React from 'react'
import ViewBlue from '../components/ViewBlue'
import {
  View, StyleSheet, SafeAreaView, ScrollView, TextInput, TouchableOpacity
} from 'react-native'
import Button from '../components/Button'
import ViewBtn from '../components/ViewBtn'
import Card from '../components/Card'
import Icon from 'react-native-vector-icons/MaterialIcons'

function Home(props) {

  const goToNovaPesquisa = () => {
    props.navigation.navigate('Nova pesquisa')
  } 

  const goToPageEvent = () => {
    props.navigation.navigate('Evento')
  }

  const openDrawer = () => {
    props.navigation.navigate('Drawer')
  }

  return (
    <>
      {/*      <View style={viewCards.menu}>
        <TouchableOpacity onPress={openDrawer}>
          <Icon name="menu" size={60} color="#fff"></Icon>
        </TouchableOpacity>
      </View> */}
      <ViewBlue>
        <View style={viewCards.viewSearch}>
          <Icon style={viewCards.icon} name="search" size={35} color="#999999"></Icon>
          <TextInput placeholder='Insira o termo de busca...' style={viewCards.search}></TextInput>
        </View>

        <SafeAreaView style={viewCards.view}>
          <ScrollView horizontal={true}>
            <Card icon={'devices'} text={'SECOMP 2023'} data={'10/10/2023'} colorIcon={'#704141'} funcao={goToPageEvent} />
            <Card icon={'groups'} text={'UBUNTU 2022'} data={'05/06/2022'} colorIcon={'#383838'} funcao={goToPageEvent} />
            <Card icon={'woman'} text={'MENINAS CPU'} data={'01/04/2022'} colorIcon={'#d71616'} funcao={goToPageEvent} />
            <Card icon={'devices'} text={'TESTE 2023'} data={'10/10/2023'} colorIcon={'#704141'} funcao={goToPageEvent} />
          </ScrollView>
        </SafeAreaView>

        <ViewBtn>
          <Button text='NOVA PESQUISA' funcao={goToNovaPesquisa} />
        </ViewBtn>
      </ViewBlue>
    </>
  )
}

const viewCards = StyleSheet.create({
  search: {
    backgroundColor: '#fff',
    color: '#3F92C5',
    fontSize: 26,
    marginBottom: 60,
    paddingLeft: 45
  },
  icon: {
    position: 'absolute',
    zIndex: 1,
    top: 12,
    left: 5
  },
  menu: {
    backgroundColor: '#2B1D62',
    padding: 10
  },
  viewSearch: {
    position: 'relative',
    top: -40
  },
  view: {
    marginBottom: 50
  }
})

export default Home