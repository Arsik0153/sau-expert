import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import DatePicker from 'react-datepicker'
import { connect } from 'react-redux'
import {
  newSchedule,
  getSchedule,
  deleteSchedule,
  editSchedule,
} from '../../../../../redux/actions/doctor/schedule'
import Preloader from './../../../../helpers/Preloader'
import deleteRed from '../../../../../assets/delete-red.svg'
import editGreen from '../../../../../assets/editGreen.svg'
import Modal from 'react-modal'
import close from './../../../../../assets/close.svg'

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
    width: '450px',
    position: 'relative !important',
    maxWidth: '500px',
    margin: '0 auto',
    top: '0 !important',
    left: '0 !important',
    right: '0 !important',
    bottom: '0 !important',
    position: 'static',
    padding: '30px',
    overflow: 'none',
  },
}

const Food = (props) => {
  let token = localStorage.getItem('token')
  const [time, setTime] = useState('')
  const [name, setName] = useState('')
  const handleSubmit = () => {
    let values = {
      id: props.id,
      token,
      request: {
        category: 1,
        title: name,
        time,
      },
    }
    props.newSchedule(values)
    setTimeout(() => {
      props.getSchedule({
        id: props.id,
        token,
      })
    }, 100)
  }

  useEffect(() => {
    props.getSchedule({
      id: props.id,
      token,
    })
  }, [])

  //DELETE
  const [delId, setDelId] = useState('')
  const [delModalOpen, setDelModalOpen] = useState(false)
  const handleDelete = () => {
    let values = {
      id: props.id,
      token,
      scheduleId: delId,
    }
    props.deleteSchedule(values)
  }
  useEffect(() => {
    if (props.deleteScheduleInfo.status === 'success') {
      setDelModalOpen(false)
      props.getSchedule({
        id: props.id,
        token,
      })
    }
  }, [props.deleteScheduleInfo.status])

  //EDIT
  const [editData, setEditData] = useState({ id: '', title: '', time: '' })
  const [editModalOpen, setEditModalOpen] = useState(false)
  const handleEdit = () => {
    let request = {
      id: props.id,
      token,
      scheduleId: editData.id,
      request: {
        id: editData.id,
        category: 1,
        title: editData.title,
        time: editData.time,
      },
    }
    props.editSchedule(request)
  }
  useEffect(() => {
    if (props.editScheduleInfo.status === 'success') {
      setEditModalOpen(false)
      props.getSchedule({
        id: props.id,
        token,
      })
    }
  }, [props.editScheduleInfo.status])

  return (
    <Container>
      <Modal
        isOpen={delModalOpen}
        onRequestClose={() => setDelModalOpen(false)}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <ModalContainer>
          <H2>Удаление приема пищи</H2>
          <Close
            src={close}
            alt="Close"
            onClick={() => setDelModalOpen(false)}
          />
          <label>Вы уверены что хотите удалить этот прием пищи?</label>
          {props.deleteScheduleInfo.status === 'pending' ? (
            <div className="preloader-container">
              <Preloader />
            </div>
          ) : (
            <button type="submit" onClick={() => handleDelete()}>
              Да, удалить
            </button>
          )}
        </ModalContainer>
      </Modal>
      <Modal
        isOpen={editModalOpen}
        onRequestClose={() => setEditModalOpen(false)}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <ModalContainer>
          <H2>Редактирование режима</H2>
          <Close
            src={close}
            alt="Close"
            onClick={() => setEditModalOpen(false)}
          />
          {props.editScheduleInfo.status === 'pending' ? (
            <div className="preloader-container">
              <Preloader />
            </div>
          ) : (
            <>
              <div className="grid">
                <div>
                  <label>Прием пищи</label>
                  <input
                    type="text"
                    placeholder="Завтрак"
                    value={editData.title}
                    onChange={(e) =>
                      setEditData({ ...editData, title: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label>Время</label>
                  <input
                    type="time"
                    value={editData.time}
                    onChange={(e) =>
                      setEditData({ ...editData, time: e.target.value })
                    }
                    placeholder="09:00"
                  />
                </div>
              </div>
              <button type="submit" onClick={() => handleEdit()}>
                Сохранить
              </button>
            </>
          )}
        </ModalContainer>
      </Modal>
      <H3>Прием пищи</H3>
      <div className="grid">
        <div>
          <label>Прием пищи</label>
          <input
            type="text"
            placeholder="Завтрак"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Время</label>
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            placeholder="09:00"
          />
        </div>
        <Plus onClick={() => handleSubmit()}>+</Plus>
      </div>
      {props.getScheduleInfo.status !== 'success' ? (
        <div className="preloader-container">
          <Preloader />
        </div>
      ) : (
        <Table>
          <tbody>
            <tr>
              <td>Название</td>
              <td>Дата начала</td>
              <td></td>
            </tr>
            {props.getScheduleInfo.info.map(
              (res) =>
                res.category === 1 && (
                  <tr key={res.id}>
                    <td>{res.title}</td>
                    <td>{res.time}</td>
                    <td style={{ width: '55px' }}>
                      <img
                        src={editGreen}
                        alt="Edit"
                        onClick={() => {
                          setEditData({
                            ...editData,
                            id: res.id,
                            title: res.title,
                            time: res.time,
                          })
                          setEditModalOpen(true)
                        }}
                      />
                      <img
                        src={deleteRed}
                        alt="Delete"
                        onClick={() => {
                          setDelId(res.id)
                          setDelModalOpen(true)
                        }}
                      />
                    </td>
                  </tr>
                )
            )}
          </tbody>
        </Table>
      )}
    </Container>
  )
}

const Container = styled.div`
  select,
  input,
  textarea {
    width: 100%;
    height: 46px;
    background: #ffffff;
    border: 1px solid rgba(31, 32, 65, 0.25);
    box-sizing: border-box;
    border-radius: 4px;
    padding: 13px 10px;
    font-size: 16px;
    color: #000;
    margin: 10px 0 10px 0;
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
    padding: 15px 0;
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
    display: inline-block;
    margin-top: 15px;
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
  select {
    background: #ffffff;
    appearance: none;
  }
  .grid {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: 3fr 2fr 46px !important;
  }
`
const H3 = styled.h3`
  font-weight: 600;
  font-size: 24px;
  color: #202020;
`
const Table = styled.table`
  width: 100%;
  margin-top: 20px;
  border-collapse: collapse;
  tr {
    padding: 17px 0 17px 0;
    font-size: 16px;
    color: #202020;
    border-bottom: 2px solid rgba(31, 32, 65, 0.1);
    p {
      color: #57c3a7;
    }
    a {
      text-decoration-line: underline;
      color: #57c3a7;
    }
    :first-child {
      font-weight: 600;
    }
    :last-child {
      border-bottom: none;
    }
    td {
      padding: 14px 0;
      max-width: 300px;
      img {
        margin: 0 7px;
        cursor: pointer;
      }
    }
  }
`
const Plus = styled.button`
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #57c3a7;
  border-radius: 10px;
  height: 46px;
  align-self: end;
  margin-bottom: 10px;
  font-weight: 500;
  font-size: 36px;
  color: #ffffff;
  padding-bottom: 20px;
  cursor: pointer;
`
const Close = styled.img`
  position: absolute;
  right: 0px;
  top: 7px;
  cursor: pointer;
`
const H2 = styled.h2`
  font-weight: 600;
  font-size: 24px;
  color: #202020;
`
const ModalContainer = styled.div`
  position: relative;
  button[type='submit'] {
    width: 100%;
    background: #57c3a7;
    border-radius: 4px;
    font-size: 16px;
    color: #ffffff;
    padding: 15px 0;
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
    display: inline-block;
    margin-top: 15px;
  }
  .preloader-container {
    display: flex;
    justify-content: center;
  }
  select,
  input,
  textarea {
    width: 100%;
    background: #ffffff;
    border: 1px solid rgba(31, 32, 65, 0.25);
    box-sizing: border-box;
    border-radius: 4px;
    padding: 13px 10px;
    font-size: 16px;
    color: #000;
    margin: 10px 0 10px 0;
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
  .grid {
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-gap: 30px;
  }
`

const mapStateToProps = (state) => {
  return {
    newScheduleInfo: state.newScheduleInfo,
    getScheduleInfo: state.getScheduleInfo,
    deleteScheduleInfo: state.deleteScheduleInfo,
    editScheduleInfo: state.editScheduleInfo,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    newSchedule: (values) => {
      dispatch(newSchedule(values))
    },
    getSchedule: (values) => {
      dispatch(getSchedule(values))
    },
    deleteSchedule: (values) => {
      dispatch(deleteSchedule(values))
    },
    editSchedule: (values) => {
      dispatch(editSchedule(values))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Food)
