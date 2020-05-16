import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import DatePicker from 'react-datepicker'
import { connect } from 'react-redux'
import {
  newSchedule,
  getSchedule,
} from '../../../../../redux/actions/doctor/schedule'
import Preloader from './../../../../helpers/Preloader'
import deleteRed from '../../../../../assets/delete-red.svg'
import editGreen from '../../../../../assets/editGreen.svg'

const Food = (props) => {
  let token = localStorage.getItem('token')
  const [time, setTime] = useState('')
  const [name, setName] = useState('')
  const handleSubmit = () => {
    let values = {
      id: props.id,
      token,
      request: {
        category: 1,
        title: name,
        time,
      },
    }
    props.newSchedule(values)
    setTimeout(() => {
      props.getSchedule({
        id: props.id,
        token,
      })
    }, 100)
  }

  useEffect(() => {
    props.getSchedule({
      id: props.id,
      token,
    })
  }, [])
  return (
    <Container>
      <H3>Прием пищи</H3>
      <div className="grid">
        <div>
          <label>Прием пищи</label>
          <input
            type="text"
            placeholder="Завтрак"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Время</label>
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            placeholder="09:00"
          />
        </div>
        <Plus onClick={() => handleSubmit()}>+</Plus>
      </div>
      {props.getScheduleInfo.status !== 'success' ? (
        <div className="preloader-container">
          <Preloader />
        </div>
      ) : (
        <Table>
          <tbody>
            <tr>
              <td>Название</td>
              <td>Дата начала</td>
              <td></td>
            </tr>
            {props.getScheduleInfo.info.map(
              (res) =>
                res.category === 1 && (
                  <tr key={res.id}>
                    <td>{res.title}</td>
                    <td>{res.time}</td>
                    <td style={{ width: '55px' }}>
                      <img src={editGreen} alt="Edit" />
                      <img src={deleteRed} alt="Delete" />
                    </td>
                  </tr>
                )
            )}
          </tbody>
        </Table>
      )}
    </Container>
  )
}

const Container = styled.div`
  select,
  input,
  textarea {
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
    padding: 15px 0;
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
  .grid {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: 3fr 2fr 46px !important;
  }
`
const H3 = styled.h3`
  font-weight: 600;
  font-size: 24px;
  color: #202020;
`
const Table = styled.table`
  width: 100%;
  margin-top: 20px;
  border-collapse: collapse;
  tr {
    padding: 17px 0 17px 0;
    font-size: 16px;
    color: #202020;
    border-bottom: 2px solid rgba(31, 32, 65, 0.1);
    p {
      color: #57c3a7;
    }
    a {
      text-decoration-line: underline;
      color: #57c3a7;
    }
    :first-child {
      font-weight: 600;
    }
    :last-child {
      border-bottom: none;
    }
    td {
      padding: 14px 0;
      max-width: 300px;
      img {
        margin: 0 7px;
        cursor: pointer;
      }
    }
  }
`
const Plus = styled.button`
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #57c3a7;
  border-radius: 10px;
  height: 46px;
  align-self: end;
  margin-bottom: 10px;
  font-weight: 500;
  font-size: 36px;
  color: #ffffff;
  padding-bottom: 20px;
  cursor: pointer;
`

const mapStateToProps = (state) => {
  return {
    newScheduleInfo: state.newScheduleInfo,
    getScheduleInfo: state.getScheduleInfo,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    newSchedule: (values) => {
      dispatch(newSchedule(values))
    },
    getSchedule: (values) => {
      dispatch(getSchedule(values))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Food)
