import React from 'react'
import styled from 'styled-components'
import ava from './../../../../assets/ava-full.png'
import download from './../../../../assets/download.svg'

const Table = ({ info }) => {
  return (
    <Container>
      <thead>
        <tr>
          <td>№</td>
          <td>Название</td>
          <td>Тип документы</td>
          <td>Загрузил</td>
          <td>Время</td>
          <td></td>
        </tr>
      </thead>
      <tbody>
        {info.map((res, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{res.title}</td>
            <td>{res.type === 1 ? 'Анализ' : ''}</td>
            <td style={{ width: '20%' }}>
              <img src={ava} alt="Photo" className="ava" />
              <p>{res.author.short_name}</p>
            </td>
            <td>{res.created_at}</td>
            <td>
              <a href={res.file} target="_blank">
                <img src={download} className="download" alt="Download" />
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </Container>
  )
}

const Container = styled.table`
  width: 100%;
  padding: 0 50px 0 50px;
  margin-top: 30px;
  background: #ffffff;
  box-shadow: 0px 10px 20px rgba(31, 32, 65, 0.05);
  border-radius: 4px;
  border-collapse: collapse;
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
      .ava {
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
        padding: 7px 20px;
        font-size: 14px;
        color: #686868;
      }
    }
    .download {
      cursor: pointer;
    }
  }
`

export default Table
