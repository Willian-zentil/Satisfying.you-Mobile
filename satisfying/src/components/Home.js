import React from 'react'
import ViewBlue from '../components/ViewBlue'
import {
  View, StyleSheet, SafeAreaView, ScrollView
} from 'react-native'
import Button from '../components/Button'
import ViewBtn from '../components/ViewBtn'
import Card from './Card'

function Home() {
  return (
    <ViewBlue>
      <SafeAreaView style={viewCards.view}>
        <ScrollView horizontal={true}>
          <Card icon={'devices'} text={'SECOMP 2023'} data={'10/10/2023'} colorIcon={'#704141'} />
          <Card icon={'groups'} text={'UBUNTU 2022'} data={'05/06/2022'} colorIcon={'#383838'} />
          <Card icon={'woman'} text={'MENINAS CPU'} data={'01/04/2022'} colorIcon={'#d71616'} />
          <Card icon={'devices'} text={'TESTE 2023'} data={'10/10/2023'} colorIcon={'#704141'} />
        </ScrollView>
      </SafeAreaView>

      <ViewBtn>
        <Button text='NOVA PESQUISA' />
      </ViewBtn>
    </ViewBlue>
  )
}

const viewCards = StyleSheet.create({
  view: {
    flex: 1,
    maxHeight: 300
  }
})

export default Home