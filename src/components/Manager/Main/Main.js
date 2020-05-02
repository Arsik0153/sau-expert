import React from 'react'
import styled from 'styled-components'
import options from './../../../assets/options.svg'

const Main = () => {
  return (
    <Container>
      <div className="flex">
        <H1>Главная</H1>
        <Button>Добавить менеджера</Button>
      </div>
      <H3>Пациенты</H3>
      <CardsContainer>
        <Card color="#686868">
          <img src={options} alt="More" />
          <H5>Все пациенты</H5>
          <p>
            <span>564</span> пациентов
          </p>
        </Card>
        <Card color="#6FCF97">
          <img src={options} alt="More" />
          <H5>Активные</H5>
          <p>
            <span>254</span> пациентов
          </p>
        </Card>
        <Card color="#BD1119">
          <img src={options} alt="More" />
          <H5>Неактивные</H5>
          <p>
            <span>123</span> пациентов
          </p>
        </Card>
        <Card color="#FFC542">
          <img src={options} alt="More" />
          <H5>В ожидании</H5>
          <p>
            <span>564</span> пациентов
          </p>
        </Card>
      </CardsContainer>
      <H3>Врачи</H3>
      <CardsContainer>
        <Card color="#686868">
          <img src={options} alt="More" />
          <H5>Все врачи</H5>
          <p>
            <span>564</span> врачей
          </p>
        </Card>
        <Card color="#6FCF97">
          <img src={options} alt="More" />
          <H5>Активные</H5>
          <p>
            <span>254</span> врачей
          </p>
        </Card>
        <Card color="#BD1119">
          <img src={options} alt="More" />
          <H5>Неактивные</H5>
          <p>
            <span>123</span> врачей
          </p>
        </Card>
      </CardsContainer>
    </Container>
  )
}

const Container = styled.div`
  grid-area: main;
  .flex {
    margin: 50px 50px 25px 50px;
    display: flex;
    justify-content: space-between;
  }
`
const H1 = styled.h1`
  font-weight: 600;
  font-size: 38px;
  color: #202020;
`
const Button = styled.button`
  padding: 20px 25px;
  font-weight: 400;
  font-size: 14px;
  background: #57c3a7;
  border-radius: 4px;
  color: #fff;
  border: none;
  cursor: pointer;
`
const H3 = styled.h3`
  font-weight: 600;
  font-size: 24px;
  color: #202020;
  margin-left: 50px;
`
const CardsContainer = styled.div`
  margin: 30px 50px 0 50px;
  display: flex;
  flex-wrap: wrap;
`
const Card = styled.div`
  width: 220px;
  padding: 30px;
  background: #ffffff;
  box-shadow: 0px 10px 20px rgba(31, 32, 65, 0.05);
  border-radius: 4px;
  margin-right: 25px;
  margin-bottom: 25px;
  position: relative;
  p {
    color: rgba(50, 60, 71, 0.4);
    margin-top: 5px;
    font-size: 16px;
    span {
      font-weight: bold;
      font-size: 32px;
      margin-right: 5px;
      color: ${(props) => props.color};
    }
  }
  img {
    position: absolute;
    right: 30px;
    top: 35px;
  }
`
const H5 = styled.h5`
  font-size: 14px;
  color: #202020;
  font-weight: 500;
`

export default Main
