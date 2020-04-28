import React from 'react'
import styled from 'styled-components'
import * as Yup from 'yup'
import { Formik, Form, Field } from 'formik'

const formSchema = Yup.object().shape({
  comment: Yup.string()
    .min(1, 'Поле не может быть пустым')
    .max(2000, 'Слишком большой текст')
    .required('Заполните поле'),
})

const Main = () => {
  const handleSubmit = (values) => {
    console.log(values)
    alert('Submit')
  }

  return (
    <Container>
      <H1>Жалобы</H1>
      <Grid>
        <Box style={{ padding: '30px' }}>
          <H2>Что вас беспокоит?</H2>
          <Formik
            initialValues={{
              comment: '',
            }}
            validationSchema={formSchema}
            onSubmit={(values) => handleSubmit(values)}
          >
            {(props) => (
              <Form className="form-container">
                <Field
                  name="comment"
                  placeholder="Комментарии"
                  type="text"
                  as="textarea"
                />

                {props.errors.comment && props.touched.comment && (
                  <div className="field-error">{props.errors.comment}</div>
                )}

                <button type="submit">Submit</button>
              </Form>
            )}
          </Formik>
        </Box>
        <Box>
          <H2 style={{ textAlign: 'left', padding: '30px 40px' }}>
            Ваши жалобы
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
                    <a href="/#">
                      Принять 30 единиц быстродействующего инсулина
                    </a>
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
    </Container>
  )
}

const Container = styled.div`
  grid-area: main;
`
const H1 = styled.h1`
  font-weight: 600;
  font-size: 38px;
  color: #202020;
  margin: 50px 0 45px 50px;
`
const Grid = styled.div`
  display: grid;
  grid-template-columns: 340px 1fr;
  padding: 0 50px;
  padding-bottom: 50px;
  grid-gap: 30px;
`
const Box = styled.div`
  background: #ffffff;
  box-shadow: 0px 10px 20px rgba(31, 32, 65, 0.05);
  border-radius: 4px;
  height: fit-content;
  textarea {
    width: 100%;
    background: #ffffff;
    border: 1px solid #e9eff4;
    box-sizing: border-box;
    border-radius: 4px;
    padding: 16px 20px;
    font-size: 16px;
    color: #000;
    margin-top: 20px;
    outline: none;
    resize: none;
    height: 280px;
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

export default Main
