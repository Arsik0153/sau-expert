import React from 'react'
import styled from 'styled-components'

const Main = () => {
  return (
    <Container>
      <H1>Справочники</H1>
      <Flex>
        <Box>
          <H3>Медикаменты</H3>
          <a href="#/">Быстродействующий</a>
          <a href="#/">Быстродействующий</a>
          <a href="#/">Быстродействующий</a>
          <a href="#/">Быстродействующий</a>
        </Box>
        <Box>
          <H3>Таблица калорийности</H3>
          <a href="#/">Быстродействующий</a>
          <a href="#/">Быстродействующий</a>
          <a href="#/">Быстродействующий</a>
          <a href="#/">Быстродействующий</a>
        </Box>
        <Box>
          <H3>Полезная информация</H3>
          <a href="#/">Быстродействующий</a>
          <a href="#/">Быстродействующий</a>
          <a href="#/">Быстродействующий</a>
          <a href="#/">Быстродействующий</a>
        </Box>
      </Flex>
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
const Flex = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 320px);
  grid-gap: 30px;
  margin-left: 50px;
`
const Box = styled.div`
  background: #ffffff;
  box-shadow: 0px 10px 20px rgba(31, 32, 65, 0.05);
  border-radius: 4px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  a {
    font-weight: 600;
    font-size: 14px;
    color: #57c3a7;
    padding: 18px;
    border: 1px solid rgba(31, 32, 65, 0.25);
    border-radius: 6px;
    margin-top: 10px;
    font-family: 'Source Sans Pro', sans-serif;
  }
`
const H3 = styled.h3`
  font-weight: 600;
  font-size: 24px;
  text-align: center;
  color: #202020;
  margin-bottom: 15px;
`

export default Main
