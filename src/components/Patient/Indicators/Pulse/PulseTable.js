import React from 'react'
import styled from 'styled-components'

const PulseTable = () => {
  return (
    <div>
      <H3>Замеры пульса</H3>
      <div className="flex">
        <H4>Дата</H4>
        <H4>Значение</H4>
      </div>
      <Scroll>
        <table>
          <tbody>
            <tr>
              <td>22.01.2020 21:00</td>
              <td>85</td>
            </tr>
            <tr>
              <td>22.01.2020 21:00</td>
              <td>85</td>
            </tr>
            <tr>
              <td>22.01.2020 21:00</td>
              <td>85</td>
            </tr>
            <tr>
              <td>22.01.2020 21:00</td>
              <td>85</td>
            </tr>
            <tr>
              <td>22.01.2020 21:00</td>
              <td>85</td>
            </tr>
            <tr>
              <td>22.01.2020 21:00</td>
              <td>85</td>
            </tr>
            <tr>
              <td>22.01.2020 21:00</td>
              <td>85</td>
            </tr>
            <tr>
              <td>22.01.2020 21:00</td>
              <td>85</td>
            </tr>
            <tr>
              <td>22.01.2020 21:00</td>
              <td>85</td>
            </tr>
          </tbody>
        </table>
      </Scroll>
    </div>
  )
}
const H3 = styled.h3`
  font-weight: 600;
  font-size: 22px;
  color: #202020;
  margin-bottom: 15px;
`
const H4 = styled.h4`
  font-weight: 600;
  font-size: 16px;
  color: #333333;
`
const Scroll = styled.div`
  margin-top: 15px;
  table {
    width: calc(100% + 15px);
    padding-right: 15px;
    display: block;
    height: 250px;
    overflow-y: auto;
    overflow-x: hidden;
    tr {
      display: flex;
      justify-content: space-between;
      padding: 18px 0;
      font-size: 16px;
      color: #202020;
      border-bottom: 1px solid rgba(31, 32, 65, 0.1);
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

export default PulseTable
