import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import UserTab from './UserTab'
import search from './../../../../assets/search.svg'
import Dialog from './Dialog'

const Chat = (props) => {
  console.log(props)
  let user = JSON.parse(localStorage.getItem('user'))
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([])
  const [messgs, setMessgs] = useState([])
  const [msgText, setMsgText] = useState('')
  const ws = useRef(null)
  const room = '711b997c-ba91-49e9-b67a-e8e9ef365388'
  const uuid = user.id
  console.log(uuid)

  useEffect(() => {
    ws.current = new WebSocket(`ws://94.130.25.159/ws/chat/${room}/`)
    ws.current.onopen = () => {
      setOpen(true)
      ws.current.send(JSON.stringify({ command: 'fetch_messages' }))
    }
    ws.current.onclose = () => setOpen(false)

    ws.current.onmessage = (e) => {
      const data = JSON.parse(e.data)
      if (data.command === 'messages') {
        setMessages([...messages, ...data.messages])
      }
      if (data.command === 'new_message') {
        setMessages([...messages, data.message])
      }
    }

    return () => {
      ws.current.close()
    }
  }, [])

  useEffect(() => {
    setMessgs([...messgs, ...messages])
  }, [messages])

  const handleSend = (e) => {
    if (e.key === 'Enter') {
      ws.current.send(
        JSON.stringify({
          command: 'new_message',
          message: {
            uuid,
            content: msgText,
          },
        })
      )
      setMsgText('')
    }
  }

  return (
    <Container>
      <Body>
        <Header>
          <div className="flex">
            <H3>{props.info && props.info.full_name}</H3>
            <img src={search} alt="Seatch" />
          </div>
        </Header>
        <Dialog list={messgs} myId={uuid} />
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
  margin: 50px;
  height: 600px;
  display: flex;
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
const Body = styled.div`
  width: 100%;
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

export default Chat
