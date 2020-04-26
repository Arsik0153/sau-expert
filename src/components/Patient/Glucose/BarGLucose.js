import React, { useState } from 'react'
import styled from 'styled-components'
import event from './../../../assets/event.svg'
import { Bar } from 'react-chartjs-2'
import DatePicker from 'react-datepicker'

const BarGLucose = () => {
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
        label: 'Уровень глюкозы',
        data: [5.55, 5.7, 5.75, 5.6, 5.5, 5.6, 5.5, 5.55, 5.7, 5.6, 5.7],
        backgroundColor: 'rgba(255, 79, 79, 0.76)',
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
            min: 5.3,
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
        <H3>График глюкозы</H3>
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
const H4 = styled.h4`
  font-weight: 600;
  font-size: 16px;
  color: #333333;
`
const Scroll = styled.div`
  margin-top: 15px;
  table {
    width: calc(100% + 15px);
    padding-right: 15px;
    display: block;
    height: 250px;
    overflow-y: auto;
    overflow-x: hidden;
    tr {
      display: flex;
      justify-content: space-between;
      padding: 18px 0;
      font-size: 16px;
      color: #202020;
      border-bottom: 1px solid rgba(31, 32, 65, 0.1);
    }
    /* width */
    ::-webkit-scrollbar {
      width: 4px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: #e0e0e0;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #57c3a7;
      border-radius: 2px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
  }
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

export default BarGLucose
