import React from 'react'
import styled from 'styled-components'
import logo from './../../assets/logo.svg'
import * as Yup from 'yup'
import { Formik, Form, Field } from 'formik'
import { Link } from 'react-router-dom'

const formSchema = Yup.object().shape({
  email: Yup.string()
    .required('Заполните поле Email')
    .email('Введите корректный email'),
})

const Restore = () => {
  const handleSubmit = (values) => {
    console.log(values)
    alert('Submit')
  }

  return (
    <Container>
      <Card>
        <Logo src={logo} alt="SAU Expert" />
        <H3>Восстановление пароля</H3>
        <p>
          Введите Email, указанный в Вашем профиле, и мы отправим на него новый
          пароль
        </p>
        <Formik
          initialValues={{
            email: '',
          }}
          validationSchema={formSchema}
          onSubmit={(values) => handleSubmit(values)}
          validateOnChange={false}
          validateOnBlur={false}
        >
          {(props) => (
            <Form className="form-container">
              <label>Email</label>
              <Field name="email" placeholder="example@user.com" type="email" />

              {props.touched.email && props.errors.email && (
                <div className="field-error">{props.errors.email}</div>
              )}

              <button type="submit">Отправить</button>
            </Form>
          )}
        </Formik>
        <div className="flex">
          <Link to="/">Войти</Link>
          <Link to="/register">Регистрация</Link>
        </div>
      </Card>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Card = styled.div`
  max-width: 470px;
  width: 100%;
  padding: 50px 55px;
  border-radius: 5px;
  background: #fff;
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
      font-weight: 300;
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
    cursor: pointer;
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
  .flex {
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
    a {
      text-decoration: underline;
      font-size: 16px;
      color: #57c3a7;
    }
  }
  p {
    margin-bottom: 20px;
  }
`
const Logo = styled.img`
  width: 150px;
  display: block;
  margin: 0 auto;
`
const H3 = styled.h3`
  font-weight: 600;
  font-size: 20px;
  color: #202020;
  margin-top: 20px;
  margin-bottom: 20px;
`

export default Restore
