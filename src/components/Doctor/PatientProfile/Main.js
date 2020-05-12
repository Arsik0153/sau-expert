import React from 'react'
import styled from 'styled-components'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import Indicators from './Indicators/Indicators'
import Graphs from './Indicators/Graphs'
import Calendar from './Calendar/Calendar'
import Treatment from './Treatment/Treatment'
import Chat from './Chat/Chat'

const Main = (props) => {
  return (
    <Container>
      <H1>Иванов Иван Иванович</H1>
      <Tabs>
        <TabList>
          <Tab>Показатели</Tab>
          <Tab>Графики</Tab>
          <Tab>Календарь</Tab>
          <Tab>Лечение</Tab>
          <Tab>Чат</Tab>
        </TabList>

        <TabPanel>
          <Indicators />
        </TabPanel>
        <TabPanel>
          <Graphs />
        </TabPanel>
        <TabPanel>
          <Calendar />
        </TabPanel>
        <TabPanel>
          <Treatment />
        </TabPanel>
        <TabPanel>
          <Chat />
        </TabPanel>
      </Tabs>
    </Container>
  )
}

const Container = styled.div`
  grid-area: main;
  .react-tabs__tab-list {
    width: 100%;
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid #e6e8f1;
  }
  .react-tabs__tab {
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 15px;
    margin-right: 79px;
    color: #686868;
    padding-bottom: 16px;
    cursor: pointer;
    outline: none;
  }
  .react-tabs__tab:first-child {
    margin-left: 50px;
  }
  .react-tabs__tab--selected {
    font-weight: bold;
    color: #57c3a7;
    border-bottom: 4px solid #57c3a7;
  }
`
const H1 = styled.h1`
  font-weight: 600;
  font-size: 38px;
  color: #202020;
  margin: 50px 0 45px 50px;
`

export default Main
