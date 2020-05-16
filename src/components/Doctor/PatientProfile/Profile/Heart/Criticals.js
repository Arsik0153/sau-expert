import React, { useState } from 'react'
import styled from 'styled-components'
import DatePicker from 'react-datepicker'

const Criticals = (props) => {
  const [startDate, setStartDate] = useState(window.Date.now())
  return (
    <Container>
      <H4>Критические случаи</H4>
      <div className="grid">
        <div>
          <label>Название</label>
          <input type="text" placeholder="Описание случая" />
        </div>
        <div>
          <label>Дата начала</label>
          <DatePicker
            locale="ru"
            dateFormat="yyyy-MM-dd"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
        </div>
        <Plus>+</Plus>
      </div>
      <Table>
        <tbody>
          <tr>
            <td>Критический случай</td>
            <td>Дата</td>
          </tr>
          <tr>
            <td>Случай 2</td>
            <td>23.01.19</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  )
}

const Container = styled.div`
  select,
  input,
  textarea {
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
    grid-template-columns: 3fr 2fr 46px !important;
  }
  textarea {
    height: 100px;
  }
`
const H4 = styled.h4`
  font-weight: bold;
  font-size: 16px;
  color: #333333;
  margin-top: 15px;
  padding: 20px 0;
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

export default Criticals
