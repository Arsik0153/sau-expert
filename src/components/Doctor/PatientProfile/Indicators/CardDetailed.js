import React from 'react'
import styled from 'styled-components'

const CardDetailed = ({ name, last, thisMonth, lastMonth, defaultColor }) => {
  return (
    <Container>
      <Name className="name" defaultColor={defaultColor}>
        {name}
      </Name>
      <p className="last">
        Последний случай: <br /> {last}
      </p>
      <div className="flex">
        <p>Количество случаев в текущем месяце</p>
        <Balls className="cointball" defaultColor={defaultColor}>
          {thisMonth}
        </Balls>
      </div>
      <div className="flex">
        <p>Количество случаев в предыдущем месяце</p>
        <Balls className="cointball" defaultColor={defaultColor}>
          {lastMonth}
        </Balls>
      </div>
    </Container>
  )
}

const Container = styled.div`
  height: 370px;
  background: #ffffff;
  box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.03);
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 36px 27px;
  .last {
    font-weight: 600;
    font-size: 16px;
    color: #333333;
  }
  .flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
    p {
      width: 60%;
      font-size: 16px;
      font-weight: normal;
      color: #333333;
    }
  }
`
const Name = styled.h3`
  font-weight: 600;
  font-size: 24px;
  color: ${(props) => props.defaultColor || '#57C3A7'};
`
const Balls = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 100%;
  background: ${(props) => props.defaultColor || '#57C3A7'};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  text-align: center;
  color: #ffffff;
`

export default CardDetailed
