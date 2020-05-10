import React from 'react'
import styled from 'styled-components'
import search from './../../../assets/search.svg'
import Table from './Table'

const Main = () => {
  return (
    <Container>
      <div className="flex">
        <H1>Жалобы</H1>
        <img src={search} alt="Search" />
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
    margin: 50px 50px 45px 50px;
    img {
      height: fit-content;
      margin: 15px 0 0 20px;
      cursor: pointer;
    }
  }
`
const H1 = styled.h1`
  font-weight: 600;
  font-size: 38px;
  color: #202020;
`

export default Main
