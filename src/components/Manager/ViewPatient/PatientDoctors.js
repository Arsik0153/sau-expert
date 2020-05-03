import React, { useState } from 'react'
import styled from 'styled-components'
import close from './../../../assets/close.svg'
import event from './../../../assets/event.svg'
import DatePicker from 'react-datepicker'

const PatientDoctors = ({ closeModal }) => {
  const handleSubmit = (values) => {
    console.log(values)
    alert('Submit')
  }
  let now = new window.Date()
  const [startDate, setStartDate] = useState(now - 10 * 24 * 60 * 60 * 1000)
  const [endDate, setEndDate] = useState(now)

  return (
    <Box>
      <H2>Врачи пользователя</H2>
      <Close src={close} alt="Close" onClick={() => closeModal()} />
      <H3>Иванов Иван Иванович</H3>
      <H5>Текущие врачи пациента</H5>
      <Table>
        <tr>
          <td>Иванов И.И.</td>
          <td>кардиолог</td>
        </tr>
        <tr>
          <td>Сидоров П.М.</td>
          <td>терапевт</td>
        </tr>
      </Table>
      <H5>Прикрепить к новому врачу</H5>
      <div className="flex">
        <select>
          <option value="">Петров А.А. (кардиолог)</option>
        </select>
        <Plus>
          <p>+</p>
        </Plus>
      </div>
      <button type="submit">Сохранить</button>
    </Box>
  )
}
const Box = styled.div`
  border-radius: 4px;
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
  .flex {
    display: flex;
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
const Table = styled.table`
  width: 100%;
  tr {
    display: flex;
    justify-content: space-between;
    padding: 12px 0px;
    font-size: 16px;
    color: #202020;
    border-bottom: 1px solid rgba(31, 32, 65, 0.1);
    p {
      text-decoration: underline;
      color: #57c3a7;
      cursor: pointer;
    }
  }
`
const Plus = styled.button`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  background: #57c3a7;
  border: none;
  border-radius: 10px;
  p {
    font-weight: 500;
    font-size: 30px;
    margin-top: -3px;
  }
`

export default PatientDoctors
