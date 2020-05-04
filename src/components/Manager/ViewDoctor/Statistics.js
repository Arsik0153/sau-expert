import React from 'react'
import styled from 'styled-components'

const Statistics = () => {
  return (
    <Container>
      <BoxExtended>
        <Mark>4.6</Mark>
        <H3>Оценка врача</H3>
      </BoxExtended>
      <Box>
        <p className="count">33</p>
        <p>Активных пациентов</p>
      </Box>
      <Box>
        <p className="count">14</p>
        <p>Неактивных пациентов</p>
      </Box>
      <Box>
        <p className="count">5</p>
        <p>Новых пациентов</p>
      </Box>
      <Box>
        <p className="count">145</p>
        <p>Очных осмотров</p>
      </Box>
      <Box>
        <p className="count">158</p>
        <p>Назначенных лекарств</p>
      </Box>
      <Box>
        <p className="count">130</p>
        <p>Назначенных анализов</p>
      </Box>
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 130px 130px;
  grid-gap: 27px;
  margin: 0 50px 50px 50px;
`
const BoxExtended = styled.div`
  grid-row: 1 / 4;
  background: #ffffff;
  box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.03);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Mark = styled.p`
  font-weight: 600;
  font-size: 80px;
  color: #6fcf97;
`
const H3 = styled.h3`
  font-size: 24px;
  line-height: 30px;
  font-weight: 600;
  color: #1f2041;
`
const Box = styled.div`
  background: #ffffff;
  box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.03);
  border-radius: 5px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .count {
    font-weight: 600;
    font-size: 40px;
    color: #333333;
  }
  p {
    font-size: 18px;
    color: #828282;
  }
`

export default Statistics
