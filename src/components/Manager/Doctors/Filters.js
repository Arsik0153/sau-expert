import React from 'react'
import styled from 'styled-components'

const Filters = () => {
  return (
    <Container>
      <select name="position">
        <option selected="selected">Должность</option>
        <option value="1">Должность 1</option>
        <option value="2">Должность 2</option>
        <option value="3">Должность 3</option>
      </select>
      <select name="city">
        <option selected="selected">Город</option>
        <option value="1">Нур-Султан</option>
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
      <select name="status">
        <option selected="selected">Статус</option>
        <option value="1">Активный</option>
        <option value="2">Неактивный</option>
      </select>
      <select name="registrationDate">
        <option selected="selected">Дата регистрации</option>
        <option value="1">Дата 1</option>
      </select>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 50px 0 50px;
  select {
    height: 40px;
    background: #ffffff;
    border: 1px solid rgba(31, 32, 65, 0.25);
    box-sizing: border-box;
    border-radius: 4px;
    padding: 16px 20px;
    font-size: 16px;
    color: #000;
    outline: none;
    resize: none;
    margin-right: 15px;
    :focus {
      border: 1px solid #57c3a7;
    }
    ::placeholder {
      color: #bdbdbd;
      font-weight: 300;
    }
  }
`

export default Filters
