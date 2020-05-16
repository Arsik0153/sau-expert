import React from 'react'
import styled from 'styled-components'

const Table = () => {
  return (
    <TableContainer>
      <tbody>
        <tr>
          <td>Название</td>
          <td>Врач</td>
          <td>Дата</td>
        </tr>
        <tr>
          <td>
            <a href="#/">Осмотр</a>
          </td>
          <td>Иванов А.А.</td>
          <td>13.10.16</td>
        </tr>
        <tr>
          <td>
            <a href="#/">Осмотр</a>
          </td>
          <td>Иванов А.А.</td>
          <td>13.10.16</td>
        </tr>
        <tr>
          <td>
            <a href="#/">Осмотр</a>
          </td>
          <td>Иванов А.А.</td>
          <td>13.10.16</td>
        </tr>
        <tr>
          <td>
            <a href="#/">Осмотр</a>
          </td>
          <td>Иванов А.А.</td>
          <td>13.10.16</td>
        </tr>
      </tbody>
    </TableContainer>
  )
}

const TableContainer = styled.table`
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

export default Table
