import React, { useState } from 'react'
import styled from 'styled-components'
import Check from './Check'

const Heart = (props) => {
  const [startDate, setStartDate] = useState(window.Date.now())
  const [searchMain, setSearchMain] = useState({ id: '', text: '' })
  const [pills, setPills] = useState('')
  const [cholesterol, setCholseterol] = useState('')

  const [very_high_dbp, setVeryHighDbp] = useState('')
  const [very_high_sbp, setVeryHighSbp] = useState('')
  const [very_high_pulse, setVeryHighPulse] = useState('')
  const [high_dbp, setHighDbp] = useState('')
  const [high_sbp, setHighSbp] = useState('')
  const [high_pulse, setHighPulse] = useState('')
  const [low_dbp, setLowDbp] = useState('')
  const [low_sbp, setLowSbp] = useState('')
  const [low_pulse, setLowPulse] = useState('')
  const [very_low_dbp, setVeryLowDbp] = useState('')
  const [very_low_sbp, setVeryLowSbp] = useState('')
  const [very_low_pulse, setVeryLowPulse] = useState('')

  return (
    <Container>
      <Check
        id={props.id}
        startDate={startDate}
        setStartDate={setStartDate}
        searchMain={searchMain}
        setSearchMain={setSearchMain}
        pills={pills}
        setPills={setPills}
        cholesterol={cholesterol}
        setCholseterol={setCholseterol}
        very_high_dbp={very_high_dbp}
        setVeryHighDbp={setVeryHighDbp}
        very_high_sbp={very_high_sbp}
        setVeryHighSbp={setVeryHighSbp}
        very_high_pulse={very_high_pulse}
        setVeryHighPulse={setVeryHighPulse}
        high_dbp={high_dbp}
        setHighDbp={setHighDbp}
        high_sbp={high_sbp}
        setHighSbp={setHighSbp}
        high_pulse={high_pulse}
        setHighPulse={setHighPulse}
        low_dbp={low_dbp}
        setLowDbp={setLowDbp}
        low_sbp={low_sbp}
        setLowSbp={setLowSbp}
        low_pulse={low_pulse}
        setLowPulse={setLowPulse}
        very_low_dbp={very_low_dbp}
        setVeryLowDbp={setVeryLowDbp}
        very_low_sbp={very_low_sbp}
        setVeryLowSbp={setVeryLowSbp}
        very_low_pulse={very_low_pulse}
        setVeryLowPulse={setVeryLowPulse}
      />
      <Box>
        <H3>Настройка диапазонов</H3>
        <Gradient>
          <div className="left">
            <div className="gradient"></div>
            <div className="list">
              <p>Очень высоко</p>
              <p>Высоко</p>
              <p>В пределах нормы</p>
              <p>Низко</p>
              <p>Очень низко</p>
            </div>
          </div>
          <div className="right">
            <div className="box">
              <div className="innerbox">
                <p>САД</p>
                <input
                  type="text"
                  placeholder=""
                  value={very_high_sbp}
                  onChange={(e) => setVeryHighSbp(e.target.value)}
                />
              </div>
              <div className="innerbox">
                <p>ДАД</p>
                <input
                  type="text"
                  placeholder=""
                  value={very_high_dbp}
                  onChange={(e) => setVeryHighDbp(e.target.value)}
                />
              </div>
              <div className="innerbox">
                <p>Пульс</p>
                <input
                  type="text"
                  placeholder=""
                  value={very_high_pulse}
                  onChange={(e) => setVeryHighPulse(e.target.value)}
                />
              </div>

              <div className="innerbox">
                <p>САД</p>
                <input
                  type="text"
                  placeholder=""
                  value={high_sbp}
                  onChange={(e) => setHighSbp(e.target.value)}
                />
              </div>
              <div className="innerbox">
                <p>ДАД</p>
                <input
                  type="text"
                  placeholder=""
                  value={high_dbp}
                  onChange={(e) => setHighDbp(e.target.value)}
                />
              </div>
              <div className="innerbox">
                <p>Пульс</p>
                <input
                  type="text"
                  placeholder=""
                  value={high_pulse}
                  onChange={(e) => setHighPulse(e.target.value)}
                />
              </div>
            </div>
            <div className="box">
              <div className="innerbox">
                <p>САД</p>
                <input
                  type="text"
                  placeholder=""
                  value={low_sbp}
                  onChange={(e) => setLowSbp(e.target.value)}
                />
              </div>
              <div className="innerbox">
                <p>ДАД</p>
                <input
                  type="text"
                  placeholder=""
                  value={low_dbp}
                  onChange={(e) => setLowDbp(e.target.value)}
                />
              </div>
              <div className="innerbox">
                <p>Пульс</p>
                <input
                  type="text"
                  placeholder=""
                  value={low_pulse}
                  onChange={(e) => setLowPulse(e.target.value)}
                />
              </div>

              <div className="innerbox">
                <p>САД</p>
                <input
                  type="text"
                  placeholder=""
                  value={very_low_sbp}
                  onChange={(e) => setVeryLowSbp(e.target.value)}
                />
              </div>
              <div className="innerbox">
                <p>ДАД</p>
                <input
                  type="text"
                  placeholder=""
                  value={very_low_dbp}
                  onChange={(e) => setVeryLowDbp(e.target.value)}
                />
              </div>
              <div className="innerbox">
                <p>Пульс</p>
                <input
                  type="text"
                  placeholder=""
                  value={very_low_pulse}
                  onChange={(e) => setVeryLowPulse(e.target.value)}
                />
              </div>
            </div>
          </div>
        </Gradient>
      </Box>
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
`
const H3 = styled.h3`
  font-weight: 600;
  font-size: 24px;
  color: #202020;
`
const Gradient = styled.div`
  padding: 30px;
  display: flex;
  justify-content: space-between;
  .gradient {
    background: linear-gradient(
      0deg,
      #ff0000 0%,
      #ff8a00 26.04%,
      #52ff00 49.52%,
      #ff8a01 72.84%,
      #ff0000 100%
    );
    border-radius: 3px;
    width: 8px;
    height: 570px;
  }
  .left {
    display: flex;
  }
  .list {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-left: 30px;
    p {
      font-size: 11px;
      color: #333333;
    }
  }
  .right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .box {
      display: grid;
      grid-gap: 30px;
      grid-template-columns: 1fr 1fr 1fr;
      width: 150px;
      .innerbox {
        p {
          font-size: 12px;
          color: #333333;
          text-align: center;
        }
        p.bottom {
          font-size: 16px;
          color: #333333;
          margin-top: 15px;
        }
      }
    }
  }
  select,
  input,
  textarea {
    width: 45px;
    height: 45px;
    background: #ffffff;
    border: 1px solid rgba(31, 32, 65, 0.25);
    box-sizing: border-box;
    border-radius: 4px;
    padding: 13px 10px;
    font-size: 14px;
    color: #bdbdbd;
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
`

export default Heart
