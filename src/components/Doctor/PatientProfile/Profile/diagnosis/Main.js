import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import DatePicker from 'react-datepicker'
import edit from '../../../../../assets/editGreen.svg'
import deleteRed from '../../../../../assets/delete-red.svg'
import { connect } from 'react-redux'
import { getDiagnosList } from '../../../../../redux/actions/doctor/diagnosList'
import {
  searchDiagnos,
  newDiagnos,
} from '../../../../../redux/actions/doctor/diagnos'
import Preloader from '../../../../helpers/Preloader'

const Main = (props) => {
  const [startDate, setStartDate] = useState(window.Date.now())

  let token = localStorage.getItem('token')
  useEffect(() => {
    props.getDiagnosList({
      id: props.id,
      token,
    })
  }, [])

  const [searchMain, setSearchMain] = useState({ id: '', text: '' })
  const [mainDdOpen, setMainDdOpen] = useState(false)
  const [commentMain, setCommentMain] = useState('')
  const [mainError, setMainError] = useState('')
  const isFirstRun = useRef(true)
  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false
      return
    }
    props.searchDiagnos(searchMain.text)
  }, [searchMain])
  const handleSubmitMain = () => {
    let thistime = new Date(startDate)
    let formattedDate =
      thistime.getFullYear() +
      '-' +
      ('0' + (thistime.getMonth() + 1)).slice(-2) +
      '-' +
      ('0' + thistime.getDate()).slice(-2)

    if (searchMain.id === '' && searchMain.text !== '') {
      setMainError('Выберите название диагноза со списка')
      return
    }
    if (searchMain.text === '') {
      setMainError('Напишите диагноз')
      return
    }
    if (commentMain === '') {
      setMainError('Напишите комментарии к диагнозу')
      return
    }
    let request = {
      disease_id: searchMain.id,
      begin_date: formattedDate,
      category_id: 1,
      comment: commentMain,
    }
    props.newDiagnos({
      id: props.id,
      token,
      request,
    })
    setSearchMain({ id: '', text: '' })
    setCommentMain('')
    setMainError('')
    props.getDiagnosList({
      id: props.id,
      token,
    })
  }

  const useOutsideAlerter = (ref) => {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setMainDdOpen(false)
        }
      }

      // Bind the event listener
      document.addEventListener('mousedown', handleClickOutside)
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }, [ref])
  }
  const wrapperRef = useRef(null)
  useOutsideAlerter(wrapperRef)

  return (
    <div>
      <H3>Основной диагноз</H3>
      <NewDiagnosis>
        <div className="grid">
          <div>
            <label>Название</label>
            <Dropdown
              visible={searchMain !== '' && mainDdOpen}
              ref={wrapperRef}
            >
              <input
                type="text"
                placeholder="Список МКБ-10"
                value={searchMain.text}
                onChange={(e) => {
                  setSearchMain({ id: '', text: e.target.value })
                  setMainDdOpen(true)
                }}
              />
              <div className="dd-menu">
                {props.diagnosSearch.info.results &&
                  props.diagnosSearch.info.results.map((d) => (
                    <li
                      key={d.id}
                      onClick={() => {
                        setSearchMain({ id: d.id, text: d.name })
                        setMainDdOpen(false)
                      }}
                    >
                      {d.name}
                    </li>
                  ))}
              </div>
            </Dropdown>
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
        </div>
        <textarea
          placeholder="Комментарий"
          value={commentMain}
          onChange={(e) => setCommentMain(e.target.value)}
        ></textarea>
        {mainError && <div className="field-error">{mainError}</div>}
        <button type="submit" onClick={() => handleSubmitMain()}>
          Добавить
        </button>
      </NewDiagnosis>
      {props.diagnosList.status !== 'success' ? (
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
            {props.diagnosList.info.results.map((result) => {
              if (result.category === 'Основной диагноз')
                return (
                  <tr key={result.id}>
                    <td>{result.disease}</td>
                    <td>{result.begin_date}</td>
                    <td>
                      <img src={edit} alt="Edit" />
                      <img src={deleteRed} alt="Delete" />
                    </td>
                  </tr>
                )
            })}
          </tbody>
        </Table>
      )}
    </div>
  )
}

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
    max-height: 300px;
    overflow-y: auto;
    ::-webkit-scrollbar {
      width: 4px;
    }
    ::-webkit-scrollbar-track {
      background: #c5c5c5;
    }
    ::-webkit-scrollbar-thumb {
      background: #57c3a7;
      border-radius: 2px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #458f7c;
    }
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

const mapStateToProps = (state) => {
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

export default connect(mapStateToProps, mapDispatchToProps)(Main)
