import React from 'react'
import styled from 'styled-components'
import ava from './../../../assets/ava.png'
import editGreen from './../../../assets/editGreen.svg'
import deleteRed from './../../../assets/delete.svg'

const ManagerList = () => {
  return (
    <Container>
      <H3>Менеджеры</H3>
      <Table>
        <thead>
          <tr>
            <td>ФИО</td>
            <td>Email</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img src={ava} alt="Photo" />
              <p>Игоров А.И.</p>
            </td>
            <td>manager@manager.kz</td>
            <td>
              <img className="controlBtn" src={editGreen} alt="Edit" />
              <img className="controlBtn" src={deleteRed} alt="Delete" />
            </td>
          </tr>
          <tr>
            <td>
              <img src={ava} alt="Photo" />
              <p>Игоров А.И.</p>
            </td>
            <td>manager@manager.kz</td>
            <td>
              <img className="controlBtn" src={editGreen} alt="Edit" />
              <img className="controlBtn" src={deleteRed} alt="Delete" />
            </td>
          </tr>
          <tr>
            <td>
              <img src={ava} alt="Photo" />
              <p>Игоров А.И.</p>
            </td>
            <td>manager@manager.kz</td>
            <td>
              <img className="controlBtn" src={editGreen} alt="Edit" />
              <img className="controlBtn" src={deleteRed} alt="Delete" />
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  margin-top: 50px;
`
const H3 = styled.h3`
  font-weight: 600;
  font-size: 20px;
  color: #202020;
  margin-bottom: 20px;
`
const Table = styled.table`
  width: 100%;
  padding: 0 30px 0 30px;
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
        padding: 7px 0;
        font-size: 14px;
        color: #686868;
      }
      .controlBtn:first-child {
        width: 16px;
        height: 14px;
        cursor: pointer;
      }
      .controlBtn:last-child {
        width: 15px;
        height: 15px;
        cursor: pointer;
      }
    }
  }
`

export default ManagerList
