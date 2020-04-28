import React, { useState } from 'react'
import styled from 'styled-components'

const Clicker = () => {
  const [gypo, setGypo] = useState(0)
  const [gyper, setGyper] = useState(0)

  const gyperClick = () => {
    setGyper(gyper + 1)
  }
  const gypoClick = () => {
    setGypo(gypo + 1)
  }

  return (
    <Container>
      <Wrap>
        <H3>Гипогликемия</H3>
        <Click onClick={() => gypoClick()}>+</Click>
        <p>Случаев сегодня - {gypo}</p>
      </Wrap>
      <Wrap>
        <H3>Гипергликемия</H3>
        <Click onClick={() => gyperClick()}>+</Click>
        <p>Случаев сегодня - {gyper}</p>
      </Wrap>
    </Container>
  )
}

const Container = styled.div`
  background: #ffffff;
  box-shadow: 0px 10px 20px rgba(31, 32, 65, 0.05);
  border-radius: 4px;
  margin: 50px;
  padding: 35px 40px;
  display: flex;
  flex-wrap: wrap;
`
const Wrap = styled.div`
  :first-child {
    margin-right: 70px;
  }
`
const H3 = styled.h3`
  font-weight: 600;
  font-size: 24px;
  color: #202020;
`
const Click = styled.div`
  background: #57c3a7;
  border-radius: 15px;
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 64px;
  color: #ffffff;
  margin: 50px 0 20px 0;
  cursor: pointer;
  border: none;
  user-select: none;
  :active {
    box-shadow: inset 0px 7px 13px -8px rgba(0, 0, 0, 0.42);
  }
`

export default Clicker
