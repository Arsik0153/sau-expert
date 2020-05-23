import React from 'react'
import styled from 'styled-components'
import Appointment from './Appointment'
import Table from './Table'

const Medicine = (props) => {
  return (
    <Container>
      <Appointment id={props.id} />
      <Table id={props.id} />
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

export default Medicine
