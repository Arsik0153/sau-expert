import React from 'react'
import styled from 'styled-components'

const MsgOther = ({ text, time, src }) => {
  return (
    <Container>
      <div className="flex">
        <MyIcon src={src} alt="My Photo" />
        <Msg>{text}</Msg>
      </div>
      <Time>{time}</Time>
    </Container>
  )
}

const Container = styled.div`
  width: 70%;
  float: left;
  margin: 10px 30px;
  .flex {
    display: flex;
    justify-content: space-between;
  }
`
const Msg = styled.p`
  width: calc(100% - 20px);
  background: #f4f4f6;
  border-radius: 5px;
  padding: 20px 15px;
`
const MyIcon = styled.img`
  width: 46px;
  height: 46px;
  border-radius: 100%;
  object-fit: cover;
  margin-right: 20px;
`
const Time = styled.p`
  font-size: 16px;
  color: #828282;
  padding: 8px 0 0 20px;
  margin-left: 60px;
`

export default MsgOther
