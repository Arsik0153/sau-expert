import React, { useState } from 'react'
import styled from 'styled-components'
import close from './../../../assets/close.svg'

const RateDoctor = ({ closeModal }) => {
  const handleSubmit = () => {
    if (message === '') {
      setError('Заполните поле сообщении')
      return
    } else if (active === '') {
      setError('Выберите оценку')
      return
    }

    let submitted = {
      rate: active,
      message,
    }
    console.log(submitted)
    alert('Submit')
    setError('')
  }

  const [active, setActive] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  return (
    <Box>
      <H2>Оцените работу врача</H2>
      <Date>8 ноября 2019, 10:00</Date>
      <Close src={close} alt="Close" onClick={() => closeModal()} />
      <strong>Иванов Иван Иванович (кардиолог)</strong>
      <br />
      <br />
      <label>Оценка работы</label>
      <RateWrap>
        <RateBox onClick={() => setActive('1')} active={active === '1'}>
          1
        </RateBox>
        <RateBox onClick={() => setActive('2')} active={active === '2'}>
          2
        </RateBox>
        <RateBox onClick={() => setActive('3')} active={active === '3'}>
          3
        </RateBox>
        <RateBox onClick={() => setActive('4')} active={active === '4'}>
          4
        </RateBox>
        <RateBox onClick={() => setActive('5')} active={active === '5'}>
          5
        </RateBox>
      </RateWrap>
      <label>Комментарий</label>
      <textarea
        placeholder="Введите сообщение"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      {error && <div className="field-error">{error}</div>}
      <button type="submit" onClick={() => handleSubmit()}>
        Сохранить
      </button>
    </Box>
  )
}
const Box = styled.div`
  background: #ffffff;
  box-shadow: 0px 10px 20px rgba(31, 32, 65, 0.05);
  border-radius: 4px;
  height: fit-content;
  position: relative;
  width: 400px;
  textarea {
    width: 100%;
    height: 90px;
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
    outline: none;
    font-family: 'Source Sans Pro', sans-serif;
  }
  label {
    font-size: 16px;
    color: #333333;
    font-weight: 400;
  }
  .field-error {
    width: 100%;
    padding: 20px 15px;
    color: white;
    background: #f47775;
    font-weight: 300;
    margin-top: -15px;
    margin-bottom: 10px;
    border-radius: 4px;
  }
  strong {
    font-weight: 600;
    font-size: 21px;
    color: #333333;
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
const Date = styled.p`
  font-size: 18px;
  color: #333333;
  padding: 20px 0;
`
const RateWrap = styled.div`
  margin: 10px 0;
  display: flex;
`
const RateBox = styled.div`
  user-select: none;
  border: 2px solid #57c3a7;
  border-radius: 10px;
  width: 40px;
  height: 40px;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 14px;
  text-align: center;
  cursor: pointer;
  ${(props) =>
    props.active ? 'background: #57C3A7; color: white' : 'color: #57c3a7;'}
`

export default RateDoctor
