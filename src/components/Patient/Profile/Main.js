import React, { useEffect } from 'react'
import styled from 'styled-components'
import change from './../../../assets/edit.svg'
import Info from './Info'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import Diagnosis from './Diagnosis'
import Anketa from './Anketa'
import Diabet from './Diabet'
import Heart from './Heart'
import Schedule from './Schedule'
import { connect } from 'react-redux'
import { viewMyProfile } from './../../../redux/actions/patient/profileActions'
import Preloader from './../../helpers/Preloader'

const Main = (props) => {
  let token = localStorage.getItem('token')
  useEffect(() => {
    props.viewMyProfile(token)
  }, [])

  return (
    <Container>
      {props.myProfile.status !== 'success' ? (
        <div className="preloader-container">
          <Preloader />
        </div>
      ) : (
        <>
          {/*<Notification>
            <p>
              Уважаемый <strong>Иванов Иван Иванович</strong>, поздравляем с
              успешной регистрацией в системе Наш менеджер свяжется с Вами по
              контактному номеру и запишет Вас на прием к врачу После первого
              приема Вам станет доступен полный функционал системы
            </p>
          </Notification>*/}
          <div className="flex">
            <H1>{`${props.myProfile.info.first_name} ${props.myProfile.info.last_name} ${props.myProfile.info.patronymic}`}</H1>
            <div className="change">
              <p>Редактировать информацию</p>
              <img src={change} alt="Edit" />
            </div>
          </div>
          <Info info={props.myProfile.info} />
          <Tabs>
            <TabList>
              <Tab>Диагноз</Tab>
              <Tab>Анкета</Tab>
              <Tab>Диабет</Tab>
              <Tab>Сердце</Tab>
              <Tab>Режим дня</Tab>
            </TabList>
            <TabPanel>
              <Diagnosis />
            </TabPanel>
            <TabPanel>
              <Anketa />
            </TabPanel>
            <TabPanel>
              <Diabet />
            </TabPanel>
            <TabPanel>
              <Heart />
            </TabPanel>
            <TabPanel>
              <Schedule />
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

const mapStateToProps = (state) => {
  return {
    myProfile: state.myProfile,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    viewMyProfile: (values) => {
      dispatch(viewMyProfile(values))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
