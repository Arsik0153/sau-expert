import React, { useEffect } from 'react'
import styled from 'styled-components'
import change from './../../../../assets/edit.svg'
import Info from './Info'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import Diagnosis from './Diagnosis/Diagnosis'
import Anketa from './Anketa/Anketa'
import Diabet from './Diabet/Diabet'
import Heart from './Heart/Heart'
import Schedule from './Schedule/Schedule'
//import { connect } from 'react-redux'
//import { getPatientProfile } from '../../../../redux/actions/doctor/patientProfile'
import Preloader from '../../../helpers/Preloader'

const Main = (props) => {
  return (
    <Container>
      <Info info={props.info} />
      <Tabs>
        <TabList>
          <Tab>Диагноз</Tab>
          <Tab>Анкета</Tab>
          <Tab>Диабет</Tab>
          <Tab>Сердце</Tab>
          <Tab>Режим дня</Tab>
        </TabList>
        <TabPanel>
          <Diagnosis id={props.id} />
        </TabPanel>
        <TabPanel>
          <Anketa id={props.id} info={props.info} />
        </TabPanel>
        <TabPanel>
          <Diabet id={props.id} />
        </TabPanel>
        <TabPanel>
          <Heart id={props.id} />
        </TabPanel>
        <TabPanel>
          <Schedule id={props.id} />
        </TabPanel>
      </Tabs>
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
    width: calc(100% - 100px) !important;
    display: flex !important;
    flex-direction: row !important;
    justify-content: space-between !important;
    align-items: center !important;
    padding: 6px 50px !important;
    border-bottom: 1px solid #e6e8f1 !important;
    margin: 30px 50px !important;
    background: #fff !important;
  }
  .react-tabs__tab {
    font-family: 'Source Sans Pro', sans-serif !important;
    font-size: 13px !important;
    font-weight: 500 !important;
    color: #686868 !important;
    cursor: pointer !important;
    outline: none !important;
    padding-bottom: 0 !important;

    border: none;
  }
  .react-tabs__tab--selected {
    color: #fff !important;
    background: #57c3a7 !important;
    box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.03) !important;
    border-radius: 3px !important;
    padding: 8px 30px 4px 30px !important;
  }
`
const H1 = styled.h1`
  font-weight: 600;
  font-size: 38px;
  color: #202020;
  margin: 50px 0 45px 50px;
`
const Notification = styled.div`
  background: #6fcf97;
  border-radius: 5px;
  padding: 40px;
  margin: 50px 50px 0 50px;
  p {
    font-size: 18px;
    color: #ffffff;
    font-weight: 300;
    strong {
      font-weight: 600;
    }
  }
`

/*const mapStateToProps = (state) => {
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

export default connect(mapStateToProps, mapDispatchToProps)(Main)
*/
export default Main
