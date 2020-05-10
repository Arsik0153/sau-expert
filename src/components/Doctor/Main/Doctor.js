import React from 'react'
import styled from 'styled-components'
import Navbar from './../Navbar'
import Header from './../../Header'
import Main from './Main'

const Doctor = () => {
  let user = {
    type: 'Врач',
    first_name: 'Иван',
    last_name: 'Иванов',
  }
  localStorage.setItem('user', JSON.stringify(user))

  return (
    <Container>
      <Navbar />
      <Header />
      <Main />
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  grid-template-areas:
    'nav header'
    'nav main';
  grid-template-columns: 240px 1fr;
  grid-template-rows: 100px 1fr;
`

export default Doctor
