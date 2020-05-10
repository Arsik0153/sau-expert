import React from 'react'
import styled from 'styled-components'
import CalendarBox from './CalendarBox'
import Tasks from './Tasks'
import Done from './Done'

const Calendar = () => {
  return (
    <Container>
      <H1>Календарь</H1>
      <Grid>
        <CalendarBox />
        <Tasks />
        <Done />
      </Grid>
    </Container>
  )
}

const Container = styled.div`
  grid-area: main;
`
const H1 = styled.h1`
  font-weight: 600;
  font-size: 38px;
  color: #202020;
  margin: 50px 0 45px 50px;
`
const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(3, 220px);
  padding: 0 50px;
  padding-bottom: 50px;
  grid-gap: 30px;
`

export default Calendar
