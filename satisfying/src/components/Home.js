import React from 'react'
import ViewBlue from '../components/ViewBlue'
import Button from '../components/Button'
import ViewBtn from '../components/ViewBtn'

function Home() {
  return (
    <ViewBlue>
        <ViewBtn>
            <Button text='NOVA PESQUISA' />
        </ViewBtn>
    </ViewBlue>
  )
}

export default Home