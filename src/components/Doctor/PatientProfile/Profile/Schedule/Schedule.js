import React from 'react'
import styled from 'styled-components'
import Food from './Food'
import Sleep from './Sleep'

const Schedule = (props) => {
  return (
    <Container>
      <Food id={props.id} />
      <Sleep id={props.id} />
    </Container>
  )
}

const Container = styled.div`
  margin: 30px 50px 30px 50px;
  background: #ffffff;
  border-radius: 5px;
  padding: 30px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
  .grid {
    display: grid;
    grid-template-columns: 3fr 2fr 46px !important;
  }
`
const H3 = styled.h3`
  font-weight: 600;
  font-size: 24px;
  color: #202020;
`
const Table = styled.table`
  width: 100%;
  margin-top: 20px;
  tr {
    display: flex;
    justify-content: space-between;
    padding: 17px 0 17px 0;
    font-size: 16px;
    color: #202020;
    border-bottom: 2px solid rgba(31, 32, 65, 0.1);
    p {
      color: #57c3a7;
    }
    a {
      text-decoration-line: underline;
      color: #57c3a7;
    }
    :first-child {
      font-weight: 600;
    }
    :last-child {
      border-bottom: none;
    }
  }
`
const Plus = styled.button`
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #57c3a7;
  border-radius: 10px;
  height: 46px;
  align-self: end;
  margin-bottom: 10px;
  font-weight: 500;
  font-size: 36px;
  color: #ffffff;
  padding-bottom: 20px;
  cursor: pointer;
`

export default Schedule
