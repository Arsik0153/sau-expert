import React, { useEffect } from 'react'
import styled from 'styled-components'
import { getAnketa } from '../../../../../redux/actions/doctor/anketa'
import { connect } from 'react-redux'
import Preloader from './../../../../helpers/Preloader'

var options = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}

const Table = (props) => {
  let token = localStorage.getItem('token')
  useEffect(() => {
    let values = {
      id: props.id,
      token,
    }
    props.getAnketa(values)
  }, [])
  return (
    <div>
      {props.getAnketaInfo.status !== 'success' ? (
        <div className="preloader-container">
          <Preloader />
        </div>
      ) : (
        <TableContainer>
          <tbody>
            <tr>
              <td>Название</td>
              <td>Врач</td>
              <td>Дата</td>
            </tr>
            {props.getAnketaInfo.info.map((result) => (
              <tr key={result.id}>
                <td>
                  <a href="#/">Осмотр</a>
                </td>
                <td>{result.doctor}</td>
                <td>
                  {new Date(result.created_at).toLocaleDateString('ru-RU')}
                </td>
              </tr>
            ))}
          </tbody>
        </TableContainer>
      )}
    </div>
  )
}

const TableContainer = styled.table`
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
const mapStateToProps = (state) => {
  return {
    getAnketaInfo: state.getAnketaInfo,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAnketa: (values) => {
      dispatch(getAnketa(values))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Table)
