import React, { useState } from 'react'
import styled from 'styled-components'
import Calendar from 'react-calendar'
import './Calendar.css'

const CalendarContainer = () => {
  const [now, setNow] = useState(new Date())

  return (
    <Container>
      <Calendar defaultValue={now} value={new Date(2019, 4, 28)} />
      <div className="desc">
        <div>
          <div className="ball green"></div>
          <p>Гипогликемия</p>
        </div>
        <div>
          <div className="ball red"></div>
          <p>Гипогликемия</p>
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
    div {
      display: flex;
      align-items: center;
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
