import React from 'react'
import styled from 'styled-components'

const Diagnosis = () => {
  return (
    <Container>
      <div>
        <H3>Основной диагноз</H3>
        <Table>
          <tbody>
            <tr>
              <td>Название</td>
              <td>Дата начала</td>
            </tr>
            <tr>
              <td>Гипертоническая болезнь</td>
              <td>13.10.16</td>
            </tr>
            <tr>
              <td>Гипертоническая болезнь</td>
              <td>13.10.16</td>
            </tr>
            <tr>
              <td>Гипертоническая болезнь</td>
              <td>13.10.16</td>
            </tr>
            <tr>
              <td>Гипертоническая болезнь</td>
              <td>13.10.16</td>
            </tr>
            <tr>
              <td>Гипертоническая болезнь</td>
              <td>13.10.16</td>
            </tr>
          </tbody>
        </Table>
      </div>

      <div>
        <H3>Сопутствующий диагноз</H3>
        <Table>
          <tbody>
            <tr>
              <td>Название</td>
              <td>Дата начала</td>
            </tr>
            <tr>
              <td>Гипертоническая болезнь</td>
              <td>13.10.16</td>
            </tr>
            <tr>
              <td>Гипертоническая болезнь</td>
              <td>13.10.16</td>
            </tr>
            <tr>
              <td>Гипертоническая болезнь</td>
              <td>13.10.16</td>
            </tr>
            <tr>
              <td>Гипертоническая болезнь</td>
              <td>13.10.16</td>
            </tr>
            <tr>
              <td>Гипертоническая болезнь</td>
              <td>13.10.16</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </Container>
  )
}

const Container = styled.div`
  margin: 30px 50px 30px 50px;
  background: #ffffff;
  border-radius: 5px;
  padding: 30px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
`
const H3 = styled.h3`
  font-weight: 600;
  font-size: 24px;
  color: #202020;
`
const Table = styled.table`
  width: 100%;
  margin-top: 20px;
  tr {
    display: flex;
    justify-content: space-between;
    padding: 17px 0 17px 0;
    font-size: 16px;
    color: #202020;
    border-bottom: 2px solid rgba(31, 32, 65, 0.1);
    p {
      color: #57c3a7;
    }
    a {
      text-decoration-line: underline;
      color: #57c3a7;
    }
    :first-child {
      font-weight: 600;
    }
    :last-child {
      border-bottom: none;
    }
  }
`

export default Diagnosis
