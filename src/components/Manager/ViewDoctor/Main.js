import React, { useEffect } from 'react'
import styled from 'styled-components'
import change from './../../../assets/edit.svg'
import Info from './Info'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import Statistics from './Statistics'
import Report from './Report'
import Patients from './Patients'
import { connect } from 'react-redux'
import Preloader from './../../helpers/Preloader'
import { viewDoctor } from './../../../redux/actions/viewDoctorActions'

const Main = (props) => {
  useEffect(() => {
    let request = {
      id: props.id,
    }
    props.viewDoctor(request)
  }, [])

  return (
    <Container>
      {props.doctorInfo.status !== 'success' ? (
        <div className="preloader-container">
          <Preloader />
        </div>
      ) : (
        <>
          <div className="flex">
            <H1>{props.doctorInfo.info.short_name}</H1>
          </div>
          <Info info={props.doctorInfo.info} />
          <Tabs>
            <TabList>
              <Tab>Статистика</Tab>
              <Tab>Детализированный отчет</Tab>
              <Tab>Пациенты</Tab>
            </TabList>
            <TabPanel>
              <Statistics />
            </TabPanel>
            <TabPanel>
              <Report />
            </TabPanel>
            <TabPanel>
              <Patients />
            </TabPanel>
          </Tabs>
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
    .change {
      display: flex;
      margin: 60px 50px 0 0;
      cursor: pointer;
      img {
        height: fit-content;
        margin: 6px 0 0 20px;
      }
      p {
        height: fit-content;
        font-size: 16px;
        color: #57c3a7;
      }
    }
  }
  .preloader-container {
    height: calc(100vh - 100px);
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .react-tabs__tab-list {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 6px 50px;
    border-bottom: 1px solid #e6e8f1;
    margin: 30px 50px;
    background: #fff;
  }
  .react-tabs__tab {
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 13px;
    font-weight: 500;
    color: #686868;
    cursor: pointer;
    outline: none;
    padding-bottom: 0;

    border: none;
  }
  .react-tabs__tab--selected {
    color: #fff;
    background: #57c3a7;
    box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.03);
    border-radius: 3px;
    padding: 8px 30px;
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
    doctorInfo: state.doctorInfo,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    viewDoctor: (values) => {
      dispatch(viewDoctor(values))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
