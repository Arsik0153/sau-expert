import React from 'react'
import styled from 'styled-components'
import logo from './../assets/logo.svg'

const Navbar = () => {
  return (
    <Container>
      <img src={logo} alt="logo" />
      <ul>
        <li>
          <a href="">Мой профиль</a>
        </li>
        <li>
          <a href="" className="active">
            Показатели
          </a>
        </li>
        <li>
          <a href="">Календарь</a>
        </li>
        <li>
          <a href="">Жалобы</a>
        </li>
        <li>
          <a href="">Чат</a>
        </li>
        <li>
          <a href="">Справочники</a>
        </li>
        <li>
          <a href="">Рекомендации</a>
        </li>
        <li>
          <a href="">Уведомления</a>
        </li>
        <li>
          <a href="">Оплата</a>
        </li>
      </ul>
    </Container>
  )
}

const Container = styled.div`
  grid-area: nav;
  height: 100%;
  background: white;
  padding: 30px;
  border-right: 1px solid #d7d7d7;

  ul {
    margin-top: 62.5px;
    margin-left: -30px;
    width: calc(100% + 60px);

    li {
      display: flex;
      flex-direction: column;
      margin-bottom: 21px;
    }

    a {
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      color: #686868;
      width: 100%;
      padding: 7px 30px;
    }
    a.active {
      color: #202020;
      font-weight: bold;
      border-right: 5px solid #f47775;
    }
    a:not(.active):hover {
      border-right: 2px solid #f47775;
    }
  }
`

export default Navbar
