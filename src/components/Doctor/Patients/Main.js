import React, { useEffect } from 'react'
import styled from 'styled-components'
import Filters from './Filters'
import Table from './Table'
import { connect } from 'react-redux'
import { getPatientsForDoctor } from './../../../redux/actions/doctor/patients'

const Main = (props) => {
  let token = localStorage.getItem('token')
  useEffect(() => {
    props.getPatientsForDoctor(token)
  }, [])
  return (
    <Container>
      <H1>Пациенты</H1>
      <Filters />
      {props.patientsForDoctor.info.results && (
        <Table result={props.patientsForDoctor.info.results} />
      )}
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

const mapStateToProps = (state) => {
  return {
    patientsForDoctor: state.patientsForDoctor,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPatientsForDoctor: (values) => {
      dispatch(getPatientsForDoctor(values))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
