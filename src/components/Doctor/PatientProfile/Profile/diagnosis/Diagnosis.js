import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import DatePicker from 'react-datepicker'
import edit from '../../../../../assets/editGreen.svg'
import deleteRed from '../../../../../assets/delete-red.svg'
import { connect } from 'react-redux'
import Main from './Main'
import Extra from './Extra'

const Diagnosis = (props) => {
  return (
    <Container>
      <Main id={props.id} />
      <Extra id={props.id} />
    </Container>
  )
}

const Container = styled.div`
  margin: 30px 50px 30px 50px;
  background: #ffffff;
  border-radius: 5px;
  padding: 30px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
  .preloader-container {
    height: 200px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    grid-area: main;
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
const NewDiagnosis = styled.div`
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
    grid-template-columns: 2fr 1fr;
    grid-gap: 30px;
  }
  textarea {
    height: 70px;
  }
`
const Dropdown = styled.div`
  position: relative;
  .dd-menu {
    ${(props) => !props.visible && 'display: none;'}
    position: absolute;
    top: 55px;
    width: 100%;
    background: #fff;
    box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(0, 0, 0, 0.18);
    li {
      cursor: pointer;
      width: 100%;
      padding: 12px 15px;
      border-top: 1px solid rgba(0, 0, 0, 0.18);
      :hover {
        background: #bdbdbd4f;
      }
    }
  }
`

/*const mapStateToProps = (state) => {
  return {
    diagnosList: state.diagnosList,
    diagnosSearch: state.diagnosSearch,
    newDiagnosInfo: state.newDiagnosInfo,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getDiagnosList: (values) => {
      dispatch(getDiagnosList(values))
    },
    searchDiagnos: (values) => {
      dispatch(searchDiagnos(values))
    },
    newDiagnos: (values) => {
      dispatch(newDiagnos(values))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Diagnosis)
*/
export default Diagnosis
