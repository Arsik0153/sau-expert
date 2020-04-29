import React from 'react'
import styled from 'styled-components'
import avafull from './../../../assets/ava-full.png'

const Info = () => {
  return (
    <Container>
      <img src={avafull} alt="Avatar" />
      <Table>
        <tbody>
          <tr>
            <td>Ф.И.О.</td>
            <td>Иванов Иван Иванович</td>
          </tr>
          <tr>
            <td>Пол</td>
            <td>Мужской</td>
          </tr>
          <tr>
            <td>Дата рождения</td>
            <td>10.10.1960</td>
          </tr>
          <tr>
            <td>Телефон</td>
            <td>+7 800 555 3535</td>
          </tr>
          <tr>
            <td>Врачи</td>
            <td>
              <a href="#/">Иванов И.И. </a>(кардиолог), <br />
              <a href="#/">Сидоров П.М.</a>(терапевт)
            </td>
          </tr>
        </tbody>
      </Table>
      <Table>
        <tbody>
          <tr>
            <td>Город</td>
            <td>Алматы</td>
          </tr>
          <tr>
            <td>Адрес</td>
            <td>Бостандыкский район</td>
          </tr>
          <tr>
            <td>E-mail</td>
            <td>ivanov@ivan.ivanovich</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  )
}

const Container = styled.div`
  background: #ffffff;
  border-radius: 5px;
  padding: 40px;
  margin: 0px 50px 0px 50px;
  display: grid;
  grid-template-columns: 1fr 2fr 2fr;
  grid-gap: 20px;
  img {
    width: 192px;
    height: 192px;
    object-fit: cover;
  }
`
const Table = styled.table`
  width: 100%;
  tr {
    display: flex;
    padding: 13px 0 13px 0;
    font-size: 16px;
    color: #202020;
    border-bottom: 2px solid rgba(31, 32, 65, 0.1);
    p {
      color: #57c3a7;
    }
    td {
      white-space: nowrap;
    }
    td:first-child {
      font-weight: 600;
      width: 40%;
    }
    td:last-child {
      width: 60%;
    }
    a {
      text-decoration-line: underline;
      color: #57c3a7;
    }
  }
`

export default Info
