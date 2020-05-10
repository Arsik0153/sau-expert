import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const IssuesTable = () => {
  return (
    <Container>
      <div className="flexx">
        <H3>Жалобы</H3>
        <Link to="/doctor/issues">Смотреть все</Link>
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
          </tbody>
        </table>
      </Scroll>
    </Container>
  )
}

const Container = styled.div`
  margin: 5px 30px 50px 0px;
  background: #ffffff;
  box-shadow: 0px 10px 20px rgba(31, 32, 65, 0.05);
  border-radius: 4px;
  width: 465px;
  .flexx {
    display: flex;
    justify-content: space-between;
    padding: 30px;
    a {
      font-size: 14px;
      color: #57c3a7;
      text-decoration: underline;
    }
  }
`
const H3 = styled.h3`
  font-weight: 600;
  font-size: 24px;
  color: #202020;
`
const Scroll = styled.div`
  margin-top: 15px;
  table {
    width: 100%;

    tbody {
      width: 100%;
      display: block;
      ::-webkit-scrollbar {
        width: 4px;
      }
      ::-webkit-scrollbar-track {
        background: #e0e0e0;
      }
      ::-webkit-scrollbar-thumb {
        background: #57c3a7;
        border-radius: 2px;
      }
      ::-webkit-scrollbar-thumb:hover {
        background: #555;
      }
    }
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
  }
`

export default IssuesTable
