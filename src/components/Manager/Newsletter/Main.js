import React from 'react'
import styled from 'styled-components'

const Main = () => {
  return (
    <Container>
      <H1>Рассылка</H1>
      <Form>
        <div className="flex">
          <div className="form-group">
            <label>Кому</label>
            <select defaultValue="default">
              <option value="default">Врачам</option>
              <option value="">Пациентам</option>
            </select>
          </div>
          <div className="form-group">
            <label>Локация</label>
            <select defaultValue="default">
              <option value="default">Нур-Султан</option>
              <option value="2">Алматы</option>
              <option value="3">Талдыкорган</option>
              <option value="4">Кокшетау</option>
              <option value="5">Степногорск</option>
              <option value="6">Актобе</option>
              <option value="7">Атырау</option>
              <option value="8">Усть-Каменогорск</option>
              <option value="9">Тараз</option>
              <option value="10">Уральск</option>
              <option value="11">Аксай</option>
              <option value="12">Караганда</option>
              <option value="13">Жезказган</option>
              <option value="14">Балхаш</option>
              <option value="15">Темиртау</option>
              <option value="16">Костанай</option>
              <option value="17">Рудный</option>
              <option value="18">Кызылорда</option>
              <option value="19">Актау</option>
              <option value="20">Жанаозен</option>
              <option value="21">Павлодар</option>
              <option value="22">Экибастуз</option>
              <option value="23">Петропавловск</option>
              <option value="24">Шымкент</option>
              <option value="25">Туркестан</option>
              <option value="26">Семей</option>
              <option value="27">Риддер</option>
              <option value="28">Другой</option>
            </select>
          </div>
          <button type="submit">Отправить</button>
        </div>
        <label>Сообщение</label>
        <br />
        <textarea placeholder="Текст"></textarea>
      </Form>
    </Container>
  )
}

const Container = styled.div`
  grid-area: main;
  margin: 50px 50px 50px 50px;
`
const H1 = styled.h1`
  font-weight: 600;
  font-size: 38px;
  color: #202020;
  margin-bottom: 30px;
`
const Form = styled.form`
  background: #ffffff;
  box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.03);
  border-radius: 6px;
  padding: 30px;
  input,
  select,
  textarea {
    width: 100%;
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
      font-weight: 300;
    }
  }
  select {
    height: 40px;
  }
  textarea {
    height: 150px;
  }
  button[type='submit'] {
    height: fit-content;
    flex: 1;
    background: #57c3a7;
    border-radius: 4px;
    font-size: 16px;
    color: #ffffff;
    padding: 20px 0;
    border: none;
    margin: 0 10px;
    outline: none;
    font-family: 'Source Sans Pro', sans-serif;
    cursor: pointer;
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
    margin-top: 10px;
    border-radius: 4px;
  }
  .flex {
    display: flex;
    flex-direction: row;
    align-items: stretch;
  }
  .form-group {
    flex: 1;
    display: flex;
    flex-direction: column;
    margin: 0 10px;
    :first-child {
      margin-left: 0px;
    }
  }
`

export default Main
