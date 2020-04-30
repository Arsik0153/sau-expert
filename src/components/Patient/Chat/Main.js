import React from 'react'
import styled from 'styled-components'
import ChatBox from './ChatBox'

const Main = () => {
  return (
    <Container>
      <H1>Чат</H1>
      <ChatBox />
    </Container>
  )
}

const Container = styled.div`
  grid-area: main;
`
const H1 = styled.h1`
  font-weight: 600;
  font-size: 38px;
  color: #202020;
  margin: 50px 0 30px 50px;
`

export default Main
