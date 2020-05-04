import React from 'react'
import styled from 'styled-components'
import ava from './../../../assets/ava-full.png'
import { Link } from 'react-router-dom'

const Patients = () => {
  return (
    <Container>
      <H2>Пациенты</H2>
      <Table>
        <thead>
          <tr>
            <td>Статус</td>
            <td>Пользователь</td>
            <td>Дата рождения</td>
            <td>Диагноз</td>
            <td>Дата регистрации</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <Status active={true}>Активный</Status>
            <td style={{ width: '20%' }}>
              <Link to="/manager/patient/123">
                <img src={ava} alt="Photo" />
                <p>Игоров А.И.</p>
              </Link>
            </td>
            <td>10.04.1988</td>
            <td>Гипертоническая болезнь</td>
            <td>10.11.2019 17:00</td>
          </tr>
          <tr>
            <Status active={true}>Активный</Status>
            <td style={{ width: '20%' }}>
              <Link to="/manager/patient/123">
                <img src={ava} alt="Photo" />
                <p>Игоров А.И.</p>
              </Link>
            </td>
            <td>10.04.1988</td>
            <td>Гипертоническая болезнь</td>
            <td>10.11.2019 17:00</td>
          </tr>
          <tr>
            <Status active={false}>Неактивный</Status>
            <td style={{ width: '20%' }}>
              <Link to="/manager/patient/123">
                <img src={ava} alt="Photo" />
                <p>Игоров А.И.</p>
              </Link>
            </td>
            <td>10.04.1988</td>
            <td>Гипертоническая болезнь</td>
            <td>10.11.2019 17:00</td>
          </tr>
          <tr>
            <Status active={false}>Неактивный</Status>
            <td style={{ width: '20%' }}>
              <Link to="/manager/patient/123">
                <img src={ava} alt="Photo" />
                <p>Игоров А.И.</p>
              </Link>
            </td>
            <td>10.04.1988</td>
            <td>Гипертоническая болезнь</td>
            <td>10.11.2019 17:00</td>
          </tr>
          <tr>
            <Status active={true}>Активный</Status>
            <td style={{ width: '20%' }}>
              <Link to="/manager/patient/123">
                <img src={ava} alt="Photo" />
                <p>Игоров А.И.</p>
              </Link>
            </td>
            <td>10.04.1988</td>
            <td>Гипертоническая болезнь</td>
            <td>10.11.2019 17:00</td>
          </tr>
          <tr>
            <Status active={true}>Активный</Status>
            <td style={{ width: '20%' }}>
              <Link to="/manager/patient/123">
                <img src={ava} alt="Photo" />
                <p>Игоров А.И.</p>
              </Link>
            </td>
            <td>10.04.1988</td>
            <td>Гипертоническая болезнь</td>
            <td>10.11.2019 17:00</td>
          </tr>
          <tr>
            <Status active={false}>Неактивный</Status>
            <td style={{ width: '20%' }}>
              <Link to="/manager/patient/123">
                <img src={ava} alt="Photo" />
                <p>Игоров А.И.</p>
              </Link>
            </td>
            <td>10.04.1988</td>
            <td>Гипертоническая болезнь</td>
            <td>10.11.2019 17:00</td>
          </tr>
          <tr>
            <Status active={false}>Неактивный</Status>
            <td style={{ width: '20%' }}>
              <Link to="/manager/patient/123">
                <img src={ava} alt="Photo" />
                <p>Игоров А.И.</p>
              </Link>
            </td>
            <td>10.04.1988</td>
            <td>Гипертоническая болезнь</td>
            <td>10.11.2019 17:00</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  )
}

const Container = styled.div`
  margin: 0 50px 50px 50px;
  padding: 40px;
  background: #ffffff;
  box-shadow: 0px 10px 20px rgba(31, 32, 65, 0.05);
`
const Table = styled.table`
  width: 100%;
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
      a {
        color: #686868;
      }
      td {
        font-size: 14px;
        color: #686868;
        padding: 7px 20px;
      }
    }
  }
`
const Status = styled.td`
  ${(props) =>
    props.active ? 'color: #55B97E !important' : 'color: #BD1119 !important'}
`
const H2 = styled.h2`
  font-weight: 600;
  font-size: 24px;
  color: #202020;
  margin-bottom: 15px;
`

export default Patients
