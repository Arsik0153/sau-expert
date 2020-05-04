import React from 'react'
import styled from 'styled-components'
import Filters from './Filters'
import Table from './Table'
import { Link } from 'react-router-dom'

const Main = () => {
  return (
    <Container>
      <div className="flex">
        <H1>Врачи</H1>
        <Link to="/manager/newdoctor">Добавить врача</Link>
      </div>
      <Filters />
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
    a {
      padding: 20px 25px;
      font-weight: 400;
      font-size: 14px;
      background: #57c3a7;
      border-radius: 4px;
      color: #fff;
    }
  }
`
const H1 = styled.h1`
  font-weight: 600;
  font-size: 38px;
  color: #202020;
`

export default Main
