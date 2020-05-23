import React, { useState } from 'react'
import styled from 'styled-components'
import del from './../../../../../assets/delete-red.svg'
import plus from './../../../../../assets/plus-green.svg'
import DatePicker from 'react-datepicker'
import { connect } from 'react-redux'
import { newAppointment } from '../../../../../redux/actions/doctor/newAppointment'

const Appointment = (props) => {
  let token = localStorage.getItem('token')
  const [startDate, setStartDate] = useState(
    window.Date.now() - 10 * 24 * 60 * 60 * 1000
  )
  const [endDate, setEndDate] = useState(window.Date.now())
  const [type, setType] = useState('RECEPTION_DAYS')
  const [title, setTitle] = useState('')
  const [days, setDays] = useState([])
  const [dosage, setDosage] = useState('')
  const [times, setTimes] = useState([{ time: '' }])

  const filterDays = (day) => {
    if (days.includes(day)) {
      setDays(days.filter((d) => d !== day))
    } else {
      setDays([...days, day])
    }
  }

  const editTime = (newTime, index) => {
    let timesCopy = times
    timesCopy[index].time = newTime
    setTimes([...timesCopy])
  }
  const deleteTime = (index) => {
    let timesCopy = []
    console.log(times.length)
    if (times.length === 1) return
    else {
      times.map((t, i) => {
        if (i === index) {
          return false
        }
        timesCopy.push(t)
      })
      setTimes(timesCopy)
    }
  }
  const handleSubmit = () => {
    let thisBegin = new Date(startDate)
    let formattedBegin =
      thisBegin.getFullYear() +
      '-' +
      ('0' + (thisBegin.getMonth() + 1)).slice(-2) +
      '-' +
      ('0' + thisBegin.getDate()).slice(-2)

    let thisEnd = new Date(endDate)
    let formattedEnd =
      thisEnd.getFullYear() +
      '-' +
      ('0' + (thisEnd.getMonth() + 1)).slice(-2) +
      '-' +
      ('0' + thisEnd.getDate()).slice(-2)
    let values = {}
    if (type === 'RECEPTION_DAYS') {
      values = {
        token,
        id: props.id,
        request: {
          title,
          regularity: type,
          reception_days: days,
          dosage,
          time_receipt: times,
          begin_date: formattedBegin,
          end_date: formattedEnd,
        },
      }
    }
    props.newAppointment(values)
    props.update()
  }

  return (
    <Container>
      <h3>Назначение лечения</h3>
      <label>Наименование препарата</label>
      <input
        type="text"
        placeholder="Медикамент 1"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label>Регулярность</label>
      <select
        defaultValue="RECEPTION_DAYS"
        onChange={(e) => setType(e.target.value)}
      >
        <option value="RECEPTION_DAYS">Дни недели</option>
        <option value="IS_EVERYDAY">Каждый день</option>
        <option value="INTERVAL_DAYS">Раз в несколько дней</option>
      </select>
      {type === 'RECEPTION_DAYS' && (
        <>
          <label>Дни приема</label>
          <Days>
            <Day active={days.includes('1')} onClick={() => filterDays('1')}>
              ПН
            </Day>
            <Day active={days.includes('2')} onClick={() => filterDays('2')}>
              ВТ
            </Day>
            <Day active={days.includes('3')} onClick={() => filterDays('3')}>
              СР
            </Day>
            <Day active={days.includes('4')} onClick={() => filterDays('4')}>
              ЧТ
            </Day>
            <Day active={days.includes('5')} onClick={() => filterDays('5')}>
              ПТ
            </Day>
            <Day active={days.includes('6')} onClick={() => filterDays('6')}>
              СБ
            </Day>
            <Day active={days.includes('7')} onClick={() => filterDays('7')}>
              ВС
            </Day>
          </Days>
        </>
      )}
      {type === 'INTERVAL_DAYS' && (
        <>
          <label>Интервал дней между приёмами</label>
          <input type="text" placeholder="2" />
        </>
      )}
      <Dozing>
        <Doze>
          <label>Дозировка</label>
          <input
            type="text"
            placeholder="4 таб. 2гр в день"
            value={dosage}
            onChange={(e) => setDosage(e.target.value)}
          />
        </Doze>
        <Time>
          <label>Время приема</label>
          <div className="inner">
            {times.map((t, index) => (
              <React.Fragment key={index}>
                <input
                  type="time"
                  placeholder="09:00"
                  value={t.time}
                  onChange={(e) => editTime(e.target.value, index)}
                />
                <img src={del} alt="Delete" onClick={() => deleteTime(index)} />
              </React.Fragment>
            ))}
            <span></span>
            <img
              src={plus}
              alt="Add"
              className="plus-btn"
              onClick={() => setTimes([...times, { time: '' }])}
            />
          </div>
        </Time>
      </Dozing>
      <Dates>
        <div className="flex">
          <div className="inner">
            <p>Дата начала</p>
            <div className="inner-flex">
              <DatePicker
                locale="ru"
                dateFormat="yyyy-MM-dd"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                selectsStart
                startDate={startDate}
                endDate={endDate}
              />
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
                selectsEnd
                startDate={startDate}
                endDate={endDate}
              />
            </div>
          </div>
        </div>
      </Dates>
      <button type="submit" onClick={() => handleSubmit()}>
        Сохранить
      </button>
    </Container>
  )
}

const Container = styled.div`
  background: #ffffff;
  box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.03);
  border-radius: 6px;
  padding: 30px;
  height: fit-content;
  select,
  input {
    width: 100%;
    height: 46px;
    background: #ffffff;
    border: 1px solid rgba(31, 32, 65, 0.25);
    box-sizing: border-box;
    border-radius: 4px;
    padding: 13px 10px;
    font-size: 16px;
    color: #000;
    margin: 10px 0 10px 0;
    outline: none;
    resize: none;
    :focus {
      border: 1px solid #57c3a7;
    }
    ::placeholder {
      color: #bdbdbd;
      font-weight: 300;
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
    cursor: pointer;
  }
  label {
    font-size: 16px;
    color: #333333;
    font-weight: 400;
    display: inline-block;
    margin-top: 15px;
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
    background: #ffffff;
    appearance: none;
  }
`
const Days = styled.div`
  display: flex;
`
const Day = styled.div`
  cursor: pointer;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin: 10px 1px;
  ${(props) =>
    props.active
      ? 'background: #57C3A7;  color: #fff;'
      : 'background: #fff; color: #57C3A7; border: 2px solid #57C3A7;'}
  :first-child {
    margin-left: 0;
  }
  :last-child {
    margin-right: 0;
  }
`
const Dozing = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 15px;
`
const Doze = styled.div``
const Time = styled.div`
  .inner {
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 20px;
    img {
      cursor: pointer;
      margin-left: 10px;
    }
    input {
      margin: 5px 0;
      :first-child {
        margin-top: 10px;
      }
    }
  }
  span {
    height: 46px;
  }
  .plus-btn {
    padding: 5px;
    border-radius: 3px;
    border: 1px solid #27ae60;
    margin-left: 3px !important;
  }
`
const Dates = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 15px;
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

const mapStateToProps = (state) => {
  return {
    newAppointmentInfo: state.newAppointmentInfo,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    newAppointment: (values) => {
      dispatch(newAppointment(values))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Appointment)
