import React, { useState } from 'react'
import styled from 'styled-components'
import smile from './../../../assets/smile.svg'
import meh from './../../../assets/meh.svg'
import pain from './../../../assets/pain.svg'
import sceptic from './../../../assets/sceptic.svg'
import ill from './../../../assets/ill.svg'
import crying from './../../../assets/crying.svg'

const Status = () => {
  const [status, setStatus] = useState('')
  const [comments, setComments] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = () => {
    if (status === '') {
      setError('Выберите оценку самочувствия')
      return
    } else if (comments === '') {
      setError('Опишити самочувствие')
      return
    }
    let submit = {
      status,
      comments,
    }
    console.log(submit)
    alert('Submit')
    setError('')
  }

  return (
    <Container>
      <Left>
        <H3>Оценка самочувствия на сегодня</H3>
        <div className="flex">
          <StatusBox
            active={status === 'smile'}
            onClick={() => setStatus('smile')}
          >
            <img src={smile} alt="Good" />
          </StatusBox>
          <StatusBox active={status === 'meh'} onClick={() => setStatus('meh')}>
            <img src={meh} alt="Meh" />
          </StatusBox>
          <StatusBox
            active={status === 'pain'}
            onClick={() => setStatus('pain')}
          >
            <img src={pain} alt="Pain" />
          </StatusBox>
          <StatusBox
            active={status === 'sceptic'}
            onClick={() => setStatus('sceptic')}
          >
            <img src={sceptic} alt="Sceptic" />
          </StatusBox>
          <StatusBox active={status === 'ill'} onClick={() => setStatus('ill')}>
            <img src={ill} alt="Ill" />
          </StatusBox>
          <StatusBox
            active={status === 'crying'}
            onClick={() => setStatus('crying')}
          >
            <img src={crying} alt="Crying" />
          </StatusBox>
        </div>
      </Left>
      <Right>
        <H3>Опишите свое самочувствие</H3>
        <textarea
          placeholder="Комментарии"
          value={comments}
          onChange={(e) => setComments(e.target.value)}
        ></textarea>
        {error && <div className="field-error">{error}</div>}
        <button type="submit" onClick={() => handleSubmit()}>
          Отправить
        </button>
      </Right>
    </Container>
  )
}

const Container = styled.div`
  background: #ffffff;
  box-shadow: 0px 10px 20px rgba(31, 32, 65, 0.05);
  border-radius: 4px;
  margin: 50px;
  padding: 30px 40px;
  display: flex;
`
const Left = styled.div`
  .flex {
    display: grid;
    width: 576px;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: start;
    grid-gap: 20px;
    margin: 40px 15px 0 0;
  }
`
const H3 = styled.h3`
  font-weight: 600;
  font-size: 24px;
  color: #202020;
`
const StatusBox = styled.div`
  width: 170px;
  height: 150px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  ${(props) =>
    props.active ? 'border: 2px solid #6fcf97;' : 'border: 1px solid #E9EFF4;'}

  img {
    width: 54px;
    height: 54px;
  }
`
const Right = styled.div`
  textarea {
    width: 100%;
    background: #ffffff;
    border: 1px solid #e9eff4;
    box-sizing: border-box;
    border-radius: 4px;
    padding: 16px 20px;
    font-size: 16px;
    color: #000;
    margin-top: 20px;
    outline: none;
    resize: none;
    height: 280px;
    :focus {
      border: 1px solid #57c3a7;
    }
    ::placeholder {
      color: #bdbdbd;
      font-family: 'Source Sans Pro', sans-serif;
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
`

export default Status
