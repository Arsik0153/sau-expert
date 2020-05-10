import React from 'react'
import styled from 'styled-components'

const StepsCard = () => {
  const have = 5987
  const target = 10000

  const greenWidth = (have / target) * 100
  const redWidth = 100 - greenWidth

  return (
    <Container>
      <h3>Шаги</h3>
      <Grid>
        <div className="have">
          <p className="green">5 987</p>
          Пройдено
        </div>
        <div className="progress">
          <Green
            className="progress-green"
            style={{ width: `${greenWidth}%` }}
          ></Green>
          <Red className="progress-red" style={{ width: `${redWidth}%` }}></Red>
        </div>
        <div className="target">
          <p className="red">10 000</p>
          Цель на день
        </div>
      </Grid>
    </Container>
  )
}

const Container = styled.div`
  background: #ffffff;
  box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.03);
  border-radius: 6px;
  padding: 42px 19px;
  h3 {
    font-weight: 600;
    font-size: 24px;
    color: #202020;
  }
`
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr 10px 1fr;
  margin-top: 10px;
  .have {
    grid-column: 1 / 6;
    font-weight: normal;
    font-size: 16px;
    color: #828282;
    margin-bottom: 20px;
    .green {
      font-size: 26px;
      font-weight: 600;
      color: #57c3a7;
    }
  }
  .target {
    font-weight: normal;
    font-size: 16px;
    text-align: right;
    color: #828282;
    grid-column: 4 / 6;
    margin-top: 20px;
    .red {
      font-size: 26px;
      font-weight: 600;
      color: #f47775;
    }
  }
  .progress {
    grid-column: 1 / 6;
    display: flex;
    width: 100%;
  }
`
const Green = styled.div`
  width: 60%;
  background: #57c3a7;
`
const Red = styled.div`
  background: rgba(255, 79, 79, 0.76);
  width: 40%;
`

export default StepsCard
