import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import UserTab from './UserTab'
import search from './../../../assets/search.svg'
import Dialog from './Dialog'
import { connect } from 'react-redux'
import { getChats } from '../../../redux/actions/patient/getChats'
import Preloader from '../../helpers/Preloader'

const ChatBox = (props) => {
  let token = localStorage.getItem('token')
  let user = JSON.parse(localStorage.getItem('user'))

  const [messages, setMessages] = useState([])
  const [open, setOpen] = useState(false)
  const [msgText, setMsgText] = useState('')
  const [activeId, setActiveId] = useState('')
  const [messgs, setMessgs] = useState([])
  const ws = useRef(null)
  const uuid = user.id
  const [activeName, setActiveName] = useState('')

  const isFirstRun = useRef(true)
  useEffect(() => {
    props.getChats(token)
  }, [])

  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false
      return
    }
    ws.current = new WebSocket(`ws://94.130.25.159/ws/chat/${activeId}/`)
    ws.current.onopen = () => {
      setOpen(true)
      ws.current.send(JSON.stringify({ command: 'fetch_messages' }))
    }
    ws.current.onclose = (e) => {
      console.log(e)
    }

    ws.current.onmessage = (e) => {
      const data = JSON.parse(e.data)
      console.log(data)
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
  }, [activeId])

  useEffect(() => {
    setMessgs([...messgs, ...messages])
  }, [messages])

  const handleSend = (e) => {
    if (e.key === 'Enter') {
      if (activeId !== '' && msgText !== '') {
        ws.current.send(
          JSON.stringify({
            command: 'new_message',
            message: {
              uuid,
              content: msgText,
            },
          })
        )
      }
      e.target.value = ''
      setMsgText('')
    } else {
      setMsgText(e.target.value)
    }
    return false
  }
  const handleClick = (id, name) => {
    setActiveId(id)
    setActiveName(name)
  }
  const handleEdit = (e) => {
    setMsgText(e.target.value)
    console.log(e.target.value)
  }

  return (
    <Container>
      <Side>
        <Header>
          <H3>Диалоги</H3>
        </Header>
        <SideBody>
          {props.getChatsInfo.status !== 'success' ? (
            <div className="preloader-container">
              <Preloader />
            </div>
          ) : (
            props.getChatsInfo.info.map((info) => (
              <UserTab
                key={info.id}
                imgSrc="https://sun9-62.userapi.com/c857724/v857724931/1e6422/xUHjNVxZdvo.jpg"
                name={info.name}
                status={`${info.new_messages} новых сообщения`}
                click={() => handleClick(info.id, info.name)}
              />
            ))
          )}
        </SideBody>
      </Side>
      <Body>
        <Header>
          <div className="flex">
            <H3>{activeName}</H3>
            <img src={search} alt="Seatch" />
          </div>
        </Header>
        <Dialog list={messgs} myId={uuid} />
        <Textarea
          placeholder="Введите сообщение"
          onKeyDown={(e) => handleSend(e)}
          value={msgText}
          onChange={(e) => handleEdit(e)}
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
  .preloader-container {
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
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

const mapStateToProps = (state) => {
  return {
    getChatsInfo: state.getChatsInfo,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getChats: (values) => {
      dispatch(getChats(values))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatBox)
