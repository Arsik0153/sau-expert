import React from 'react'
import styled from 'styled-components'
import ava from './../../../assets/ava-full.png'

const Table = () => {
  return (
    <Container>
      <thead>
        <tr>
          <td>№</td>
          <td>Пользователь</td>
          <td>Текст жалобы</td>
          <td>Время</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td style={{ width: '20%' }}>
            <img src={ava} alt="Photo" />
            <p>Игоров А.И.</p>
          </td>
          <td>
            Высокая температура после приема медикаментов, сохраняется три часа
          </td>
          <td>19.12.2019, 21:00</td>
        </tr>
        <tr>
          <td>1</td>
          <td style={{ width: '20%' }}>
            <img src={ava} alt="Photo" />
            <p>Игоров А.И.</p>
          </td>
          <td>
            Высокая температура после приема медикаментов, сохраняется три часа
          </td>
          <td>19.12.2019, 21:00</td>
        </tr>
        <tr>
          <td>1</td>
          <td style={{ width: '20%' }}>
            <img src={ava} alt="Photo" />
            <p>Игоров А.И.</p>
          </td>
          <td>
            Высокая температура после приема медикаментов, сохраняется три часа
          </td>
          <td>19.12.2019, 21:00</td>
        </tr>
        <tr>
          <td>1</td>
          <td style={{ width: '20%' }}>
            <img src={ava} alt="Photo" />
            <p>Игоров А.И.</p>
          </td>
          <td>
            Высокая температура после приема медикаментов, сохраняется три часа
          </td>
          <td>19.12.2019, 21:00</td>
        </tr>
        <tr>
          <td>1</td>
          <td style={{ width: '20%' }}>
            <img src={ava} alt="Photo" />
            <p>Игоров А.И.</p>
          </td>
          <td>
            Высокая температура после приема медикаментов, сохраняется три часа
          </td>
          <td>19.12.2019, 21:00</td>
        </tr>
        <tr>
          <td>1</td>
          <td style={{ width: '20%' }}>
            <img src={ava} alt="Photo" />
            <p>Игоров А.И.</p>
          </td>
          <td>
            Высокая температура после приема медикаментов, сохраняется три часа
          </td>
          <td>19.12.2019, 21:00</td>
        </tr>
        <tr>
          <td>1</td>
          <td style={{ width: '20%' }}>
            <img src={ava} alt="Photo" />
            <p>Игоров А.И.</p>
          </td>
          <td>
            Высокая температура после приема медикаментов, сохраняется три часа
          </td>
          <td>19.12.2019, 21:00</td>
        </tr>
        <tr>
          <td>1</td>
          <td style={{ width: '20%' }}>
            <img src={ava} alt="Photo" />
            <p>Игоров А.И.</p>
          </td>
          <td>
            Высокая температура после приема медикаментов, сохраняется три часа
          </td>
          <td>19.12.2019, 21:00</td>
        </tr>
        <tr>
          <td>1</td>
          <td style={{ width: '20%' }}>
            <img src={ava} alt="Photo" />
            <p>Игоров А.И.</p>
          </td>
          <td>
            Высокая температура после приема медикаментов, сохраняется три часа
          </td>
          <td>19.12.2019, 21:00</td>
        </tr>
      </tbody>
    </Container>
  )
}

const Container = styled.table`
  width: calc(100% - 100px);
  padding: 0 50px 0 50px;
  margin: 0 50px 50px 50px;
  background: #ffffff;
  box-shadow: 0px 10px 20px rgba(31, 32, 65, 0.05);
  border-radius: 4px;
  thead {
    margin-bottom: 30px;
    td {
      font-weight: bold;
      font-size: 14px;
      color: #686868;
      padding: 20px 0 20px 0;
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
        padding: 7px 0;
        font-size: 14px;
        color: #686868;
      }
    }
  }
`

export default Table
