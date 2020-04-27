import React from 'react'
import styled from 'styled-components'
import smile from './../../../assets/smile.svg'

const SelfrateCard = () => {
  return (
    <Container>
      <Block>
        <div>
          <Title>Самочувствие</Title>
          <p>
            Последняя оценка: <br /> <span>Отлично</span>
          </p>
        </div>
        <img src={smile} alt="smile" />
      </Block>
      <Block>
        <div>
          <Title>Вес</Title>
          <p>
            Последний замер: <br /> 21.01.2020
          </p>
        </div>
        <div className="kg">76</div>
      </Block>
    </Container>
  )
}

const Container = styled.div`
  background: #ffffff;
  box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.03);
  border-radius: 6px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const Block = styled.div`
  display: flex;
  justify-content: space-between;
  p {
    color: #333333;
    margin-top: 10px;
  }
  span {
    color: #57c3a7;
    font-weight: 600;
  }
  .kg {
    background: #57c3a7;
    width: 72px;
    height: 72px;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 28px;
    text-align: center;
    color: #ffffff;
  }
`
const Title = styled.h3`
  font-weight: 600;
  font-size: 24px;
  color: #202020;
`

export default SelfrateCard
