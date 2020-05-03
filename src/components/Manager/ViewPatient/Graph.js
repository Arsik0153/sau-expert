import React, { useState } from 'react'
import styled from 'styled-components'
import { Line } from 'react-chartjs-2'

const Graph = () => {
  const lineData = {
    labels: [
      '29.01',
      '30.01',
      '31.01',
      '1.02',
      '2.02',
      '3.02',
      '4.02',
      '5.02',
      '6.02',
      '7.02',
      '8.02',
    ],
    datasets: [
      {
        label: 'Статистика активности',
        data: [70, 90, 70, 100, 80, 110, 90, 115, 90, 115, 95],
        backgroundColor: '#57C3A7',
        borderColor: '#57C3A7',
        borderWidth: 2,
        fill: false,
        pointBorderWidth: 0,
      },
    ],
  }

  const lineOptions = {
    maintainAspectRatio: false,
    layout: {},
    scales: {
      yAxes: [
        {
          ticks: {
            min: 40,
          },
          gridLines: {
            borderDash: [8, 4],
          },
        },
      ],
      xAxes: [
        {
          gridLines: {
            display: false,
          },
        },
      ],
    },
    legend: {
      display: false,
    },
  }

  const [startDate, setStartDate] = useState(
    Date.now() - 10 * 24 * 60 * 60 * 1000
  )
  const [endDate, setEndDate] = useState(Date.now())

  return (
    <Container>
      <H3>Статистика активности</H3>

      <Line data={lineData} width={300} height={200} options={lineOptions} />
    </Container>
  )
}

const Container = styled.div`
  background: #ffffff;
  box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.03);
  border-radius: 5px;
  padding: 40px;
  margin: 30px 50px 30px 50px;
  width: calc(100% - 100px);
`
const H3 = styled.h3`
  font-weight: 600;
  font-size: 22px;
  color: #202020;
  margin-bottom: 20px;
`

export default Graph
