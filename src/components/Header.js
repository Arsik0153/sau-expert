import React from 'react'
import styled from 'styled-components'
import ava from './../assets/ava.png'
import notify from './../assets/notification.svg'
import { useHistory } from 'react-router-dom'

const Header = ({ type = 'patient' }) => {
  let history = useHistory()

  const signOut = (e) => {
    e.preventDefault()
    localStorage.removeItem('token')
    history.push('/')
  }

  return (
    <Container>
      <div className="left">
        <img src={ava} alt="avatar" />
        <div className="info">
          <div className="name">Иван Иванов</div>
          {type === 'patient' && <div className="role">Пациент</div>}
          {type === 'manager' && <div className="role">Менеджер</div>}
          {type === 'doctor' && <div className="role">Врач</div>}
        </div>
      </div>
      <div className="right">
        <a href="/#" className="link" onClick={(e) => signOut(e)}>
          Выйти
        </a>
        <a href="/#" className="notify">
          <img src={notify} alt="notifications" />
        </a>
      </div>
    </Container>
  )
}

const Container = styled.div`
  grid-area: header;
  background: #ffffff;
  padding: 26px 53px;
  border-bottom: 1px solid #e6e8f1;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .left {
    display: flex;
    img {
      border-radius: 50%;
      margin-right: 20px;
    }
    .name {
      font-weight: 600;
      font-size: 16px;
      color: #202020;
    }
    .role {
      font-weight: 600;
      font-size: 13px;
      color: #57c3a7;
      margin-top: 2px;
    }
  }

  .right {
    display: flex;
    flex-direction: row;
    align-items: center;
    .link {
      font-weight: 600;
      font-size: 16px;
      color: #57c3a7;
      margin-right: 30px;
    }
    .notify {
      background: #57c3a7;
      box-shadow: 1px 2px 17px rgba(0, 0, 0, 0.07);
      border-radius: 4px;
      width: 46px;
      height: 46px;
      box-sizing: content-box;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 23px;
        height: 26px;
      }
    }
  }
`

export default Header
