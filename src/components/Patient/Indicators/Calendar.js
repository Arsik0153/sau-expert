import * as React from 'react'
import { useState, useEffect } from 'react'
import styled, { css } from 'styled-components'
import arrow from './../../../assets/arrow.svg'

const Frame = styled.div`
  width: 280px;
  margin: 0 auto;
`

const Header = styled.div`
  font-size: 18px;
  font-weight: bold;
  padding: 10px 10px 5px 10px;
  display: flex;
  justify-content: space-between;
`

const Button = styled.div`
  cursor: pointer;
  :last-child {
    transform: rotate(180deg);
    margin-top: 3px;
  }
`

const Body = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`

const Day = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 100%;
  position: relative;
  z-index: 1000;
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 400;

  ${(props) =>
    props.isCustom
      ? props.type.length !== 2
        ? props.type[0] === 'gypo'
          ? css`
              background: #57c3a7;
            `
          : css`
              background: rgba(255, 79, 79, 0.76);
            `
        : null
      : null}

  ${(props) =>
    props.isCustom
      ? css`
          color: white;
        `
      : null}

  .left {
    width: 20px;
    height: 40px;
    border-top-left-radius: 40px;
    border-bottom-left-radius: 40px;
    left: 0px;
    position: absolute;
    background-color: rgba(255, 79, 79, 0.76);
    z-index: -1;
  }
  .right {
    display: block;
    width: 20px;
    height: 40px;
    background: #57c3a7;
    border-top-right-radius: 40px;
    border-bottom-right-radius: 40px;
    left: 20px;
    position: absolute;
    z-index: -1;
  }
`

export function Calendar({ customData }) {
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
        <div>
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
            let str = `${date.getFullYear()}-${month}-${d}`
            let isCustom = false
            let type = ''
            for (let i = 0; i < customData.length; i++) {
              if (customData[i].date === str) {
                isCustom = true
                type = customData[i].payload
                break
              }
            }
            return (
              <Day
                key={index}
                isToday={d === today.getDate()}
                isSelected={d === day}
                onClick={() => setDate(new Date(year, month, d))}
                isCustom={isCustom}
                type={type}
              >
                {isCustom && type.length === 2 ? (
                  <>
                    <div className="left"></div>
                    <div className="right"></div>
                  </>
                ) : null}
                {d > 0 ? d : ''}
              </Day>
            )
          })}
      </Body>
    </Frame>
  )
}
