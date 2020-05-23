import React, { useState } from 'react'
import styled from 'styled-components'
import del from './../../../../../assets/delete-red.svg'
import plus from './../../../../../assets/plus-green.svg'
import DatePicker from 'react-datepicker'

const Appointment = () => {
  const [startDate, setStartDate] = useState(
    window.Date.now() - 10 * 24 * 60 * 60 * 1000
  )
  const [type, setType] = useState('1')
  const [radio, setRadio] = useState('1')
  return (
    <Container>
      <h3>Замер показателей</h3>
      <p>
        <input
          type="radio"
          id="test1"
          name="radio-group"
          value="1"
          checked={radio === '1'}
          onChange={(e) => setRadio(e.target.value)}
        />
        <label htmlFor="test1">Выбрать показатель из списка</label>
      </p>
      <p>
        <input
          type="radio"
          id="test2"
          name="radio-group"
          value="2"
          checked={radio === '2'}
          onChange={(e) => setRadio(e.target.value)}
        />
        <label htmlFor="test2">Добавить новый показатель</label>
      </p>
      <label>Наименование показателя</label>
      <input type="text" placeholder="Вес" />
      <label>Регулярность</label>
      <select defaultValue="1" onChange={(e) => setType(e.target.value)}>
        <option value="1">Дни недели</option>
        <option value="2">Каждый день</option>
        <option value="3">Раз в несколько дней</option>
      </select>
      {type === '1' && (
        <>
          <label>Дни приема</label>
          <Days>
            <Day active={true}>ПН</Day>
            <Day>ВТ</Day>
            <Day active={true}>СР</Day>
            <Day>ЧТ</Day>
            <Day active={true}>ПТ</Day>
            <Day>СБ</Day>
            <Day>ВС</Day>
          </Days>
        </>
      )}
      {type === '3' && (
        <>
          <label>Интервал дней между приёмами</label>
          <input type="text" placeholder="2" />
        </>
      )}
      <Dozing>
        <Doze>
          <label>Время замера</label>
          <DatePicker
            locale="ru"
            dateFormat="yyyy-MM-dd"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            selectsStart
          />
        </Doze>
        <Time>
          <label>Время приема</label>
          <div className="inner">
            <input type="text" placeholder="09:00" />
            <img src={del} alt="Delete" />
            <input type="text" placeholder="09:00" />
            <img src={del} alt="Delete" />
            <input type="text" placeholder="09:00" />
            <img src={del} alt="Delete" />
            <span></span>
            <img src={plus} alt="Add" className="plus-btn" />
          </div>
        </Time>
      </Dozing>

      <button type="submit">Сохранить</button>
    </Container>
  )
}

const Container = styled.div`
  background: #ffffff;
  box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.03);
  border-radius: 6px;
  padding: 30px;
  select,
  input {
    width: 100%;
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
  [type='radio']:checked,
  [type='radio']:not(:checked) {
    position: absolute;
    left: -9999px;
  }
  [type='radio']:checked + label,
  [type='radio']:not(:checked) + label {
    position: relative;
    padding-left: 28px;
    cursor: pointer;
    line-height: 20px;
    display: inline-block;
    color: #686868;
    font-size: 16px;
  }
  [type='radio']:checked + label:before,
  [type='radio']:not(:checked) + label:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 18px;
    height: 18px;
    border: 1px solid #57c3a7;
    border-radius: 100%;
    background: #fff;
  }
  [type='radio']:checked + label:after,
  [type='radio']:not(:checked) + label:after {
    content: '';
    width: 12px;
    height: 12px;
    background: #57c3a7;
    position: absolute;
    top: 4px;
    left: 4px;
    border-radius: 100%;
    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;
  }
  [type='radio']:not(:checked) + label:after {
    opacity: 0;
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  [type='radio']:checked + label:after {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
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

export default Appointment
