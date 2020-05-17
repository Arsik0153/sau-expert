import React from 'react'
import styled from 'styled-components'
import edit from './../../../../../assets/edit.svg'

const Table = () => {
  return (
    <Container>
      <H1>История назначений</H1>
      <Sheet>
        <thead>
          <tr>
            <td>Название</td>
            <td>Назначено</td>
            <td>Загружено</td>
            <td>Проверено</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Медикамент 1</td>
            <td>4 таб. 2гр в день</td>
            <td>14.09.19</td>
            <td>
              <Checkbox
                className="styled-checkbox"
                id="123"
                type="checkbox"
                value="value1"
                //onChange={(e) => changeCorrect(id, index, e)}
              />
              <label htmlFor="123"></label>
            </td>
            <td>
              <img src={edit} alt="Edit" />
            </td>
          </tr>
          <tr>
            <td>Медикамент 1</td>
            <td>4 таб. 2гр в день</td>
            <td>14.09.19</td>
            <td>
              <Checkbox
                className="styled-checkbox"
                id="1233"
                type="checkbox"
                //onChange={(e) => changeCorrect(id, index, e)}
              />
              <label htmlFor="1233"></label>
            </td>
            <td>
              <img src={edit} alt="Edit" />
            </td>
          </tr>
          <tr>
            <td>Медикамент 1</td>
            <td>4 таб. 2гр в день</td>
            <td>14.09.19</td>
            <td>
              <Checkbox
                className="styled-checkbox"
                id="1235"
                type="checkbox"
                value="value1"
                //onChange={(e) => changeCorrect(id, index, e)}
              />
              <label htmlFor="1235"></label>
            </td>
            <td>
              <img src={edit} alt="Edit" />
            </td>
          </tr>
        </tbody>
      </Sheet>
    </Container>
  )
}

const Container = styled.div`
  height: fit-content;
`
const Sheet = styled.table`
  width: 100%;
  border-collapse: collapse;
  thead {
    margin-bottom: 30px;
    td {
      font-weight: bold;
      font-size: 14px;
      color: #686868;
      padding: 20px 0 20px 0;
    }
  }
  tbody {
    tr {
      border-bottom: 1px solid rgba(209, 216, 245, 0.6);
      width: 100%;
      img {
      }
      p {
        margin-top: 17px;
        font-weight: 600;
      }
      td {
        padding: 14px 0;
        font-size: 14px;
        color: #686868;
      }
    }
  }
`

const H1 = styled.h1`
  font-weight: 600;
  font-size: 24px;
  color: #202020;
  margin-bottom: 15px;
`
const Checkbox = styled.input`
  position: absolute;
  width: 0 !important;
  opacity: 0;
  + label {
    margin-top: 0 !important;
    margin-left: 20px;
    position: relative;
    cursor: pointer;
    padding: 0;
    width: fit-content;
    height: fit-content;
  }
  + label:before {
    content: '';
    display: inline-block;
    vertical-align: text-top;
    width: 20px;
    height: 20px;
    background: white;
    border-radius: 4px;
    border: 2px solid #57c3a7;
  }
  :disabled + label {
    color: #b8b8b8;
    cursor: auto;
  }
  :disabled + label:before {
    box-shadow: none;
    background: #ddd;
  }
  :checked + label:after {
    content: '';
    position: absolute;
    left: 6px;
    top: 7px;
    background: white;
    width: 11px;
    height: 5px;
    border-left: 2px solid #57c3a7;
    border-bottom: 2px solid #57c3a7;
    transform: rotate(-45deg);
  }
`

export default Table
