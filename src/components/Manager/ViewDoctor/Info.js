import React from 'react'
import styled from 'styled-components'
import avafull from './../../../assets/ava-full.png'

const Info = ({ info }) => {
  let cities = [
    'Нур-Султан',
    'Алматы',
    'Талдыкорган',
    'Кокшетау',
    'Степногорск',
    'Актобе',
    'Атырау',
    'Усть-Каменогорск',
    'Тараз',
    'Уральск',
    'Аксай',
    'Караганда',
    'Жезказган',
    'Балхаш',
    'Темиртау',
    'Костанай',
    'Рудный',
    'Кызылорда',
    'Актау',
    'Жанаозен',
    'Павлодар',
    'Экибастуз',
    'Петропавловск',
    'Шымкент',
    'Туркестан',
    'Семей',
    'Риддер',
    'Другой',
  ]

  return (
    <Container>
      <img src={avafull} alt="Avatar" />
      <Table>
        <tbody>
          <tr>
            <td>Ф.И.О.</td>
            <td>{info.short_name}</td>
          </tr>
          <tr>
            <td>Пол</td>
            <td>{info.sex === 1 ? 'Мужской' : 'Женский'}</td>
          </tr>
          <tr>
            <td>Дата рождения</td>
            <td>{info.birth_date}</td>
          </tr>
        </tbody>
      </Table>
      <Table>
        <tbody>
          {/*<tr>
            <td>Город</td>
            <td>{cities[info.city - 1]}</td>
          </tr>*/}
          <tr>
            <td>Опыт</td>
            <td>{info.experience}</td>
          </tr>
          <tr>
            <td>E-mail</td>
            <td>{info.email}</td>
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
    :last-child {
      border-bottom: 0;
    }
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
