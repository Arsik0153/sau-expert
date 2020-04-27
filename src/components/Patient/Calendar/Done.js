import React from 'react'
import styled from 'styled-components'
import './ProgressBar.css'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'

const Done = () => {
  const percentage = 25
  const mainColor =
    percentage === 0
      ? '#EB5757'
      : percentage >= 50 && percentage < 90
      ? '#F2C94C'
      : '#57C3A7'

  return (
    <Container>
      <H3>
        Сегодняшнее
        <br />
        врачебное назначение
        <br />
        выполнено{' '}
      </H3>
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        styles={buildStyles({
          pathColor: mainColor,
          textColor: mainColor,
        })}
      />
    </Container>
  )
}

const Container = styled.div`
  background: #ffffff;
  box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.03);
  border-radius: 6px;
  grid-row: 3 / 6;
  grid-column: 1 / 2;
  display: flex;
  justify-content: space-around;
  align-items: center;
`
const H3 = styled.h3`
  font-weight: normal;
  font-size: 24px;
  color: #364856;
`

export default Done
