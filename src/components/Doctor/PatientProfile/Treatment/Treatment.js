import React from 'react'
import styled from 'styled-components'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import Medicine from './Medicine/Medicine'
import Lifestyle from './Lifestyle/Lifestyle'
import Analysis from './Analysis/Analysis'
import Measures from './Measures/Measures'
import Chat from './Chat/Chat'

const Treatment = (props) => {
  return (
    <Container>
      <Tabs>
        <TabList>
          <Tab>Медикаменты</Tab>
          <Tab>Образ жизни</Tab>
          <Tab>Анализы</Tab>
          <Tab>Замеры</Tab>
          <Tab>История лечения</Tab>
        </TabList>
        <TabPanel>
          <Medicine />
        </TabPanel>
        <TabPanel>
          <Lifestyle id={props.id} />
        </TabPanel>
        <TabPanel>
          <Analysis />
        </TabPanel>
        <TabPanel>
          <Measures />
        </TabPanel>
        <TabPanel>
          <Chat />
        </TabPanel>
      </Tabs>
    </Container>
  )
}
// STREAKS
const Container = styled.div`
  padding: 0 50px;
  .react-tabs__tab-list {
    display: flex;
    flex-direction: row;
    justify-content: space-around !important;
    align-items: center !important;
    padding: 6px 50px !important;
    border-bottom: 1px solid #e6e8f1 !important;
    background: #fff !important;
    margin: 30px 0;
  }
  .react-tabs__tab {
    font-family: 'Source Sans Pro', sans-serif !important;
    font-size: 13px !important;
    font-weight: 500 !important;
    color: #686868 !important;
    cursor: pointer !important;
    outline: none !important;
    padding-bottom: 0 !important;

    border: none !important;
  }
  .react-tabs__tab--selected {
    color: #fff !important;
    background: #57c3a7 !important;
    box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.03) !important;
    border-radius: 3px !important;
    padding: 8px 30px 4px 30px !important;
  }
`

export default Treatment
