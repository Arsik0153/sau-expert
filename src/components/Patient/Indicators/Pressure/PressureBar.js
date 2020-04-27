import React, { useState } from 'react'
import styled from 'styled-components'
import event from './../../../../assets/event.svg'
import { Bar } from 'react-chartjs-2'
import DatePicker from 'react-datepicker'

const PressureBar = () => {
  const barData = {
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
        label: 'Уровень давления',
        data: [
          [120, 80],
          [100, 60],
          [100, 60],
          [110, 70],
          [120, 70],
          [110, 70],
          [120, 100],
          [140, 100],
          [120, 90],
          [120, 80],
        ],
        backgroundColor: '#57C3A7',
        borderColor: '#E8E8E8',
        borderWidth: 0,
      },
    ],
  }

  const barOptions = {
    layout: {},
    scales: {
      yAxes: [
        {
          ticks: {
            min: 60,
            max: 180,
          },
          gridLines: {
            // You can change the color, the dash effect, the main axe color, etc.
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
    <div>
      <div className="flex">
        <H3>График давления</H3>
        <Picker>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
          />
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
          />
          <img src={event} alt="Event" />
        </Picker>
      </div>

      <Bar data={barData} width={650} height={300} options={barOptions} />
    </div>
  )
}

const H3 = styled.h3`
  font-weight: 600;
  font-size: 22px;
  color: #202020;
  margin-bottom: 15px;
`
const Picker = styled.div`
  background: #ffffff;
  border: 1px solid rgba(31, 32, 65, 0.25);
  box-sizing: border-box;
  border-radius: 4px;
  display: flex;
  align-items: center;
  width: 194px;
  height: 40px;
`

export default PressureBar
