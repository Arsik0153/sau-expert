import React from 'react'
import styled from 'styled-components'
import * as Yup from 'yup'
import { Formik, Form, Field } from 'formik'
import close from './../../../assets/close.svg'

const formSchema = Yup.object().shape({
  glucose: Yup.string()
    .min(1, 'Поле не может быть пустым')
    .max(500, 'Слишком большой текст')
    .required('Заполните поле'),
})

const Glucose = ({ closeModal }) => {
  const handleSubmit = (values) => {
    console.log(values)
    alert('Submit')
  }

  return (
    <Box>
      <H2>Замер глюкозы</H2>
      <Date>8 ноября 2019, 10:00</Date>
      <Close src={close} alt="Close" onClick={() => closeModal()} />
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
            <label>Показатель глюкозы в крови</label>
            <Field name="glucose" placeholder="Введите значение" type="text" />

            {props.errors.glucose && (
              <div className="field-error">{props.errors.glucose}</div>
            )}

            <button type="submit">Сохранить</button>
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
  height: fit-content;
  position: relative;
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
  color: #202020;
`
const Close = styled.img`
  position: absolute;
  right: 0px;
  top: 10px;
  cursor: pointer;
`
const Date = styled.p`
  font-size: 18px;
  color: #333333;
  padding: 20px 0;
`

export default Glucose
