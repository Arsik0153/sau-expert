import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import logo from './../../assets/logo.svg'
import * as Yup from 'yup'
import { Formik, Form, Field } from 'formik'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { confirm } from './../../redux/actions/confirmActions'
import Preloader from './../helpers/Preloader'

const formSchema = Yup.object().shape({
  code: Yup.string()
    .required('Напишите код из вашего письма')
    .min(6, 'Введите корректный код')
    .max(6, 'Введите корректный код'),
})

const Confirm = (props) => {
  const handleSubmit = (values) => {
    let request = {
      code: values.code,
      session_key: props.session_key,
    }
    props.confirm(request)
  }
  const [status, setStatus] = useState(props.confirm.status)
  useEffect(() => {
    setStatus(props.status)
    console.log(props)
  }, [props.status])

  return (
    <Container>
      <Card>
        <Logo src={logo} alt="SAU Expert" />
        {status === 'success' ? (
          <>
            <H3>Вы успешно зарегистрированы</H3>
            <Link to="/">Войти </Link>
          </>
        ) : (
          <>
            <H3>Подтверждение регистрации</H3>
            <p>
              На Ваш Email {props.email} был отправлен код. Введите его в поле
              ниже.
            </p>
            <Formik
              initialValues={{
                code: '',
              }}
              validationSchema={formSchema}
              onSubmit={(values) => handleSubmit(values)}
              validateOnChange={false}
              validateOnBlur={false}
            >
              {(props) => (
                <Form className="form-container">
                  <label>Код подтверждения</label>
                  <Field name="code" placeholder="111111" type="text" />

                  {props.touched.code && props.errors.code && (
                    <div className="field-error">{props.errors.code}</div>
                  )}
                  {status === 'error' && (
                    <div className="field-error">Введённый код неверный</div>
                  )}
                  {status === 'pending' ? (
                    <div className="preloader-container">
                      <Preloader />
                    </div>
                  ) : (
                    <button type="submit">Отправить</button>
                  )}
                </Form>
              )}
            </Formik>
          </>
        )}
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
  .preloader-container {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 10px;
  }
  a {
    text-decoration: underline;
    font-size: 16px;
    color: #57c3a7;
  }
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

const mapStateToProps = (state) => {
  return {
    status: state.confirm.status,
    session_key: state.auth.key,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    confirm: (values) => {
      dispatch(confirm(values))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Confirm)
