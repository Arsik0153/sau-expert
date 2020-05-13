import React from 'react'
import styled from 'styled-components'

const Heart = () => {
  return (
    <Container>
      <Box>
        <H3>Заболевание</H3>
        <Check>
          <div>
            <p>Название</p>
            <p>Дата начала</p>
          </div>
          <div>
            <p>Болезнь сердца</p>
            <p>13.10.16</p>
          </div>
        </Check>
        <H4>Дополнительная информация</H4>
        <strong>Таблетки</strong>
        <p style={{ margin: '20px 0' }}>
          Таблетка 1, Таблетка 2, Таблетка 3, Наименование медикамента
        </p>

        <strong>Холестирин</strong>
        <p style={{ marginTop: '20px' }}>
          Текстовая информация касательно холестирина
        </p>

        <H4>Критические случаи</H4>
        <Check>
          <div>
            <p>Случай</p>
            <p>Дата </p>
          </div>
          <div>
            <p>Случай 1</p>
            <p>13.10.16</p>
          </div>
        </Check>
      </Box>
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
                <p className="bottom">240</p>
              </div>
              <div className="innerbox">
                <p>ДАД</p>
                <p className="bottom">180</p>
              </div>
              <div className="innerbox">
                <p>Пульс</p>
                <p className="bottom">150</p>
              </div>

              <div className="innerbox">
                <p>САД</p>
                <p className="bottom">200</p>
              </div>
              <div className="innerbox">
                <p>ДАД</p>
                <p className="bottom">140</p>
              </div>
              <div className="innerbox">
                <p>Пульс</p>
                <p className="bottom">120</p>
              </div>
            </div>
            <div className="box">
              <div className="innerbox">
                <p>САД</p>
                <p className="bottom">240</p>
              </div>
              <div className="innerbox">
                <p>ДАД</p>
                <p className="bottom">180</p>
              </div>
              <div className="innerbox">
                <p>Пульс</p>
                <p className="bottom">150</p>
              </div>

              <div className="innerbox">
                <p>САД</p>
                <p className="bottom">200</p>
              </div>
              <div className="innerbox">
                <p>ДАД</p>
                <p className="bottom">140</p>
              </div>
              <div className="innerbox">
                <p>Пульс</p>
                <p className="bottom">120</p>
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
`

export default Heart
