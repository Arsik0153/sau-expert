import React from 'react'
import styled from 'styled-components'
import { Calendar } from './Calendar.js'

const data = [
  {
    date: '2020-4-6',
    payload: ['gypo'],
  },
  {
    date: '2020-4-22',
    payload: ['gypo', 'gyper'],
  },
  {
    date: '2020-4-10',
    payload: ['gyper'],
  },
]

const CalendarContainer = () => {
  return (
    <Container>
      <Calendar customData={data} />
      <div className="desc">
        <div className="cont">
          <div className="ball green"></div>
          <p>Гипогликемия</p>
        </div>
        <div className="cont">
          <div className="ball red"></div>
          <p>Гипергликемия</p>
        </div>
      </div>
    </Container>
  )
}

const Container = styled.div`
  background: #ffffff;
  box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.03);
  border-radius: 6px;

  .desc {
    display: flex;
    justify-content: space-between;
    padding: 0 30px;
    margin-top: 10px;
    .cont {
      display: flex;
      align-items: center;
      :first-child {
        margin-right: 10px;
      }
    }
  }
  .ball {
    width: 16px;
    height: 16px;
    border-radius: 100%;
    margin-right: 5px;
  }
  .green {
    background: #57c3a7;
  }
  .red {
    background: rgba(255, 79, 79, 0.76);
  }
`

export default CalendarContainer
