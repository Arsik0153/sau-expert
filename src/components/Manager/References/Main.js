import React from 'react'
import styled from 'styled-components'
import Table from './Table'

const Main = () => {
  return (
    <Container>
      <div className="flex">
        <H1>Справочники</H1>
        <Button>Добавить запись</Button>
      </div>
      <Table />
    </Container>
  )
}

const Container = styled.div`
  grid-area: main;
  .flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 50px 50px 45px 50px;
  }
`
const H1 = styled.h1`
  font-weight: 600;
  font-size: 38px;
  color: #202020;
`
const Button = styled.button`
  padding: 20px 25px;
  font-weight: 400;
  font-size: 14px;
  background: #57c3a7;
  border-radius: 4px;
  color: #fff;
  border: none;
  cursor: pointer;
`

export default Main
