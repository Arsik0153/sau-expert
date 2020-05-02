import React from 'react'
import styled from 'styled-components'
import Filters from './Filters'
import Table from './Table'

const Main = () => {
  return (
    <Container>
      <H1>Пациенты</H1>
      <Filters />
      <Table />
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
  margin: 50px 0 45px 50px;
`

export default Main
