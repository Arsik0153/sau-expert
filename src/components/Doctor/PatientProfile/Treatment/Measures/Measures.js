import React from 'react'
import styled from 'styled-components'
import Indicator from './Indicator'
import Table from './Table'

const Measires = () => {
  return (
    <Container>
      <Indicator />
      <Table />
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 370px 1fr;
  grid-gap: 30px;
  h3 {
    font-weight: 600;
    font-size: 24px;
    color: #202020;
  }
`

export default Measires
