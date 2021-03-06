import React, { useEffect } from 'react'
import styled from 'styled-components'
import Filters from './Filters'
import Table from './Table'
import { connect } from 'react-redux'
import { getPatients } from './../../../redux/actions/managerPatientsActions'

const Main = (props) => {
  let token = localStorage.getItem('token')

  useEffect(() => {
    props.getPatients(token)
  }, [])

  return (
    <Container>
      <H1>Пациенты</H1>
      <Filters />
      <Table result={props.patientTable.info.results} />
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
    patientTable: state.patientTable,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPatients: (values) => {
      dispatch(getPatients(values))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
