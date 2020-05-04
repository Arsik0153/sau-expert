import React from 'react'
import styled from 'styled-components'
import StatisticTable from './StatisticTable'

const Report = () => {
  return (
    <Container>
      <H2>Детализированный отчет</H2>
      <StatisticTable />
    </Container>
  )
}

const Container = styled.div`
  margin: 0 50px 50px 50px;
  background: #ffffff;
  box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.03);
  border-radius: 4px;
  padding: 40px;
`
const H2 = styled.h2`
  font-weight: 600;
  font-size: 24px;
  color: #202020;
  margin-bottom: 15px;
`

export default Report
