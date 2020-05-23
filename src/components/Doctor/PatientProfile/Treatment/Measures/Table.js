import React from 'react'
import styled from 'styled-components'
import edit from './../../../../../assets/edit.svg'

const Table = ({ info }) => {
  return (
    <Container>
      <H1>История замеров</H1>
      <Sheet>
        <thead>
          <tr>
            <td>Показатель</td>
            <td>Время замера</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {info &&
            info.map((inf) => (
              <tr key={inf.id}>
                <td>{inf.title}</td>
                <td>{new Date(inf.created_at).toLocaleDateString('ru-RU')}</td>
                <td>
                  <img src={edit} alt="Edit" />
                </td>
              </tr>
            ))}
        </tbody>
      </Sheet>
    </Container>
  )
}

const Container = styled.div`
  padding: 30px;
  background: #ffffff;
  box-shadow: 0px 10px 20px rgba(31, 32, 65, 0.05);
  border-radius: 4px;
  height: fit-content;
`
const Sheet = styled.table`
  width: 100%;
  border-collapse: collapse;
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
      width: 100%;
      img {
      }
      p {
        margin-top: 17px;
        font-weight: 600;
      }
      td {
        padding: 14px 0;
        font-size: 14px;
        color: #686868;
      }
    }
  }
`

const H1 = styled.h1`
  font-weight: 600;
  font-size: 24px;
  color: #202020;
  margin-bottom: 15px;
`

export default Table
