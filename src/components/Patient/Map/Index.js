import React from 'react'
import styled from 'styled-components'
import * as Yup from 'yup'
import { Formik, Form, Field } from 'formik'

const formSchema = Yup.object().shape({
  weight: Yup.number('sdaf')
    .typeError('Значение обязательно должно быть цифрой')
    .positive('Масса должна быть больше нуля')
    .required('Это поле обязательное')
    .min(1, 'Масса должна быть больше нуля'),
})

const Index = () => {
  const handleSubmit = (values) => {
    console.log(values)
    alert('Submit')
  }

  return (
    <Box style={{ padding: '30px' }}>
      <H2 style={{ marginBottom: '30px' }}>ИМТ</H2>
      <Formik
        initialValues={{
          weight: '',
        }}
        validationSchema={formSchema}
        onSubmit={(values) => handleSubmit(values)}
        validateOnChange={false}
        validateOnBlur={false}
      >
        {(props) => (
          <Form className="form-container">
            <label>Ваш вес</label>
            <Field name="weight" placeholder="Введите значение" type="text" />

            {props.errors.weight && props.touched.weight && (
              <div className="field-error">{props.errors.weight}</div>
            )}

            <button type="submit">Рассчитать</button>
            <p>Ваш ИМТ - 24</p>
          </Form>
        )}
      </Formik>
    </Box>
  )
}

const Box = styled.div`
  background: #ffffff;
  box-shadow: 0px 10px 20px rgba(31, 32, 65, 0.05);
  border-radius: 4px;
  width: 340px;
  margin: 50px;
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
  p {
    text-align: center;
    font-size: 16px;
    color: #333333;
    margin-top: 20px;
  }
`
const H2 = styled.h2`
  font-weight: 600;
  font-size: 24px;
  text-align: center;
  color: #202020;
`

export default Index
