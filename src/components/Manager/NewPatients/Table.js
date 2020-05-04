import React from 'react'
import styled from 'styled-components'
import ava from './../../../assets/ava-full.png'

const Table = () => {
  return (
    <Container>
      <thead>
        <tr>
          <td>№</td>
          <td>Пациент</td>
          <td>Время</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{ width: '10%' }}>1</td>
          <td>
            <img src={ava} alt="Photo" />
            <p>Игоров А.И.</p>
          </td>
          <td>19.12.2019, 21:00</td>
        </tr>
        <tr>
          <td style={{ width: '10%' }}>1</td>
          <td>
            <img src={ava} alt="Photo" />
            <p>Игоров А.И.</p>
          </td>
          <td>19.12.2019, 21:00</td>
        </tr>
        <tr>
          <td style={{ width: '10%' }}>1</td>
          <td>
            <img src={ava} alt="Photo" />
            <p>Игоров А.И.</p>
          </td>
          <td>19.12.2019, 21:00</td>
        </tr>
        <tr>
          <td style={{ width: '10%' }}>1</td>
          <td>
            <img src={ava} alt="Photo" />
            <p>Игоров А.И.</p>
          </td>
          <td>19.12.2019, 21:00</td>
        </tr>
      </tbody>
    </Container>
  )
}

const Container = styled.table`
  width: calc(100% - 100px);
  padding: 0 30px 0 30px;
  margin: 0 50px 50px 50px;
  background: #ffffff;
  box-shadow: 0px 10px 20px rgba(31, 32, 65, 0.05);
  border-radius: 4px;
  border-collapse: collapse;
  padding: 0 15px;
  thead {
    margin-bottom: 30px;
    td {
      font-weight: bold;
      font-size: 14px;
      color: #686868;
      padding: 20px;
    }
  }
  tbody {
    tr {
      border-bottom: 1px solid rgba(209, 216, 245, 0.6);
      img {
        width: 54px;
        height: 54px;
        object-fit: cover;
        border-radius: 100%;
        float: left;
        margin-right: 15px;
      }
      p {
        margin-top: 17px;
        font-weight: 600;
      }
      td {
        min-width: 70px;
        font-size: 14px;
        color: #686868;
        padding: 7px 20px;
      }
    }
  }
`

export default Table
