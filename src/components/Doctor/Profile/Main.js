import React from 'react'
import styled from 'styled-components'
import Info from './Info'

const Main = () => {
  return (
    <Container>
      <div className="flex">
        <H1>Иван Иванов Иванович</H1>
      </div>
      <Info />
    </Container>
  )
}

const Container = styled.div`
  grid-area: main;
  .flex {
    display: flex;
    justify-content: space-between;
  }
`
const H1 = styled.h1`
  font-weight: 600;
  font-size: 38px;
  color: #202020;
  margin: 50px 0 45px 50px;
`

export default Main
