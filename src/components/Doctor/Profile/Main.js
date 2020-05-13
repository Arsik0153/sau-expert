import React, { useEffect } from 'react'
import styled from 'styled-components'
import Info from './Info'
import { connect } from 'react-redux'
import { getMyProfile } from './../../../redux/actions/doctor/myProfile'
import Preloader from './../../helpers/Preloader'

const Main = (props) => {
  let token = localStorage.getItem('token')
  useEffect(() => {
    props.getMyProfile(token)
  }, [])
  return (
    <Container>
      {props.myProfileDoctor.status !== 'success' ? (
        <div className="preloader-container">
          <Preloader />
        </div>
      ) : (
        <>
          <div className="flex">
            <H1>{props.myProfileDoctor.info.full_name}</H1>
          </div>
          <Info info={props.myProfileDoctor.info} />
        </>
      )}
    </Container>
  )
}

const Container = styled.div`
  grid-area: main;
  .flex {
    display: flex;
    justify-content: space-between;
  }
  .preloader-container {
    height: calc(100vh - 100px);
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
const H1 = styled.h1`
  font-weight: 600;
  font-size: 38px;
  color: #202020;
  margin: 50px 0 45px 50px;
`

const mapStateToProps = (state) => {
  return {
    myProfileDoctor: state.myProfileDoctor,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getMyProfile: (values) => {
      dispatch(getMyProfile(values))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
