import React from 'react'
import styled from 'styled-components'

const MsgOther = () => {
  return (
    <Container>
      <div className="flex">
        <Msg>
          Done! Furthermore, please check Tracking page to see new photos from
          event construction site.
        </Msg>
        <MyIcon
          src="https://sun9-72.userapi.com/c857632/v857632437/1eb217/Yy_HgWS2HXo.jpg"
          alt="My Photo"
        />
      </div>
      <Time>18.11.2019 10:30</Time>
    </Container>
  )
}

const Container = styled.div`
  width: 70%;
  float: right;
  padding: 50px 30px;
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

export default MsgOther
