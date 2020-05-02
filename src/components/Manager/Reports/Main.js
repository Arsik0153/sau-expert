import React from 'react'
import styled from 'styled-components'
import ActivePatientsGraph from './ActivePatientsGraph'
import RatingGraph from './RatingGraph'

const Main = () => {
  return (
    <Container>
      <H1>Пациенты</H1>
      <GraphContainer>
        <ActivePatientsGraph />
        <RatingGraph />
      </GraphContainer>
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
const GraphContainer = styled.div`
  display: flex;
  margin: 0 50px;
`

export default Main
