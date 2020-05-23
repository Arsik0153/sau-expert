import React, { useEffect } from 'react'
import styled from 'styled-components'
import edit from './../../../../../assets/edit.svg'
import Preloader from '../../../../helpers/Preloader'

const Table = (props) => {
  return (
    <Container>
      <H1>История медикаментов</H1>
      {props.medicineList.status !== 'success' ? (
        <div className="preloader-container">
          <Preloader />
        </div>
      ) : (
        <Sheet>
          <thead>
            <tr>
              <td>Название</td>
              <td>Дозировка</td>
              <td>Начало</td>
              <td>Конец</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {props.medicineList.info.results &&
              props.medicineList.info.results.map((result) => (
                <tr key={result.id}>
                  <td>{result.title}</td>
                  <td>{result.dosage}</td>
                  <td>
                    {new Date(result.begin_date).toLocaleDateString('ru-RU')}
                  </td>
                  <td>
                    {new Date(result.end_date).toLocaleDateString('ru-RU')}
                  </td>
                  <td>
                    <img src={edit} alt="Edit" />
                  </td>
                </tr>
              ))}
          </tbody>
        </Sheet>
      )}
    </Container>
  )
}

const Container = styled.div`
  padding: 30px;
  background: #ffffff;
  box-shadow: 0px 10px 20px rgba(31, 32, 65, 0.05);
  border-radius: 4px;
  height: fit-content;
  .preloader-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
const Sheet = styled.table`
  width: 100%;
  border-collapse: collapse;
  thead {
    margin-bottom: 30px;
    td {
      font-weight: bold;
      font-size: 14px;
      color: #686868;
      padding: 20px 0 20px 0;
    }
  }
  tbody {
    tr {
      border-bottom: 1px solid rgba(209, 216, 245, 0.6);
      width: 100%;
      img {
      }
      p {
        margin-top: 17px;
        font-weight: 600;
      }
      td {
        padding: 14px 0;
        font-size: 14px;
        color: #686868;
      }
    }
  }
`

const H1 = styled.h1`
  font-weight: 600;
  font-size: 24px;
  color: #202020;
  margin-bottom: 15px;
`

export default Table
