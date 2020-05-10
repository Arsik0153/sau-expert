import React from 'react'
import styled from 'styled-components'

const MsgMy = ({ text, time, src }) => {
  return (
    <Container>
      <div className="flex">
        <Msg>{text}</Msg>
        <MyIcon src={src} alt="My Photo" />
      </div>
      <Time>{time}</Time>
    </Container>
  )
}

const Container = styled.div`
  width: 70%;
  float: right;
  margin: 10px 30px;
  .flex {
    display: flex;
    justify-content: space-between;
  }
`
const Msg = styled.p`
  width: calc(100% - 20px);
  background: #c5ffdd;
  border-radius: 5px;
  padding: 20px 15px;
`
const MyIcon = styled.img`
  width: 46px;
  height: 46px;
  border-radius: 100%;
  object-fit: cover;
  margin-left: 20px;
`
const Time = styled.p`
  font-size: 16px;
  color: #828282;
  padding: 8px 0 0 20px;
`

export default MsgMy
