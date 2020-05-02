import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import * as Yup from 'yup'
import { Formik, Form, Field } from 'formik'
import { Link } from 'react-router-dom'
import MaskedInput from 'react-text-mask'
import Dropzone from 'react-dropzone'
import upload from './../../assets/upload.svg'
import { connect } from 'react-redux'
import { register } from './../../redux/actions/authActions'
import Preloader from './../helpers/Preloader'
import Confirm from './Confirm'

const phoneNumberMask = [
  /\+/,
  /[1-9]/,
  '(',
  /[1-9]/,
  /\d/,
  /\d/,
  ')',
  ' ',
  /\d/,
  /\d/,
  /\d/,
  '-',
  /\d/,
  /\d/,
  /\d/,
  /\d/,
]
const birthDateMask = [/\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/]

const formSchema = Yup.object().shape({
  email: Yup.string()
    .required('Заполните поле Email')
    .email('Введите корректный email'),
  password: Yup.string()
    .required('Заполните поле пароль')
    .min(6, 'Пароль должен содержать минимум 6 символов'),
  passwordConfirmation: Yup.string().oneOf(
    [Yup.ref('password'), null],
    'Пароли должны совпадать'
  ),
  lastName: Yup.string().required('Введите фамилию'),
  firstName: Yup.string().required('Введите имя'),
  patronymic: Yup.string().required('Введите отчество'),
  sex: Yup.string().required('Введите пол'),
  birthDate: Yup.string().required('Введите дату рождения'),
  city: Yup.string().required('Выберите город'),
  address: Yup.string().required('Введите адрес'),
  phone: Yup.string()
    .required('Введите номер телефона')
    .min(12, 'Введите корректный номер телефона'),
  avatar: Yup.array(),
})

const Register = (props) => {
  const handleSubmit = (values) => {
    let request = {
      email: values.email,
      password: values.password,
      last_name: values.lastName,
      first_name: values.firstName,
      patronymic: values.patronymic,
      sex: values.sex,
      birth_date: values.birthDate,
      city: values.city,
      address: values.address,
      phone: values.phone,
      avatar: values.avatar[0],
    }
    setEmail(values.email)
    props.register(request)
  }
  const [fileNames, setFileNames] = useState([])
  const [email, setEmail] = useState('')
  const [error, setError] = useState(props.auth.error)
  useEffect(() => {
    setError(props.auth.error)
  }, [props.auth.error])

  const [status, setStatus] = useState('')
  useEffect(() => {
    setStatus(props.auth.status)
  }, [props.auth.status])

  const handleDrop = (accepted, rejected, setFieldValue) => {
    setFileNames(accepted.map((file) => file.name))
    setFieldValue('avatar', accepted)
    console.log(props.auth.key)
  }

  return (
    <Container>
      {status === 'success' ? (
        <Confirm email={email} />
      ) : (
        <Card>
          <div className="flex">
            <H3>Регистрация нового пациента</H3>
            <Link to="/">Вход</Link>
          </div>
          <Formik
            initialValues={{
              email: '',
              password: '',
              passwordConfirmation: '',
              lastName: '',
              firstName: '',
              patronymic: '',
              sex: '1',
              birthDate: '',
              city: '',
              address: '',
              phone: '',
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
                  <label>Email</label>
                  <Field
                    name="email"
                    placeholder="example@user.com"
                    type="email"
                  />
                  <label>Пароль</label>
                  <Field
                    name="password"
                    placeholder="********"
                    type="password"
                  />
                  <label>Подтвердите пароль</label>
                  <Field
                    name="passwordConfirmation"
                    placeholder="********"
                    type="password"
                  />
                  <label>Телефон</label>
                  <Field
                    name="phone"
                    render={({ field }) => (
                      <MaskedInput
                        {...field}
                        mask={phoneNumberMask}
                        placeholder="+7 777 777 77 77"
                        type="text"
                      />
                    )}
                  />
                  <label>Дата рождения</label>
                  <Field
                    name="birthDate"
                    render={({ field }) => (
                      <MaskedInput
                        {...field}
                        mask={birthDateMask}
                        placeholder="ГГГГ-ММ-ДД"
                        type="text"
                      />
                    )}
                  />
                  <label>Пол</label>
                  <Field name="sex" as="select" defaultValue={'init'}>
                    <option value="init">Выберите пол</option>
                    <option value="1">Мужской</option>
                    <option value="2">Женский</option>
                  </Field>
                  <label>Город</label>
                  <Field name="city" as="select">
                    <option selected="selected">Выберите город</option>
                    <option value="1">Нур-Султан</option>
                    <option value="2">Алматы</option>
                    <option value="3">Талдыкорган</option>
                    <option value="4">Кокшетау</option>
                    <option value="5">Степногорск</option>
                    <option value="6">Актобе</option>
                    <option value="7">Атырау</option>
                    <option value="8">Усть-Каменогорск</option>
                    <option value="9">Тараз</option>
                    <option value="10">Уральск</option>
                    <option value="11">Аксай</option>
                    <option value="12">Караганда</option>
                    <option value="13">Жезказган</option>
                    <option value="14">Балхаш</option>
                    <option value="15">Темиртау</option>
                    <option value="16">Костанай</option>
                    <option value="17">Рудный</option>
                    <option value="18">Кызылорда</option>
                    <option value="19">Актау</option>
                    <option value="20">Жанаозен</option>
                    <option value="21">Павлодар</option>
                    <option value="22">Экибастуз</option>
                    <option value="23">Петропавловск</option>
                    <option value="24">Шымкент</option>
                    <option value="25">Туркестан</option>
                    <option value="26">Семей</option>
                    <option value="27">Риддер</option>
                    <option value="28">Другой</option>
                  </Field>
                  <label>Адрес</label>
                  <Field
                    name="address"
                    placeholder="Бост. район, ул. Сатпаева"
                    type="text"
                  />
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
                    {props.errors.patrinymic && (
                      <>
                        <br />
                        {props.errors.patrinymic}
                      </>
                    )}
                    {props.errors.sex && (
                      <>
                        <br />
                        {props.errors.sex}
                      </>
                    )}
                    {props.errors.birthDate && (
                      <>
                        <br />
                        {props.errors.birthDate}
                      </>
                    )}
                    {props.errors.city && (
                      <>
                        <br />
                        {props.errors.city}
                      </>
                    )}
                    {props.errors.address && (
                      <>
                        <br />
                        {props.errors.address}
                      </>
                    )}
                    {props.errors.phone && (
                      <>
                        <br />
                        {props.errors.phone}
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
                  <div className="field-error">{error}</div>
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
        </Card>
      )}
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
const Logo = styled.img`
  width: 150px;
  display: block;
  margin: 0 auto;
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
  grid-template-rows: repeat(6, 0px 52px);
  grid-gap: 30px;
  grid-auto-flow: column;
`

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    register: (values) => {
      dispatch(register(values))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)
