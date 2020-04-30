import React, { useState } from 'react'
import styled from 'styled-components'
import UserTab from './UserTab'
import search from './../../../assets/search.svg'
import Dialog from './Dialog'

const ChatBox = () => {
  const [msgText, setMsgText] = useState('')

  const handleSend = (e) => {
    if (e.key === 'Enter') {
      alert('Сообщение: ' + msgText)
      setMsgText('')
    }
  }

  return (
    <Container>
      <Side>
        <Header>
          <H3>Диалоги</H3>
        </Header>
        <SideBody>
          <UserTab
            imgSrc="https://sun9-62.userapi.com/c857724/v857724931/1e6422/xUHjNVxZdvo.jpg"
            name="Сидоров П.М."
            status="2 новых сообщения"
          />
          <UserTab
            imgSrc="https://sun9-62.userapi.com/c857724/v857724931/1e6422/xUHjNVxZdvo.jpg"
            name="Иванов И.И."
            status="2 новых сообщения"
          />
          <UserTab
            imgSrc="https://sun9-62.userapi.com/c857724/v857724931/1e6422/xUHjNVxZdvo.jpg"
            name="Саматова Д.Т."
            status="2 новых сообщения"
          />
        </SideBody>
      </Side>
      <Body>
        <Header>
          <div className="flex">
            <H3>Сидоров Петр Михайлович</H3>
            <img src={search} alt="Seatch" />
          </div>
        </Header>
        <Dialog />
        <Textarea
          placeholder="Введите сообщение"
          onKeyDown={(e) => handleSend(e)}
          value={msgText}
          onChange={(e) => setMsgText(e.target.value)}
        ></Textarea>
      </Body>
    </Container>
  )
}

const Container = styled.div`
  background: #ffffff;
  border-radius: 5px;
  margin: 0 50px 50px 50px;
  height: 600px;
  display: flex;
`
const Side = styled.div`
  min-width: 300px;
  width: 30%;
  border-right: 1px solid #c5c5c5;
  height: 100%;
`
const Header = styled.div`
  padding: 30px 40px;
  border-bottom: 1px solid #c5c5c5;
  height: 92px;
  .flex {
    display: flex;
    justify-content: space-between;
    img {
      cursor: pointer;
    }
  }
`
const H3 = styled.h3`
  font-weight: 600;
  font-size: 24px;
  color: #202020;
`
const SideBody = styled.div`
  height: calc(100% - 92px);
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 4px;
  }
  ::-webkit-scrollbar-track {
    background: #c5c5c5;
  }
  ::-webkit-scrollbar-thumb {
    background: #57c3a7;
    border-radius: 2px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #458f7c;
  }
`
const Body = styled.div`
  width: 70%;
`
const Textarea = styled.textarea`
  width: calc(100% - 30px);
  height: calc(20% - 40px);
  padding: 15px;
  margin: 20px 15px;
  border: 1px solid rgba(31, 32, 65, 0.25);
  border-radius: 4px;
  font-size: 16px;
  color: #000;
  outline: none;
  resize: none;
  :focus {
    border: 1px solid #57c3a7;
  }
  ::placeholder {
    color: #bdbdbd;
    font-family: 'Source Sans Pro', sans-serif;
  }
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 4px;
  }
  ::-webkit-scrollbar-track {
    background: #c5c5c5;
  }
  ::-webkit-scrollbar-thumb {
    background: #57c3a7;
    border-radius: 2px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #458f7c;
  }
`

export default ChatBox
