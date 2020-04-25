import React from 'react'
import styled from 'styled-components'
import './RateCard.css'
import { CircularProgressbar } from 'react-circular-progressbar'

const RateCard = ({ percentage, week, month }) => {
  return (
    <Container>
      <div className="top">
        <h5>
          Оценка
          <br />
          выполнения
          <br />
          заданий
        </h5>
        <CircularProgressbar value={percentage} text={`${percentage}%`} />
      </div>
      <div className="bottom">
        <div className="flex">
          <div className="perc">{week}</div>
          <p>Среднее за неделю</p>
        </div>
        <div className="flex">
          <div className="perc">{month}</div>
          <p>Среднее за месяц</p>
        </div>
      </div>
    </Container>
  )
}

const Container = styled.div`
  background: #ffffff;
  box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.03);
  border-radius: 6px;
  height: 282px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px 19px;

  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    h5 {
      width: 50%;
      font-weight: 600;
      font-size: 24px;
      line-height: 30px;
      color: #202020;
    }
  }

  .bottom {
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
    .perc {
      font-weight: 600;
      font-size: 26px;
      color: #57c3a7;
    }
    p {
      font-weight: normal;
      font-size: 16px;
      color: #828282;
    }
  }
`

export default RateCard
