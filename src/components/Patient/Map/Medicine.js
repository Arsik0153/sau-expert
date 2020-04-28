import React from 'react'
import styled from 'styled-components'
import checked from './../../../assets/checked.svg'

const Medicine = () => {
  return (
    <Container>
      <Box>
        <H3>Инъекции инсулина</H3>
        <InnerBox>
          <div>
            <Name>Быстродействующий</Name>
            <p>Дозировка - 2 ед.</p>
            <p>Время - 09:00</p>
          </div>
          <img src={checked} alt="Checked" />
        </InnerBox>
        <InnerBox>
          <div>
            <Name>Базальный</Name>
            <p>Дозировка - 2 ед.</p>
            <p>Время - 09:00</p>
          </div>
          <img src={checked} alt="Checked" />
        </InnerBox>
      </Box>
      <Box>
        <H3>Сегодняшние инъекции</H3>
        <Scroll>
          <table>
            <tbody>
              <tr>
                <td>Базальный - 2 ед.</td>
                <td>19:30</td>
              </tr>
              <tr>
                <td>Быстродействующий - 2 ед.</td>
                <td>14:30</td>
              </tr>
              <tr>
                <td>Быстродействующий - 1 ед.</td>
                <td>09:30</td>
              </tr>
            </tbody>
          </table>
        </Scroll>
      </Box>

      <Box>
        <H3>Прием препаратов</H3>
        <InnerBox>
          <div>
            <Name>Медикамент 1</Name>
            <p>Дозировка - 2 ед.</p>
            <p>Время - 09:00</p>
          </div>
          <img src={checked} alt="Checked" />
        </InnerBox>
        <InnerBox>
          <div>
            <Name>Медикамент 1</Name>
            <p>Дозировка - 2 ед.</p>
            <p>Время - 09:00</p>
          </div>
          <img src={checked} alt="Checked" />
        </InnerBox>
        <InnerBox>
          <div>
            <Name>Медикамент 1</Name>
            <p>Дозировка - 2 ед.</p>
            <p>Время - 09:00</p>
          </div>
          <img src={checked} alt="Checked" />
        </InnerBox>
      </Box>
      <Box>
        <H3>Сегодняшние приемы</H3>
        <Scroll>
          <table>
            <tbody>
              <tr>
                <td>Базальный - 2 ед.</td>
                <td>19:30</td>
              </tr>
              <tr>
                <td>Быстродействующий - 2 ед.</td>
                <td>14:30</td>
              </tr>
              <tr>
                <td>Быстродействующий - 1 ед.</td>
                <td>09:30</td>
              </tr>
            </tbody>
          </table>
        </Scroll>
      </Box>
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
  padding: 50px;
`
const Box = styled.div`
  background: #ffffff;
  box-shadow: 0px 10px 20px rgba(31, 32, 65, 0.05);
  border-radius: 4px;
  min-width: 300px;
  padding-bottom: 30px;
`
const H3 = styled.h3`
  font-weight: 600;
  font-size: 24px;
  color: #202020;
  padding: 30px 0 20px 40px;
`
const InnerBox = styled.div`
  padding: 15px 15px 15px 30px;
  margin: 10px 40px 5px 40px;
  border: 1px solid #e9eff4;
  border-radius: 6px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  p {
    margin: 5px 0;
  }
`
const Name = styled.h5`
  font-weight: 600;
  font-size: 16px;
  color: #202020;
`
const Scroll = styled.div`
  table {
    width: 100%;
    min-width: 500px;
    tr {
      display: flex;
      justify-content: space-between;
      padding: 18px 40px;
      font-size: 16px;
      color: #202020;
      border-bottom: 1px solid rgba(31, 32, 65, 0.1);
      a {
        text-decoration: underline;
        color: #57c3a7;
      }
    }
`

export default Medicine
