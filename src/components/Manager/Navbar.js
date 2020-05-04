import React from 'react'
import styled from 'styled-components'
import logo from './../../assets/logo.svg'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <Container>
      <img src={logo} alt="logo" />
      <ul>
        <li>
          <NavLink to="/manager/main" activeClassName="active" exact={true}>
            Главная
          </NavLink>
        </li>
        <li>
          <NavLink to="/manager/patients" activeClassName="active">
            Пациенты
          </NavLink>
        </li>
        <li>
          <NavLink to="/manager/newpatients" activeClassName="active">
            Новые пациенты
          </NavLink>
        </li>
        <li>
          <NavLink to="/manager/doctors" activeClassName="active">
            Врачи
          </NavLink>
        </li>
        <li>
          <NavLink to="/manager/reports" activeClassName="active">
            Отчеты
          </NavLink>
        </li>
        <li>
          <NavLink to="/manager/references" activeClassName="active">
            Справочники
          </NavLink>
        </li>
        <li>
          <NavLink to="/manager/newsletter" activeClassName="active">
            Рассылка
          </NavLink>
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
  width: 240px;
  position: fixed;
  z-index: 1000;
  img {
    height: 37px;
  }

  ul {
    margin-top: 62.5px;
    margin-left: -30px;
    width: calc(100% + 60px);

    li {
      display: flex;
      flex-direction: column;
      margin-bottom: 15px;
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
