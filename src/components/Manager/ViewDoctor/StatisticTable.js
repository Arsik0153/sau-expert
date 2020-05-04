import React from 'react'
import styled from 'styled-components'

const StatisticTable = () => {
  return (
    <Container>
      <Table>
        <thead>
          <tr>
            <td>Действие</td>
            <td>Подробнее</td>
            <td>Пациент</td>
            <td>Дата</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Назначение</td>
            <td>Анализ</td>
            <td>Огелов А.А.</td>
            <td>14.09.19 21:00</td>
          </tr>
          <tr>
            <td>Назначение</td>
            <td>Анализ</td>
            <td>Огелов А.А.</td>
            <td>14.09.19 21:00</td>
          </tr>
          <tr>
            <td>Назначение</td>
            <td>Анализ</td>
            <td>Огелов А.А.</td>
            <td>14.09.19 21:00</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
`
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  tr {
    font-size: 16px;
    color: #202020;
    border-bottom: 1px solid rgba(31, 32, 65, 0.1);
    p {
      text-decoration: underline;
      color: #57c3a7;
      cursor: pointer;
    }
  }
  td {
    padding: 15px 0px;
  }
  thead {
    td {
      font-weight: 600;
      margin: 15px 0;
    }
  }
`

export default StatisticTable
