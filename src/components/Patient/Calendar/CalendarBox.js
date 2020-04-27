import React from 'react'
import styled from 'styled-components'
import { InnerCalendar } from './InnerCalendar'

const data = [
  {
    date: '2020-4-21',
    percentage: 100,
  },
  {
    date: '2020-4-22',
    percentage: 100,
  },
  {
    date: '2020-4-23',
    percentage: 0,
  },
  {
    date: '2020-4-24',
    percentage: 60,
  },
  {
    date: '2020-4-25',
    percentage: 100,
  },
]

const CalendarBox = () => {
  return (
    <Container>
      <InnerCalendar customData={data} />
    </Container>
  )
}

const Container = styled.div`
  background: #ffffff;
  box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.03);
  border-radius: 6px;
  display: flex;
  align-items: center;
  grid-row: 1 / 3;
`

export default CalendarBox
