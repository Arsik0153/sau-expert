import React from 'react'
import styled from 'styled-components'
import MsgMy from './MsgMy'

const History = () => {
  return (
    <Container>
      <MsgMy />
    </Container>
  )
}

const Container = styled.div`
  height: 80%;
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
