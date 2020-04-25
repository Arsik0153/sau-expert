import React from 'react'
import styled from 'styled-components'

const CardSimple = ({ imgSrc, last, num, lastNum }) => {
  return (
    <Container>
      <div className="left">
        <span>
          <img src={imgSrc} alt="Glucose" />
          <Name>Глюкоза</Name>
        </span>
        <div className="description">
          Последний замер <br /> {last}
        </div>
      </div>
      <div className="right">
        {lastNum ? (
          <div className="divider">
            <p>{num}</p>
            <p>{lastNum}</p>
          </div>
        ) : (
          <p>{num}</p>
        )}
      </div>
    </Container>
  )
}

const Container = styled.div`
  background: #ffffff;
  box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.03);
  border-radius: 6px;
  height: 175px;
  padding: 21px;
  display: flex;
  justify-content: space-between;

  .left {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    span {
      display: flex;
      flex-direction: row;
      img {
        width: 20px;
        margin-right: 9px;
      }
    }
    .description {
      font-size: 16px;
      color: #333333;
    }
  }

  .right {
    width: 125px;
    height: 125px;
    background: #57c3a7;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 32px;
    color: #ffffff;
    text-align: center;
    .divider {
      p:first-child {
        border-bottom: 3px solid white;
      }
    }
  }
`
const Name = styled.h3`
  font-weight: 600;
  font-size: 24px;
  color: #202020;
`

export default CardSimple
