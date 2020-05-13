import React, { useEffect } from 'react'
import styled from 'styled-components'
import Navbar from '../Navbar'
import Header from '../../Header'
import Main from './Main'
import { connect } from 'react-redux'
import { getPatientProfile } from './../../../redux/actions/doctor/patientProfile'
import Preloader from './../../helpers/Preloader'

const PatientProfile = (props) => {
  let token = localStorage.getItem('token')
  useEffect(() => {
    props.getPatientProfile({
      id: props.match.params.patientId,
      token,
    })
  }, [])
  return (
    <Container>
      <Navbar />
      <Header />
      {props.patientProfile.status !== 'success' ? (
        <div className="preloader-container">
          <Preloader />
        </div>
      ) : (
        <Main
          id={props.match.params.patientId}
          info={props.patientProfile.info}
        />
      )}
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  grid-template-areas:
    'nav header'
    'nav main';
  grid-template-columns: 240px 1fr;
  grid-template-rows: 100px 1fr;
  .preloader-container {
    height: calc(100vh - 100px);
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    grid-area: main;
  }
`

const mapStateToProps = (state) => {
  return {
    patientProfile: state.patientProfile,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPatientProfile: (values) => {
      dispatch(getPatientProfile(values))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PatientProfile)
