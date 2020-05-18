import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import DatePicker from 'react-datepicker'
import { connect } from 'react-redux'
import { newHeart, getHeart } from '../../../../../redux/actions/doctor/heart'
import { getDiagnosList } from '../../../../../redux/actions/doctor/diagnosList'
import { searchDiagnos } from '../../../../../redux/actions/doctor/diagnos'
import Preloader from '../../../../helpers/Preloader'
import Criticals from './Criticals'

const Check1 = (props) => {
  let token = localStorage.getItem('token')
  useEffect(() => {
    props.getDiagnosList({
      id: props.id,
      token,
    })
    props.getHeart({
      id: props.id,
      token,
    })
  }, [])
  useEffect(() => {
    if (props.getHeartInfo.status === 'success') {
      let info = props.getHeartInfo.info
      props.setSearchMain({ id: info.disease_id, text: info.disease })
      props.setStartDate(new Date(info.begin_date))
      props.setPills(info.tablets)
      props.setCholseterol(info.cholesterol)
      props.setVeryHighDbp(info.very_high_dbp)
      props.setVeryHighSbp(info.very_high_sbp)
      props.setVeryHighPulse(info.very_high_pulse)
      props.setHighDbp(info.high_dbp)
      props.setHighSbp(info.high_sbp)
      props.setHighPulse(info.high_pulse)
      props.setLowDbp(info.low_dbp)
      props.setLowSbp(info.high_sbp)
      props.setLowPulse(info.high_pulse)
      props.setVeryLowDbp(info.very_low_dbp)
      props.setVeryLowSbp(info.very_low_sbp)
      props.setVeryLowPulse(info.very_low_pulse)
    }
  }, [props.getHeartInfo.status])

  const [mainDdOpen, setMainDdOpen] = useState(false)

  const [mainError, setMainError] = useState('')
  const isFirstRun = useRef(true)
  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false
      return
    }
    props.searchDiagnos(props.searchMain.text)
  }, [props.searchMain])

  const handleSubmit = () => {
    let thistime = new Date(props.startDate)
    let formattedDate =
      thistime.getFullYear() +
      '-' +
      ('0' + (thistime.getMonth() + 1)).slice(-2) +
      '-' +
      ('0' + thistime.getDate()).slice(-2)

    if (props.searchMain.id === '' && props.searchMain.text !== '') {
      setMainError('Выберите название диагноза со списка')
      return
    }
    if (props.searchMain.text === '') {
      setMainError('Напишите диагноз')
      return
    }
    if (props.pills === '') {
      setMainError('Напишите комментарии к таблеткам')
      return
    }
    if (props.cholesterol === '') {
      setMainError('Напишите комментарии к холестерину')
      return
    }
    let values = {
      id: props.id,
      token,
      request: {
        disease: props.searchMain.id,
        begin_date: formattedDate,
        category_id: 1,
        tablets: props.pills,
        cholesterol: props.cholesterol,
        very_high_dbp: props.very_high_dbp,
        very_high_sbp: props.very_high_sbp,
        very_high_pulse: props.very_high_pulse,
        high_dbp: props.high_dbp,
        high_sbp: props.high_sbp,
        high_pulse: props.high_pulse,
        low_dbp: props.low_dbp,
        low_sbp: props.low_sbp,
        low_pulse: props.low_pulse,
        very_low_dbp: props.very_low_dbp,
        very_low_sbp: props.very_low_sbp,
        very_low_pulse: props.very_low_pulse,
      },
    }
    console.log(values)
    props.newHeart(values)
    setMainError('')
  }

  const update = () => {
    setTimeout(() => {
      props.getHeart({
        id: props.id,
        token,
      })
    }, 150)
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
    <Box>
      {props.getHeartInfo.status !== 'success' ? (
        <div className="preloader-container">
          <Preloader />
        </div>
      ) : (
        <>
          <H3>Заболевание</H3>
          <div className="grid">
            <div>
              <label>Название</label>
              <Dropdown
                visible={props.searchMain !== '' && mainDdOpen}
                ref={wrapperRef}
              >
                <input
                  type="text"
                  placeholder="Список МКБ-10"
                  value={props.searchMain.text}
                  onChange={(e) => {
                    props.setSearchMain({ id: '', text: e.target.value })
                    setMainDdOpen(true)
                  }}
                />
                <div className="dd-menu">
                  {props.diagnosSearch.info.results &&
                    props.diagnosSearch.info.results.map((d) => (
                      <li
                        key={d.id}
                        onClick={() => {
                          props.setSearchMain({ id: d.id, text: d.name })
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
                selected={props.startDate}
                onChange={(date) => props.setStartDate(date)}
              />
            </div>
          </div>
          <H4>Дополнительная информация</H4>
          <label>Таблетки</label>
          <textarea
            placeholder="Комментарии"
            value={props.pills}
            onChange={(e) => props.setPills(e.target.value)}
          ></textarea>
          <label>Холестерин</label>
          <textarea
            placeholder="Комментарии"
            value={props.cholesterol}
            onChange={(e) => props.setCholseterol(e.target.value)}
          ></textarea>
          {mainError && <div className="field-error">{mainError}</div>}
          <button type="submit" onClick={() => handleSubmit()}>
            Сохранить
          </button>
          <Criticals
            id={props.id}
            info={props.getHeartInfo.info.critical_cases}
            update={update}
          />
        </>
      )}
    </Box>
  )
}
const Box = styled.div`
  background: #ffffff;
  border-radius: 5px;
  padding: 30px;
  strong {
    font-weight: 600;
    font-size: 16px;
    color: #333333;
  }
  p {
    font-size: 16px;
    color: #202020;
  }
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
    height: 100px;
  }
`
const H3 = styled.h3`
  font-weight: 600;
  font-size: 24px;
  color: #202020;
`
const Check = styled.div`
  margin: 10px 0;
  div {
    padding: 17px 0;
    display: flex;
    justify-content: space-between;
    p {
      font-size: 16px;
      color: #333333;
    }
    :first-child {
      border-bottom: 1px solid rgba(31, 32, 65, 0.25);
    }
  }
`
const H4 = styled.h4`
  font-weight: bold;
  font-size: 16px;
  color: #333333;
  margin-top: 15px;
  padding: 20px 0;
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
    newHeartInfo: state.newHeartInfo,
    getHeartInfo: state.getHeartInfo,
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
    newHeart: (values) => {
      dispatch(newHeart(values))
    },
    getHeart: (values) => {
      dispatch(getHeart(values))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Check1)
