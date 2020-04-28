import React from 'react'
import styled from 'styled-components'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import Pressure from './Pressure'
import Glucose from './Glucose'
import Medicine from './Medicine'
import Analysis from './Analysis'
import Clicker from './Clicker'
import Status from './Status'
import Index from './Index'

const Main = () => {
  return (
    <Container>
      <H1>Карта пациента</H1>
      <Tabs>
        <TabList>
          <Tab>Давление</Tab>
          <Tab>Глюкоза</Tab>
          <Tab>Медикаменты</Tab>
          <Tab>Анализ</Tab>
          <Tab>Гипо/гипер-гликемия</Tab>
          <Tab>Состояние</Tab>
          <Tab>ИМТ</Tab>
        </TabList>
        <TabPanel>
          <Pressure />
        </TabPanel>
        <TabPanel>
          <Glucose />
        </TabPanel>
        <TabPanel>
          <Medicine />
        </TabPanel>
        <TabPanel>
          <Analysis />
        </TabPanel>
        <TabPanel>
          <Clicker />
        </TabPanel>
        <TabPanel>
          <Status />
        </TabPanel>
        <TabPanel>
          <Index />
        </TabPanel>
      </Tabs>
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

export default Main
