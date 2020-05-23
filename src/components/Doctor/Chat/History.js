import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'
import MsgMy from './MsgMy'
import MsgOther from './MsgOther'

const History = (props) => {
  const chat = useRef()

  useEffect(() => {
    chat.current.scrollTop += chat.current.scrollHeight
  }, [props])

  return (
    <Container ref={chat}>
      {props.list.map((msg) =>
        msg.contact.id === props.myId ? (
          <MsgMy
            key={msg.id}
            text={msg.content}
            time={new Date(msg.timestamp).toLocaleDateString('ru-RU')}
            src="https://sun9-72.userapi.com/c857632/v857632437/1eb217/Yy_HgWS2HXo.jpg"
          />
        ) : (
          <MsgOther
            key={msg.id}
            text={msg.content}
            time={new Date(msg.timestamp).toLocaleDateString('ru-RU')}
            src="https://sun9-62.userapi.com/c857724/v857724931/1e6422/xUHjNVxZdvo.jpg"
          />
        )
      )}
    </Container>
  )
}

const Container = styled.div`
  height: 100%;
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

export default History
