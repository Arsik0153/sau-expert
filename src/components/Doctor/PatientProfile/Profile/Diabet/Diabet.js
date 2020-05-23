import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import DatePicker from 'react-datepicker'
import { connect } from 'react-redux'
import {
  getDiabet,
  setDiabet,
} from '../../../../../redux/actions/doctor/diabet'
import Preloader from '../../../../helpers/Preloader'

const Diabet = (props) => {
  let token = localStorage.getItem('token')
  const [title, setTitle] = useState('')
  const [startDate, setStartDate] = useState(window.Date.now())

  const [fastInsulin, setFastInsulin] = useState(false)
  const [fastInsulinTitle, setFastInsulinTitle] = useState('')
  const [fastInsulinBegin, setFastInsulinBegin] = useState(window.Date.now())

  const [bazalInsulin, setBazalInsulin] = useState(false)
  const [bazalInsulinTitle, setBazalInsulinTitle] = useState('')
  const [bazalInsulinBegin, setBazalInsulinBegin] = useState(window.Date.now())
  const [tablets, setTablets] = useState(false)
  const [checking_blood_glucose, setCheckingBloodGlucose] = useState(false)
  const [blood_ketone_test, setBloodKetoneTest] = useState(false)
  const [pump_use, setPumpUse] = useState(false)
  const [glycated_hemoglobin, setGlycatedHemoglobin] = useState(false)

  const [very_high_range_glucose, setVeryHighRangeGlucose] = useState('')
  const [high_range_glucose, setHighRangeGlucose] = useState('')
  const [low_range_glucose, setLowRangeGlucose] = useState('')
  const [very_low_range_glucose, setVeryLowRangeGlucose] = useState('')

  const formatDate = (date) => {
    let thistime = new Date(date)
    return (
      thistime.getFullYear() +
      '-' +
      ('0' + (thistime.getMonth() + 1)).slice(-2) +
      '-' +
      ('0' + thistime.getDate()).slice(-2)
    )
  }

  const handleSubmit = () => {
    let values = {
      id: props.id,
      token,
      request: {
        title,
        begin_date: formatDate(startDate),
        using_fast_acting_insulin: {
          is_active: fastInsulin,
          title: fastInsulinTitle,
          begin_date: formatDate(fastInsulinBegin),
        },
        use_basal_insulin: {
          is_active: bazalInsulin,
          title: bazalInsulinTitle,
          begin_date: formatDate(bazalInsulinBegin),
        },
        tablets,
        checking_blood_glucose,
        blood_ketone_test,
        pump_use,
        glycated_hemoglobin,
        very_high_range_glucose,
        high_range_glucose,
        low_range_glucose,
        very_low_range_glucose,
      },
    }
    setTimeout(() => {
      props.setDiabet(values)
    }, 200)
  }

  useEffect(() => {
    props.getDiabet({ id: props.id, token })
  }, [])
  useEffect(() => {
    let info = props.getDiabetInfo.info
    if (props.getDiabetInfo.status === 'success') {
      setTitle(info.title)
      setStartDate(new Date(info.begin_date))
      setFastInsulin(info.using_fast_acting_insulin.is_active)
      setFastInsulinTitle(info.using_fast_acting_insulin.title)
      setFastInsulinBegin(new Date(info.using_fast_acting_insulin.begin_date))

      setBazalInsulin(info.use_basal_insulin.is_active)
      setBazalInsulinTitle(info.use_basal_insulin.title)
      setBazalInsulinBegin(new Date(info.use_basal_insulin.begin_date))
      setTablets(info.tablets)
      setCheckingBloodGlucose(info.checking_blood_glucose)
      setBloodKetoneTest(info.blood_ketone_test)
      setPumpUse(info.pump_use)
      setGlycatedHemoglobin(info.glycated_hemoglobin)

      setVeryHighRangeGlucose(info.very_high_range_glucose)
      setHighRangeGlucose(info.high_range_glucose)
      setLowRangeGlucose(info.low_range_glucose)
      setVeryLowRangeGlucose(info.very_low_range_glucose)
    }
  }, [props.getDiabetInfo.status])

  return (
    <Container>
      {props.setDiabetInfo.status === 'pending' ||
      props.getDiabetInfo.status === 'pending' ? (
        <div className="preloader-container">
          <Preloader />
        </div>
      ) : (
        <>
          <Box>
            <H3>Тип диабета</H3>
            <div className="grid">
              <div>
                <label>Название</label>
                <input
                  type="text"
                  placeholder="Сахарный диабет"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
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
            <H4>Дополнительная информация</H4>
            <div className="grid2">
              <p>Использование быстродействующего инсулина</p>
              <div>
                <Checkbox
                  className="styled-checkbox"
                  id="fast-insulin"
                  type="checkbox"
                  checked={fastInsulin}
                  onChange={() => setFastInsulin(!fastInsulin)}
                />
                <label htmlFor="fast-insulin"></label>
              </div>
            </div>

            <div className="grid">
              <div>
                <label>Название</label>
                <input
                  type="text"
                  placeholder="Сахарный диабет"
                  value={fastInsulinTitle}
                  onChange={(e) => setFastInsulinTitle(e.target.value)}
                />
              </div>
              <div>
                <label>Количество</label>
                <DatePicker
                  locale="ru"
                  dateFormat="yyyy-MM-dd"
                  selected={fastInsulinBegin}
                  onChange={(date) => setFastInsulinBegin(date)}
                />
              </div>
            </div>

            <div className="grid2" style={{ marginTop: '20px' }}>
              <p>Использование базального инсулина</p>
              <div>
                <Checkbox
                  className="styled-checkbox"
                  id="bazal-insulin"
                  type="checkbox"
                  checked={bazalInsulin}
                  onChange={() => setBazalInsulin(!bazalInsulin)}
                />
                <label htmlFor="bazal-insulin"></label>
              </div>
            </div>
            <div className="grid">
              <div>
                <label>Название</label>
                <input
                  type="text"
                  placeholder="Сахарный диабет"
                  value={bazalInsulinTitle}
                  onChange={(e) => setBazalInsulinTitle(e.target.value)}
                />
              </div>
              <div>
                <label>Количество</label>
                <DatePicker
                  locale="ru"
                  dateFormat="yyyy-MM-dd"
                  selected={bazalInsulinBegin}
                  onChange={(date) => setBazalInsulinBegin(date)}
                />
              </div>
            </div>

            <div className="grid2" style={{ marginTop: '20px' }}>
              <p>Таблетки</p>
              <div>
                <Checkbox
                  className="styled-checkbox"
                  id="tablets"
                  type="checkbox"
                  checked={tablets}
                  onChange={() => setTablets(!tablets)}
                />
                <label htmlFor="tablets"></label>
              </div>
            </div>
            <div className="grid2" style={{ marginTop: '20px' }}>
              <p>Проверка уровня глюкозы в крови</p>
              <div>
                <Checkbox
                  className="styled-checkbox"
                  id="checking_blood_glucose"
                  type="checkbox"
                  checked={checking_blood_glucose}
                  onChange={() =>
                    setCheckingBloodGlucose(!checking_blood_glucose)
                  }
                />
                <label htmlFor="checking_blood_glucose"></label>
              </div>
            </div>
            <div className="grid2" style={{ marginTop: '20px' }}>
              <p>Проверка кетонов в крови</p>
              <div>
                <Checkbox
                  className="styled-checkbox"
                  id="blood_ketone_test"
                  type="checkbox"
                  checked={blood_ketone_test}
                  onChange={() => setBloodKetoneTest(!blood_ketone_test)}
                />
                <label htmlFor="blood_ketone_test"></label>
              </div>
            </div>
            <div className="grid2" style={{ marginTop: '20px' }}>
              <p>Использование помпы</p>
              <div>
                <Checkbox
                  className="styled-checkbox"
                  id="pump_use"
                  type="checkbox"
                  checked={pump_use}
                  onChange={() => setPumpUse(!pump_use)}
                />
                <label htmlFor="pump_use"></label>
              </div>
            </div>
            <div className="grid2" style={{ marginTop: '20px' }}>
              <p>Гликированный гемаглобин</p>
              <div>
                <Checkbox
                  className="styled-checkbox"
                  id="glycated_hemoglobin"
                  type="checkbox"
                  checked={glycated_hemoglobin}
                  onChange={() => setGlycatedHemoglobin(!glycated_hemoglobin)}
                />
                <label htmlFor="glycated_hemoglobin"></label>
              </div>
            </div>
            <button type="submit" onClick={() => handleSubmit()}>
              Сохранить
            </button>
          </Box>
          <Box>
            <H3>Диапазоны глюкозы</H3>
            <Gradient>
              <div className="top">
                <p>Очень низко</p>
                <p>Низко</p>
                <p>В пределах нормы</p>
                <p>Высоко</p>
                <p>Очень высоко</p>
              </div>
              <div className="mid"></div>
              <div className="bottom">
                <input
                  type="text"
                  value={very_low_range_glucose}
                  onChange={(e) => setVeryLowRangeGlucose(e.target.value)}
                />
                <input
                  type="text"
                  value={low_range_glucose}
                  onChange={(e) => setLowRangeGlucose(e.target.value)}
                />
                <p></p>
                <input
                  type="text"
                  value={high_range_glucose}
                  onChange={(e) => setHighRangeGlucose(e.target.value)}
                />
                <input
                  type="text"
                  value={very_high_range_glucose}
                  onChange={(e) => setVeryHighRangeGlucose(e.target.value)}
                />
              </div>
            </Gradient>
          </Box>
        </>
      )}
    </Container>
  )
}

const Container = styled.div`
  margin: 30px 50px 30px 50px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
`
const Box = styled.div`
  background: #ffffff;
  border-radius: 5px;
  padding: 30px;
  height: fit-content;
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
  .grid2 {
    display: grid;
    grid-template-columns: 5fr 1fr;
    grid-gap: 15px;
  }
  textarea {
    height: 100px;
  }
  :last-child {
    input {
      width: 45px;
      height: 45px;
      color: #bdbdbd;
    }
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
const Gradient = styled.div`
  margin: 30px 0;
  .top {
    display: flex;
    justify-content: space-between;
    p {
      font-size: 11px;
      color: #333333;
    }
  }
  .mid {
    background: linear-gradient(
      90deg,
      #ff0000 0%,
      #ff8a00 26.04%,
      #52ff00 49.52%,
      #ff8a01 72.84%,
      #ff0000 100%
    );
    border-radius: 3px;
    height: 8px;
    width: 100%;
    margin: 10px 0;
  }
  .bottom {
    display: flex;
    justify-content: space-between;
    p {
      font-size: 16px;
      color: #333333;
    }
  }
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

const mapStateToProps = (state) => {
  return {
    getDiabetInfo: state.getDiabetInfo,
    setDiabetInfo: state.setDiabetInfo,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getDiabet: (values) => {
      dispatch(getDiabet(values))
    },
    setDiabet: (values) => {
      dispatch(setDiabet(values))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Diabet)
