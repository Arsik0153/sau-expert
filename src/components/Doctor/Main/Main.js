import React, { useEffect } from 'react'
import styled from 'styled-components'
import options from './../../../assets/options.svg'
import NotificationsTable from './NotificationsTable'
import IssuesTable from './IssuesTable'
import { connect } from 'react-redux'
import { getDoctorStatistics } from './../../../redux/actions/doctor/statistics'

const Main = (props) => {
  let token = localStorage.getItem('token')
  useEffect(() => {
    props.getDoctorStatistics(token)
  }, [])
  return (
    <Container>
      <H1>Главная</H1>
      {props.doctorDashboard.info.patients && (
        <CardsContainer>
          <Card color="#686868">
            <img src={options} alt="More" />
            <H5>Все пациенты</H5>
            <p>
              <span>{props.doctorDashboard.info.patients.all}</span> пациентов
            </p>
          </Card>
          <Card color="#6FCF97">
            <img src={options} alt="More" />
            <H5>Активные</H5>
            <p>
              <span>{props.doctorDashboard.info.patients.active_patients}</span>{' '}
              пациентов
            </p>
          </Card>
          <Card color="#BD1119">
            <img src={options} alt="More" />
            <H5>Неактивные</H5>
            <p>
              <span>
                {props.doctorDashboard.info.patients.inactive_patients}
              </span>{' '}
              пациентов
            </p>
          </Card>
          <Card color="#FFC542">
            <img src={options} alt="More" />
            <H5>В ожидании</H5>
            <p>
              <span>
                {props.doctorDashboard.info.patients.pending_patients}
              </span>{' '}
              пациентов
            </p>
          </Card>
        </CardsContainer>
      )}
      <div className="flex">
        <NotificationsTable />
        <IssuesTable />
      </div>
    </Container>
  )
}

const Container = styled.div`
  grid-area: main;
  .flex {
    display: flex;
  }
`
const H1 = styled.h1`
  font-weight: 600;
  font-size: 38px;
  color: #202020;
  margin: 50px 50px 25px 50px;
`
const CardsContainer = styled.div`
  margin: 30px 50px 0 50px;
  display: flex;
  flex-wrap: wrap;
`
const Card = styled.div`
  width: 220px;
  padding: 30px;
  background: #ffffff;
  box-shadow: 0px 10px 20px rgba(31, 32, 65, 0.05);
  border-radius: 4px;
  margin-right: 25px;
  margin-bottom: 25px;
  position: relative;
  p {
    color: rgba(50, 60, 71, 0.4);
    margin-top: 5px;
    font-size: 16px;
    span {
      font-weight: bold;
      font-size: 32px;
      margin-right: 5px;
      color: ${(props) => props.color};
    }
  }
  img {
    position: absolute;
    right: 30px;
    top: 35px;
  }
`
const H5 = styled.h5`
  font-size: 14px;
  color: #202020;
  font-weight: 500;
`

const mapStateToProps = (state) => {
  return {
    doctorDashboard: state.doctorDashboard,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getDoctorStatistics: (values) => {
      dispatch(getDoctorStatistics(values))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
