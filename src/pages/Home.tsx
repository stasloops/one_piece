import React from 'react'
import { Deck } from '../components/home/Cards'

const Home = () => {
  return (
    <div style={{overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '70vh'}}>
        <Deck />
    </div>
  )
}

export default Home