import React from 'react'
import styled from 'styled-components'
import MsgMy from './MsgMy'
import MsgOther from './MsgOther'

const History = () => {
  return (
    <Container>
      <MsgMy
        text="Done! Furthermore, please check Tracking page to see new photos from
          event construction site."
        time="18.11.2019 10:30"
        src="https://sun9-72.userapi.com/c857632/v857632437/1eb217/Yy_HgWS2HXo.jpg"
      />
      <MsgOther
        text="Done! Furthermore, please check Tracking page to see new photos from
          event construction site."
        time="18.11.2019 10:30"
        src="https://sun9-62.userapi.com/c857724/v857724931/1e6422/xUHjNVxZdvo.jpg"
      />
      <MsgMy
        text="Done! Furthermore, please check Tracking page to see new photos from
          event construction site."
        time="18.11.2019 10:30"
        src="https://sun9-72.userapi.com/c857632/v857632437/1eb217/Yy_HgWS2HXo.jpg"
      />
      <MsgOther
        text="Done! Furthermore, please check Tracking page to see new photos from
          event construction site."
        time="18.11.2019 10:30"
        src="https://sun9-62.userapi.com/c857724/v857724931/1e6422/xUHjNVxZdvo.jpg"
      />
      <MsgMy
        text="Done! Furthermore, please check Tracking page to see new photos from
          event construction site."
        time="18.11.2019 10:30"
        src="https://sun9-72.userapi.com/c857632/v857632437/1eb217/Yy_HgWS2HXo.jpg"
      />
      <MsgOther
        text="Done! Furthermore, please check Tracking page to see new photos from
          event construction site."
        time="18.11.2019 10:30"
        src="https://sun9-62.userapi.com/c857724/v857724931/1e6422/xUHjNVxZdvo.jpg"
      />
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
