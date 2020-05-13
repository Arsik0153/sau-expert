import React from 'react'
import styled from 'styled-components'
import ava from './../../../assets/ava-full.png'
import { Link } from 'react-router-dom'

const Table = ({ result }) => {
  return (
    <Container>
      <thead>
        <tr>
          <td>Пользователь</td>
          <td>Дата рождения</td>
        </tr>
      </thead>
      <tbody>
        {result.map((res) => (
          <tr key={res.id}>
            <td>
              <Link to={`/doctor/patient/${res.id}`}>
                <img src={ava} alt="Photo" />
                <p>{res.short_name}</p>
              </Link>
            </td>
            <td>{res.birth_date}</td>
          </tr>
        ))}
      </tbody>
    </Container>
  )
}

const Container = styled.table`
  width: calc(100% - 100px);
  padding: 0 30px 0 30px;
  margin: 30px 50px 50px 50px;
  background: #ffffff;
  box-shadow: 0px 10px 20px rgba(31, 32, 65, 0.05);
  border-radius: 4px;
  border-collapse: collapse;
  padding: 0 15px;
  thead {
    margin-bottom: 30px;
    td {
      font-weight: bold;
      font-size: 14px;
      color: #686868;
      padding: 20px;
    }
  }
  tbody {
    tr {
      border-bottom: 1px solid rgba(209, 216, 245, 0.6);
      img {
        width: 54px;
        height: 54px;
        object-fit: cover;
        border-radius: 100%;
        float: left;
        margin-right: 15px;
      }
      p {
        margin-top: 17px;
        margin-bottom: 17px;
        font-weight: 600;
      }
      a {
        color: #686868;
      }
      td {
        font-size: 14px;
        color: #686868;
        padding: 7px 20px;
      }
    }
  }
`
const Status = styled.td`
  ${(props) =>
    props.status === 'active'
      ? 'color: #55B97E !important;'
      : props.status === 'inactive'
      ? 'color: #BD1119 !important'
      : 'color: #F2994A !important;'}
`

export default Table
