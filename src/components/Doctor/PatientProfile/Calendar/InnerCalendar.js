import * as React from 'react'
import { useState, useEffect } from 'react'
import styled, { css } from 'styled-components'
import arrow from './../../../../assets/arrow.svg'

const Frame = styled.div`
  width: 420px;
  margin: 0 auto;
  position: relative;
  left: 15px;
`

const Header = styled.div`
  font-size: 18px;
  font-weight: bold;
  padding: 10px 10px 5px 10px;
  display: flex;
  justify-content: space-between;
  .month {
    font-weight: 600;
    font-size: 24px;
    color: #202020;
    margin-left: -20px;
  }
`

const Button = styled.div`
  cursor: pointer;
  :last-child {
    transform: rotate(180deg);
    position: relative;
    top: -2px;
    left: -40px;
  }
  :first-child {
    margin-left: 5px;
  }
`

const Body = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`

const Day = styled.div`
  width: 35px;
  height: 35px;
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 100%;
  position: relative;
  z-index: 1000;
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 400;
  color: rgba(31, 32, 65, 0.5);
  strong {
    font-weight: bold;
    font-size: 18px;
    color: #000000;
  }

  ${(props) =>
    props.isCustom
      ? css`
          color: ${props.mainColor};
          border: 2px solid ${props.mainColor};
          :hover {
            background: ${props.mainColor};
            color: white;
          }
        `
      : null}

  ${(props) =>
    props.isToday
      ? css`
          color: white;
          background: ${props.mainColor};
        `
      : null}
`

export function InnerCalendar({ customData }) {
  console.log(customData)
  const DAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  const DAYS_LEAP = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  const DAYS_OF_THE_WEEK = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС']
  const MONTHS = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
  ]

  const today = new Date()
  const [date, setDate] = useState(today)
  const [day, setDay] = useState(date.getDate())
  const [month, setMonth] = useState(date.getMonth())
  const [year, setYear] = useState(date.getFullYear())
  const [startDay, setStartDay] = useState(getStartDayOfMonth(date))

  useEffect(() => {
    setDay(date.getDate())
    setMonth(date.getMonth())
    setYear(date.getFullYear())
    setStartDay(getStartDayOfMonth(date))
  }, [date])

  function getStartDayOfMonth(date) {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay()
  }

  function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
  }

  const days = isLeapYear ? DAYS_LEAP : DAYS

  return (
    <Frame>
      <Header>
        <Button
          onClick={() => setDate(new Date(year, month - 1, day))}
          className="prev"
        >
          <img src={arrow} alt="Previous" />
        </Button>
        <div className="month">
          {MONTHS[month]} {year}
        </div>
        <Button
          onClick={() => setDate(new Date(year, month + 1, day))}
          className="next"
        >
          <img src={arrow} alt="Previous" />
        </Button>
      </Header>
      <Body>
        {DAYS_OF_THE_WEEK.map((d) => (
          <Day key={d}>
            <strong>{d}</strong>
          </Day>
        ))}
        {Array(days[month] + (startDay - 1))
          .fill(null)
          .map((_, index) => {
            const d = index - (startDay - 2)
            let str = date.toLocaleDateString('ru-RU')
            let isCustom = false
            let percentage = 0
            for (let i = 0; i < customData.length; i++) {
              if (customData[i].date === str) {
                isCustom = true
                percentage = customData[i].percentage
                break
              }
            }
            const mainColor =
              percentage === 0
                ? '#EB5757'
                : percentage >= 50
                ? '#57C3A7'
                : '#F2C94C'
            return (
              <Day
                key={index}
                isToday={d === today.getDate() && month === today.getMonth()}
                isSelected={d === day}
                onClick={() => setDate(new Date(year, month, d))}
                isCustom={isCustom}
                mainColor={mainColor}
              >
                {d > 0 ? d : ''}
              </Day>
            )
          })}
      </Body>
    </Frame>
  )
}
