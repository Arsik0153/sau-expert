import React, { useState } from 'react'
import styled from 'styled-components'
import close from './../../../assets/close.svg'
import event from './../../../assets/event.svg'
import DatePicker, { registerLocale } from 'react-datepicker'
import { connect } from 'react-redux'
import { setSubDate } from './../../../redux/actions/patientModalActions'
import ru from 'date-fns/locale/ru'
registerLocale('ru', ru)

const SubControl = (props) => {
  let token = localStorage.getItem('token')
  const handleSubmit = () => {
    let formattedBegin =
      beginDate.getFullYear() +
      '-' +
      ('0' + (beginDate.getMonth() + 1)).slice(-2) +
      '-' +
      ('0' + beginDate.getDate()).slice(-2)

    let formattedEnd =
      endDate.getFullYear() +
      '-' +
      ('0' + (endDate.getMonth() + 1)).slice(-2) +
      '-' +
      ('0' + endDate.getDate()).slice(-2)

    let request = {
      id: props.id,
      beginDate: formattedBegin,
      endDate: formattedEnd,
      token,
    }
    props.setSubDate(request)
  }
  let begin = new window.Date(props.beginDate)
  let end = new window.Date(props.endDate)
  const [beginDate, setStartDate] = useState(begin)
  const [endDate, setEndDate] = useState(end)
  console.log(beginDate)

  const monthes = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря',
  ]

  return (
    <Box>
      <H2>Управление подпиской</H2>
      <Close src={close} alt="Close" onClick={() => props.closeModal()} />
      <H3>{props.name}</H3>
      <H5>Текущая подписка</H5>
      <Date>
        {`${beginDate.getDate()} ${
          monthes[beginDate.getMonth()]
        } ${beginDate.getFullYear()} - ${endDate.getDate()} ${
          monthes[endDate.getMonth()]
        } ${endDate.getFullYear()}`}
        <span>
          (осталось{' '}
          {`${Math.ceil(
            Math.abs(beginDate - endDate) / (1000 * 60 * 60 * 24)
          )}`}{' '}
          дней)
        </span>
      </Date>
      <H5>Изменить даты подписки</H5>
      <Dates>
        <div className="flex">
          <div className="inner">
            <p>Дата начала</p>
            <div className="inner-flex">
              <DatePicker
                locale="ru"
                dateFormat="yyyy-MM-dd"
                selected={beginDate}
                onChange={(date) => setStartDate(date)}
                selectsStart
                startDate={beginDate}
                endDate={endDate}
              />
              <img src={event} alt="Date" />
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="inner">
            <p>Дата окончания</p>
            <div className="inner-flex">
              <DatePicker
                locale="ru"
                dateFormat="yyyy-MM-dd"
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                selectsStart
                startDate={beginDate}
                endDate={endDate}
              />
              <img src={event} alt="Date" />
            </div>
          </div>
        </div>
      </Dates>
      <button type="submit" onClick={() => handleSubmit()}>
        Сохранить
      </button>
    </Box>
  )
}
const Box = styled.div`
  height: fit-content;
  position: relative;
  min-width: 450px;
  width: 100%;
  input {
    width: 100%;
    background: #ffffff;
    border: 1px solid rgba(31, 32, 65, 0.25);
    box-sizing: border-box;
    border-radius: 4px;
    padding: 16px 20px;
    font-size: 16px;
    color: #000;
    margin: 10px 0 20px 0;
    outline: none;
    resize: none;
    :focus {
      border: 1px solid #57c3a7;
    }
    ::placeholder {
      color: #bdbdbd;
    }
  }
  button[type='submit'] {
    width: 100%;
    background: #57c3a7;
    border-radius: 4px;
    font-size: 16px;
    color: #ffffff;
    padding: 20px 0;
    border: none;
    margin-top: 15px;
    outline: none;
    font-family: 'Source Sans Pro', sans-serif;
  }
  label {
    font-size: 16px;
    color: #333333;
    font-weight: 400;
    padding-left: 18px;
  }
  .field-error {
    width: 100%;
    padding: 20px 15px;
    color: white;
    background: #f47775;
    font-weight: 300;
    margin-top: 10px;
    border-radius: 4px;
  }
  .flex {
    display: flex;
    justify-items: space-between;
    margin-top: 10px;
    .inner {
      display: flex;
      flex-direction: column;
      .inner-flex {
        display: flex;
        img {
          position: relative;
          top: -6px;
          left: -30px;
        }
      }
    }
  }
`
const H2 = styled.h2`
  font-weight: 600;
  font-size: 24px;
  color: #202020;
`
const Close = styled.img`
  position: absolute;
  right: 0px;
  top: 10px;
  cursor: pointer;
`
const H3 = styled.h3`
  font-weight: 600;
  font-size: 22px;
  color: #202020;
  margin-top: 50px;
`
const H5 = styled.h5`
  font-weight: 600;
  font-size: 16px;
  color: #333333;
  margin: 15px 0;
`
const Date = styled.p`
  font-weight: 500;
  font-size: 20px;
  color: #6fcf97;
  span {
    color: black;
    font-size: 14px;
  }
`
const Dates = styled.div`
  display: flex;
  justify-content: space-between;
`

const mapStateToProps = (state) => {
  return {
    setSubDateInfo: state.setSubDate,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setSubDate: (values) => {
      dispatch(setSubDate(values))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SubControl)
