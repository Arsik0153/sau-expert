import React from 'react'
import styled from 'styled-components'

const Diabet = () => {
  return (
    <Container>
      <Box>
        <H3>Тип диабета</H3>
        <Check>
          <div>
            <p>Название</p>
            <p>Дата начала</p>
          </div>
          <div>
            <p>Сахарный диабет</p>
            <p>13.10.16</p>
          </div>
        </Check>
        <H4>Дополнительная информация</H4>
        <strong>Использование быстродействующего инсулина</strong>
        <Check>
          <div>
            <p>Название</p>
            <p>Дозировка</p>
          </div>
          <div>
            <p>Быстродействующий инсулин</p>
            <p>1 ампула в день</p>
          </div>
        </Check>
        <strong>Использование базального инсулина</strong>
        <Check>
          <div>
            <p>Название</p>
            <p>Дозировка</p>
          </div>
          <div>
            <p>Базальный инсулин</p>
            <p>1 ампула в день</p>
          </div>
        </Check>
        <strong>Таблетки</strong>
        <p style={{ marginTop: '20px' }}>
          Таблетка 1, Таблетка 2, Таблетка 3, Наименование медикамента
        </p>
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
            <p>3</p>
            <p>4</p>
            <p></p>
            <p>5</p>
            <p>6</p>
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

export default Diabet
