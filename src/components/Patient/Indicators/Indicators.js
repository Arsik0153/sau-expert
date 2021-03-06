import React from 'react'
import styled from 'styled-components'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import CardSimple from './CardSimple'
import waterdrop from './../../../assets/water-drop.svg'
import path from './../../../assets/path.svg'
import line from './../../../assets/line.svg'
import CardDetailed from './CardDetailed'
import CalendarContainer from './CalendarContainer'
import RateCard from './RateCard'
import SelfrateCard from './SelfrateCard'
import StepsCard from './StepsCard'
import { connect } from 'react-redux'
import { getIndicators } from '../../../redux/actions/patientActions'
import Graphs from './Graphs'

const Indicators = (props) => {
  console.log(props)
  return (
    <Container>
      <H1>Показатели</H1>
      <Tabs>
        <TabList>
          <Tab>Показатели</Tab>
          <Tab>Графики</Tab>
        </TabList>

        <TabPanel>
          <CardsContainer>
            <CardSimple
              imgSrc={waterdrop}
              last="11.11.2019 14:00"
              num="6.0"
              name="Глюкоза"
            />
            <CardSimple
              imgSrc={path}
              last="11.11.2019 14:00"
              num="120"
              lastNum="80"
              name="Давление"
            />
            <CardSimple
              imgSrc={line}
              last="11.11.2019 14:00"
              num="86"
              name="Пульс"
            />
            <CardDetailed
              name="Гипогликемия"
              last="11.11.2019 14:00"
              thisMonth="3"
              lastMonth="8"
            />
            <CardDetailed
              name="Гипергликемия"
              last="11.11.2019 14:00"
              thisMonth="1"
              lastMonth="4"
              defaultColor="rgba(255, 79, 79, 0.76)"
            />
            <CalendarContainer />
            <RateCard percentage={95} week="85%" month="86%" />
            <SelfrateCard />
            <StepsCard />
          </CardsContainer>
        </TabPanel>
        <TabPanel>
          <Graphs />
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
const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  padding: 50px;
`

const mapStateToProps = (state, ownProps) => {
  return {
    indicators: state,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    indicators: () => dispatch(getIndicators('HELOOOOOOO')),
  }
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  return {
    ...ownProps,
    state: stateProps,
    actions: dispatchProps,
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(Indicators)
