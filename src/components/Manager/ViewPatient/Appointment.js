import React, { useState } from 'react'
import styled from 'styled-components'
import close from './../../../assets/close.svg'
import event from './../../../assets/event.svg'
import DatePicker, { registerLocale } from 'react-datepicker'
import ru from 'date-fns/locale/ru'
registerLocale('ru', ru)

const Appointment = ({ closeModal }) => {
  const handleSubmit = (values) => {
    console.log(values)
    alert('Submit')
  }
  let now = new window.Date()
  const [startDate, setStartDate] = useState(now - 10 * 24 * 60 * 60 * 1000)
  const [endDate, setEndDate] = useState(now)

  return (
    <Box>
      <H2>Назначить прием</H2>
      <Close src={close} alt="Close" onClick={() => closeModal()} />
      <H3>Иванов Иван Иванович</H3>
      <H5>Назначить прием у врача</H5>
      <select>
        <option value="">Петров А.А. (кардиолог)</option>
      </select>
      <H5>Дата и время приема</H5>
      <div className="inner-flex">
        <DatePicker
          locale="ru"
          dateFormat="dd.MM.yyyy"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
        />
        <img src={event} alt="Date" />
      </div>
      <button type="submit">Сохранить</button>
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
  select {
    width: 300px;
    height: 40px;
    background: #ffffff;
    border: 1px solid rgba(31, 32, 65, 0.25);
    box-sizing: border-box;
    border-radius: 4px;
    padding: 16px 20px;
    font-size: 16px;
    color: #000;
    outline: none;
    resize: none;
    margin-right: 15px;
    :focus {
      border: 1px solid #57c3a7;
    }
    ::placeholder {
      color: #bdbdbd;
      font-weight: 300;
    }
  }
  .inner-flex {
    display: flex;
    img {
      position: relative;
      top: -2px;
      left: -30px;
    }
  }
  .react-datepicker-wrapper input {
    height: 40px;
    margin: 0;
    width: 300px;
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

export default Appointment
