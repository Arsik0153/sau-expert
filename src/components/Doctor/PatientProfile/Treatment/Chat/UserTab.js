import React from 'react'
import styled from 'styled-components'

const UserTab = ({ imgSrc, name, status }) => {
  return (
    <Container>
      <img
        src="https://sun9-62.userapi.com/c857724/v857724931/1e6422/xUHjNVxZdvo.jpg"
        alt="User"
      />
      <div className="info">
        <Name>{name}</Name>
        <Status hasMsg={true}>{status}</Status>
      </div>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  padding: 30px 40px;
  display: flex;
  align-items: center;
  cursor: pointer;
  img {
    width: 46px;
    height: 46px;
    object-fit: cover;
    border-radius: 100%;
    margin-right: 15px;
  }
  :hover {
    background: #f4f4f6;
  }
`
const Name = styled.h4`
  font-weight: 600;
  font-size: 21px;
  color: #333333;
`
const Status = styled.p`
  font-size: 14px;
  ${(props) => (props.hasMsg ? 'color: #219653;' : 'color: #686868;')}
`

export default UserTab
