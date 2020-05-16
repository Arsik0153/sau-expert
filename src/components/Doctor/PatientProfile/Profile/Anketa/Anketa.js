import React from 'react'
import styled from 'styled-components'
import Table from './Table'

const Anketa = () => {
  return (
    <Container>
      <Box>
        <H3>Провести анкетирование</H3>
        <label>Название</label>
        <input type="text" placeholder="Осмотр" />
        <button type="submit">Назначить</button>
      </Box>
      <Box>
        <H3>История анкетирования</H3>
        <Table />
      </Box>
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 350px 1fr;
  grid-gap: 30px;
  margin: 0 50px 50px 50px;
  textarea,
  input {
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
    padding: 20px 0;
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
  textarea {
    height: 150px;
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
const H3 = styled.h3`
  font-weight: 600;
  font-size: 24px;
  color: #202020;
`
const Box = styled.div`
  background: #ffffff;
  box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.03);
  border-radius: 6px;
  padding: 30px;
  height: fit-content;
`

export default Anketa
