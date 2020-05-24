import React, { useEffect } from 'react'
import styled from 'styled-components'
import CalendarBox from './CalendarBox'
import Tasks from './Tasks'
import Done from './Done'
import { connect } from 'react-redux'
import { getCalendar } from '../../../../redux/actions/doctor/calendar'

const Calendar = (props) => {
  let token = localStorage.getItem('token')
  useEffect(() => {
    props.getCalendar({ id: props.id, token })
  }, [])
  return (
    <Container>
      <H1>Календарь</H1>
      <Grid>
        <CalendarBox info={props.getCalendarInfo.info} />
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

const mapStateToProps = (state) => {
  return {
    getCalendarInfo: state.getCalendarInfo,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCalendar: (values) => {
      dispatch(getCalendar(values))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Calendar)
