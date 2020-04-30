import React from 'react'
import styled from 'styled-components'
import change from './../../../assets/edit.svg'
import Info from './Info'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import Diagnosis from './Diagnosis'
import Anketa from './Anketa'
import Diabet from './Diabet'
import Heart from './Heart'

const Main = () => {
  return (
    <Container>
      <div className="flex">
        <H1>Иван Иванов Иванович</H1>
        <div className="change">
          <p>Редактировать информацию</p>
          <img src={change} alt="Edit" />
        </div>
      </div>
      <Info />
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

export default Main
