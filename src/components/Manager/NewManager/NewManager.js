import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import * as Yup from 'yup'
import { Formik, Form, Field } from 'formik'
import { Link } from 'react-router-dom'
import Dropzone from 'react-dropzone'
import upload from './../../../assets/upload.svg'
import { connect } from 'react-redux'
import Preloader from './../../helpers/Preloader'
import ManagerList from './ManagerList'
import {
  newManager,
  getManagers,
} from './../../../redux/actions/newManagerActions'

const formSchema = Yup.object().shape({
  email: Yup.string()
    .required('Заполните поле Email')
    .email('Введите корректный email'),
  password: Yup.string()
    .required('Заполните поле пароль')
    .min(6, 'Пароль должен содержать минимум 6 символов'),
  passwordConfirmation: Yup.string()
    .required('Подтвердите пароль')
    .oneOf([Yup.ref('password'), null], 'Пароли должны совпадать'),
  lastName: Yup.string().required('Введите фамилию'),
  firstName: Yup.string().required('Введите имя'),
  patronymic: Yup.string(),
  avatar: Yup.array(),
})

let token = localStorage.getItem('token')

const NewManager = (props) => {
  const handleSubmit = (values) => {
    let request = {
      email: values.email,
      password: values.password,
      last_name: values.lastName,
      first_name: values.firstName,
      patronymic: values.patronymic,
      avatar: values.avatar[0],
      is_active: 1,
    }
    props.newManager(request)
  }
  const [fileNames, setFileNames] = useState([])

  const [error, setError] = useState([])
  useEffect(() => {
    let errs = []
    if (!props.newManagerInfo.error) return
    for (let err in props.newManagerInfo.error.data) {
      errs.push(props.newManagerInfo.error.data[err][0])
    }
    setError(errs)
  }, [props.newManagerInfo.error])

  const [status, setStatus] = useState('')
  useEffect(() => {
    if (props.newManagerInfo.status === 'success') {
      document.location.reload(true)
    }
    setStatus(props.newManagerInfo.status)
  }, [props.newManagerInfo.status])

  useEffect(() => {
    if (token === null) {
      document.location.reload(true)
    } else {
      props.getManagers(token)
    }
  }, [])

  const handleDrop = (accepted, rejected, setFieldValue) => {
    setFileNames(accepted.map((file) => file.name))
    /*setFieldValue('avatar', accepted)
    console.log(props.auth.key)*/
  }

  return (
    <Container>
      <Card>
        <div className="flex">
          <H3>Регистрация нового менеджера</H3>
          <Link to="/manager/main">Вернуться назад</Link>
        </div>

        <Formik
          initialValues={{
            email: '',
            password: '',
            passwordConfirmation: '',
            lastName: '',
            firstName: '',
            patronymic: '',
            avatar: [],
          }}
          validationSchema={formSchema}
          onSubmit={(values) => handleSubmit(values)}
          validateOnChange={false}
          validateOnBlur={false}
        >
          {(props) => (
            <Form className="form-container">
              <Grid>
                <label>Фамилия</label>
                <Field name="lastName" placeholder="Иванов" type="text" />
                <label>Имя</label>
                <Field name="firstName" placeholder="Иван" type="text" />
                <label>Отчество</label>
                <Field name="patronymic" placeholder="Иванович" type="text" />
                <label>Фото</label>
                <div>
                  <Dropzone
                    onDrop={(accepted, rejected) => {
                      handleDrop(accepted, rejected, props.setFieldValue)
                    }}
                    accept="image/*"
                    minSize={1024}
                    maxSize={3072000}
                    multiple={false}
                  >
                    {({
                      getRootProps,
                      getInputProps,
                      isDragActive,
                      isDragAccept,
                      isDragReject,
                    }) => {
                      const additionalClass = isDragAccept
                        ? 'accept'
                        : isDragReject
                        ? 'reject'
                        : ''

                      return (
                        <div
                          {...getRootProps({
                            className: `dropzone ${additionalClass}`,
                          })}
                        >
                          {isDragActive ? (
                            <p>Перетащите сюда файл</p>
                          ) : (
                            <>
                              <input {...getInputProps()} />
                              <img src={upload} alt="Upload" />
                              <p>Прикрепить файл</p>
                            </>
                          )}
                        </div>
                      )
                    }}
                  </Dropzone>
                  <div>
                    {fileNames.map((fileName) => (
                      <p key={fileName}>{fileName}</p>
                    ))}
                  </div>
                </div>
                <label>Email</label>
                <Field
                  name="email"
                  placeholder="example@user.com"
                  type="email"
                />
                <label>Пароль</label>
                <Field name="password" placeholder="********" type="password" />
                <label>Подтвердите пароль</label>
                <Field
                  name="passwordConfirmation"
                  placeholder="********"
                  type="password"
                />
              </Grid>

              {Object.keys(props.errors).length > 0 && (
                <div className="field-error">
                  {props.errors.email && (
                    <>
                      {props.errors.email}
                      <br />
                    </>
                  )}
                  {props.errors.password && (
                    <>
                      <br />
                      {props.errors.password}
                    </>
                  )}
                  {props.errors.passwordConfirmation && (
                    <>
                      <br />
                      {props.errors.passwordConfirmation}
                    </>
                  )}
                  {props.errors.lastName && (
                    <>
                      <br />
                      {props.errors.lastName}
                    </>
                  )}
                  {props.errors.firstName && (
                    <>
                      <br />
                      {props.errors.firstName}
                    </>
                  )}
                  {props.errors.patronymic && (
                    <>
                      <br />
                      {props.errors.patronymic}
                    </>
                  )}
                  {props.errors.avatar && (
                    <>
                      <br />
                      {props.errors.avatar}
                    </>
                  )}
                </div>
              )}
              {status === 'error' && (
                <div className="field-error">
                  {error.map((err) => {
                    return err
                  })}
                </div>
              )}
              {status === 'pending' ? (
                <div className="preloader-container">
                  <Preloader />
                </div>
              ) : (
                <button type="submit">Зарегистрироваться</button>
              )}
            </Form>
          )}
        </Formik>
        <ManagerList info={props.getManagersInfo.info.results} />
      </Card>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .dropzone {
    border: 2px solid #57c3a7;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
    color: #57c3a7;
    cursor: pointer;
    height: 52px;
    img {
      margin-right: 15px;
    }
    p {
      margin: 0;
    }
  }
  .accept {
    border-color: #107c10 !important;
    border: 2px dashed #57c3a7;
  }
`
const Card = styled.div`
  max-width: 800px;
  width: 100%;
  padding: 30px 55px;
  border-radius: 5px;
  background: #fff;
  margin: 40px 0;
  input,
  select {
    width: 100%;
    background: #ffffff;
    border: 1px solid rgba(31, 32, 65, 0.25);
    box-sizing: border-box;
    border-radius: 4px;
    padding: 16px 20px;
    font-size: 16px;
    color: #000;
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
    margin-top: 25px;
    outline: none;
    font-family: 'Source Sans Pro', sans-serif;
    cursor: pointer;
  }
  label {
    font-size: 16px;
    color: #333333;
    font-weight: 600;
  }
  .field-error {
    width: 100%;
    padding: 20px 15px;
    color: white;
    background: #f47775;
    font-weight: 300;
    margin-top: 20px;
    border-radius: 4px;
  }
  .flex {
    display: flex;
    justify-content: space-between;
    a {
      text-decoration: underline;
      font-size: 16px;
      color: #57c3a7;
      margin-top: 10px;
    }
  }
  p {
    margin-bottom: 20px;
  }
  br:first-child {
    display: none;
  }
  .preloader-container {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 10px;
  }
`
const H3 = styled.h3`
  font-weight: 600;
  font-size: 20px;
  color: #202020;
  margin-bottom: 20px;
`
const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(4, 0px 52px);
  grid-gap: 30px;
  grid-auto-flow: column;
`

const mapStateToProps = (state) => {
  return {
    newManagerInfo: state.newManagerInfo,
    getManagersInfo: state.getManagersInfo,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    newManager: (values) => {
      dispatch(newManager(values))
    },
    getManagers: (values) => {
      dispatch(getManagers(values))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewManager)
