import React from 'react'
import styled from 'styled-components'
import * as Yup from 'yup'
import { Formik, Form, Field } from 'formik'

const formSchema = Yup.object().shape({
  glucose: Yup.string()
    .min(1, 'Поле не может быть пустым')
    .max(500, 'Слишком большой текст')
    .required('Заполните поле'),
})

const Glucose = () => {
  const handleSubmit = (values) => {
    console.log(values)
    alert('Submit')
  }

  return (
    <Grid>
      <Box style={{ padding: '30px' }}>
        <H2 style={{ marginBottom: '30px' }}>Показатель глюкозы в крови</H2>
        <Formik
          initialValues={{
            glucose: '',
          }}
          validationSchema={formSchema}
          onSubmit={(values) => handleSubmit(values)}
          validateOnChange={false}
          validateOnBlur={false}
        >
          {(props) => (
            <Form className="form-container">
              <Field name="sad" placeholder="Введите значение" type="text" />

              {props.errors.glucose && props.touched.glucose && (
                <div className="field-error">{props.errors.glucose}</div>
              )}

              <button type="submit">Сохранить</button>
            </Form>
          )}
        </Formik>
      </Box>
      <Box>
        <H2 style={{ textAlign: 'left', padding: '30px 40px' }}>
          Сегодняшние замеры
        </H2>
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
            </tbody>
          </table>
        </Scroll>
      </Box>
    </Grid>
  )
}
const Grid = styled.div`
  display: grid;
  grid-template-columns: 340px 1fr;
  padding: 50px 50px;
  grid-gap: 30px;
`
const Box = styled.div`
  background: #ffffff;
  box-shadow: 0px 10px 20px rgba(31, 32, 65, 0.05);
  border-radius: 4px;
  height: fit-content;
  input {
    width: 100%;
    background: #ffffff;
    border: 1px solid rgba(31, 32, 65, 0.25);
    box-sizing: border-box;
    border-radius: 4px;
    padding: 16px 20px;
    font-size: 16px;
    color: #000;
    margin: 10px 0 20px 0;
    outline: none;
    resize: none;
    :focus {
      border: 1px solid #57c3a7;
    }
    ::placeholder {
      color: #bdbdbd;
    }
  }
  button[type='submit'] {
    width: 100%;
    background: #57c3a7;
    border-radius: 4px;
    font-size: 16px;
    color: #ffffff;
    padding: 20px 0;
    border: none;
    margin-top: 15px;
    outline: none;
    font-family: 'Source Sans Pro', sans-serif;
  }
  label {
    font-size: 16px;
    color: #333333;
    font-weight: 400;
    padding-left: 18px;
  }
  .field-error {
    width: 100%;
    padding: 20px 15px;
    color: white;
    background: #f47775;
    font-weight: 300;
    margin-top: 10px;
    border-radius: 4px;
  }
`
const H2 = styled.h2`
  font-weight: 600;
  font-size: 24px;
  text-align: center;
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

export default Glucose
