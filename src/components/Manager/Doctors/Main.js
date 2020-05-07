import React, { useEffect } from 'react'
import styled from 'styled-components'
import Filters from './Filters'
import Table from './Table'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getDoctors } from './../../../redux/actions/managerDoctorActions'

const Main = (props) => {
  let token = localStorage.getItem('token')

  useEffect(() => {
    props.getDoctors(token)
  }, [])

  return (
    <Container>
      <div className="flex">
        <H1>Врачи</H1>
        <Link to="/manager/newdoctor">Добавить врача</Link>
      </div>
      <Filters />
      <Table result={props.doctorTable.info.results} />
    </Container>
  )
}

const Container = styled.div`
  grid-area: main;
  .flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 50px 50px 45px 50px;
    a {
      padding: 20px 25px;
      font-weight: 400;
      font-size: 14px;
      background: #57c3a7;
      border-radius: 4px;
      color: #fff;
    }
  }
`
const H1 = styled.h1`
  font-weight: 600;
  font-size: 38px;
  color: #202020;
`

const mapStateToProps = (state) => {
  return {
    doctorTable: state.doctorTable,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getDoctors: (values) => {
      dispatch(getDoctors(values))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
