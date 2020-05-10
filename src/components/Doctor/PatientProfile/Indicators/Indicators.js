import React from 'react'
import styled from 'styled-components'
import CardSimple from './CardSimple'
import waterdrop from './../../../../assets/water-drop.svg'
import path from './../../../../assets/path.svg'
import line from './../../../../assets/line.svg'
import CardDetailed from './CardDetailed'
import CalendarContainer from './CalendarContainer'
import RateCard from './RateCard'
import SelfrateCard from './SelfrateCard'
import StepsCard from './StepsCard'

const Indicators = () => {
  return (
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
      <CardSimple imgSrc={line} last="11.11.2019 14:00" num="86" name="Пульс" />
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
  )
}

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  padding: 50px;
`

export default Indicators
