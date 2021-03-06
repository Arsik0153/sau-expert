import React, { useEffect } from 'react'
import styled from 'styled-components'
import * as Yup from 'yup'
import { Formik, Form, Field } from 'formik'
import Modal from 'react-modal'
import Pressure from './Pressure'
import Glucose from './Glucose'
import Medicine from './Medicine'
import RateDoctor from './RateDoctor'
import { connect } from 'react-redux'
import {
  getIssues,
  newIssue,
} from './../../../redux/actions/patient/issuesActions'
import Preloader from './../../helpers/Preloader'

Modal.setAppElement('#root')

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: '1001',
  },
  content: {
    width: 'fit-content',
    maxWidth: '500px',
    margin: '0 auto',
    top: '0 !important',
    left: '0 !important',
    right: '0 !important',
    bottom: '0 !important',
    position: 'static',
    padding: '30px',
  },
}

const formSchema = Yup.object().shape({
  comment: Yup.string()
    .min(1, 'Поле не может быть пустым')
    .max(2000, 'Слишком большой текст')
    .required('Заполните поле'),
})

const Main = (props) => {
  let token = localStorage.getItem('token')
  const handleSubmit = (values) => {
    props.newIssue({
      text: values.comment,
      token,
    })
  }

  useEffect(() => {
    if (props.newIssueInfo.status === 'success') props.getIssues(token)
  }, [props.newIssueInfo.status])

  const [modalIsOpen, setIsOpen] = React.useState(false)
  const [type, setType] = React.useState('')

  const openModal = (type) => {
    setType(type)
    setIsOpen(true)
  }

  useEffect(() => {
    props.getIssues(token)
  }, [])

  return (
    <Container>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setIsOpen(false)}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {type === 'pressure' && (
          <Pressure closeModal={() => setIsOpen(false)} />
        )}
        {type === 'glucose' && <Glucose closeModal={() => setIsOpen(false)} />}
        {type === 'medicine' && (
          <Medicine closeModal={() => setIsOpen(false)} />
        )}
        {type === 'rate' && <RateDoctor closeModal={() => setIsOpen(false)} />}
      </Modal>

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
            validateOnChange={false}
            validateOnBlur={false}
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

                <button type="submit">Отправить</button>
              </Form>
            )}
          </Formik>
        </Box>
        <Box>
          <H2 style={{ textAlign: 'left', padding: '30px 40px' }}>
            Ваши жалобы
          </H2>
          {props.issues.status !== 'success' ? (
            <div className="preloader-container">
              <Preloader />
            </div>
          ) : (
            <>
              <Scroll>
                <table>
                  <tbody>
                    {props.issues.info &&
                      props.issues.info.map((issue) => (
                        <tr key={issue.id}>
                          <td>
                            <p onClick={(e) => openModal('glucose')}>
                              {issue.text}
                            </p>
                          </td>
                          <td>{issue.created_at}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </Scroll>
            </>
          )}
        </Box>
      </Grid>
    </Container>
  )
}

const Container = styled.div`
  grid-area: main;
  .preloader-container {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
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
      font-family: 'Source Sans Pro', sans-serif;
    }
  }
  button[type='submit'] {
    width: 100%;
    background: #57c3a7;
    border-radius: 4px;
    font-size: 16px;
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 300;
    color: #ffffff;
    padding: 20px 0;
    border: none;
    margin-top: 15px;
    outline: none;
    cursor: pointer;
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
      border-top: 1px solid rgba(31, 32, 65, 0.1);
      p {
        text-decoration: underline;
        color: #57c3a7;
        cursor: pointer;
      }
    }
  }
`

const mapStateToProps = (state) => {
  return {
    issues: state.issues,
    newIssueInfo: state.newIssueInfo,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getIssues: (values) => {
      dispatch(getIssues(values))
    },
    newIssue: (values) => {
      dispatch(newIssue(values))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
