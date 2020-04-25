import React from 'react'
import styled from 'styled-components'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Indicators from './components/Patient/Indicators'

const App = () => {
  return (
    <Container>
      <Navbar />
      <Header />
      <Indicators />
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  grid-template-areas:
    'nav header'
    'nav main';
  grid-template-columns: 260px 1fr;
  grid-template-rows: 100px 1fr;
`

export default App
