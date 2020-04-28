import React from 'react'
import styled from 'styled-components'

const Tasks = () => {
  return (
    <Container>
      <H3>8 ноября 2019</H3>
      <div className="flex">
        <H4>Задание</H4>
        <H4>Время</H4>
      </div>
      <Scroll>
        <table>
          <tbody>
            <tr>
              <td>
                <a href="/#">Замерить глюкозу</a>
              </td>
              <td>09:00</td>
            </tr>
            <tr>
              <td>
                <a href="/#">Принять 60 ед. базального инсулина</a>
              </td>
              <td>09:30</td>
            </tr>
            <tr>
              <td>
                <a href="/#">Замерить давление</a>
              </td>
              <td>10:00</td>
            </tr>
            <tr>
              <td>
                <a href="/#">Принять 1 ед. нитроглицерина</a>
              </td>
              <td>10:15</td>
            </tr>
            <tr>
              <td>
                <a href="/#">Принять 30 единиц быстродействующего инсулина</a>
              </td>
              <td>13:00</td>
            </tr>
            <tr>
              <td>
                <a href="/#">Замерить глюкозу</a>
              </td>
              <td>18:00</td>
            </tr>
            <tr>
              <td>
                <a href="/#">Сделать 10000 шагов</a>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>
                <a href="/#">Оценить работу врача - Сидоров П.М.</a>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>
                <a href="/#">Заполнитель текста</a>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>
                <a href="/#">Заполнитель текста</a>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>
                <a href="/#">Заполнитель текста</a>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>
                <a href="/#">Заполнитель текста</a>
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </Scroll>
      <Button>Дополнительный замер</Button>
    </Container>
  )
}

const Container = styled.div`
  grid-row: 1 / 6;
  min-width: 500px;
  background: #ffffff;
  box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.03);
  border-radius: 6px;
  position: relative;
  .flex {
    display: flex;
    justify-content: space-between;
    padding: 10px 30px;
  }
`
const H3 = styled.h3`
  font-weight: 600;
  font-size: 24px;
  text-align: center;
  color: #202020;
  margin-top: 30px;
`
const H4 = styled.h4`
  font-weight: 600;
  font-size: 20px;
  color: #202020;
`
const Scroll = styled.div`
  margin-top: 15px;
  table {
    width: 100%;
    display: block;
    height: 450px;
    overflow-y: auto;
    overflow-x: hidden;
    tr {
      display: flex;
      justify-content: space-between;
      padding: 18px 30px;
      font-size: 16px;
      color: #202020;
      border-bottom: 1px solid rgba(31, 32, 65, 0.1);
      a {
        text-decoration: underline;
        color: #57c3a7;
      }
    }
    /* width */
    ::-webkit-scrollbar {
      width: 4px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: #e0e0e0;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #57c3a7;
      border-radius: 2px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
  }
`
const Button = styled.button`
  background: #57c3a7;
  border-radius: 4px;
  padding: 20px 0;
  color: white;
  font-weight: normal;
  font-size: 16px;
  width: calc(100% - 60px);
  position: absolute;
  left: 30px;
  bottom: 70px;
  outline: none;
  cursor: pointer;
  border: none;
`

export default Tasks
