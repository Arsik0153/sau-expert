import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Info from './Info'
import Graph from './Graph'
import Modal from 'react-modal'
import SubControl from './SubControl'
import PatientDoctors from './PatientDoctors'
import Appointment from './Appointment'
import { viewPatient } from './../../../redux/actions/viewPatientActions'
import { connect } from 'react-redux'

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
    overflow: 'none',
  },
}

const Main = (props) => {
  let token = localStorage.getItem('token')
  useEffect(() => {
    let request = {
      token: token,
      id: props.id,
    }
    console.log(request)
    props.viewPatient(request)
  }, [])

  const [modalIsOpen, setIsOpen] = React.useState(false)
  const [type, setType] = React.useState('')

  const openModal = (type) => {
    setType(type)
    setIsOpen(true)
  }

  return (
    <Container>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setIsOpen(false)}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {type === 'subcontrol' && (
          <SubControl
            closeModal={() => setIsOpen(false)}
            beginDate={
              props.patientInfo.info.subscribe
                ? props.patientInfo.info.subscribe.begin_date
                : new Date()
            }
            endDate={
              props.patientInfo.info.subscribe
                ? props.patientInfo.info.subscribe.end_date
                : new Date()
            }
            name={`${props.patientInfo.info.first_name} ${props.patientInfo.info.last_name} ${props.patientInfo.info.patronymic}`}
            id={props.patientInfo.info.id}
          />
        )}
        {type === 'patientdoctors' && (
          <PatientDoctors closeModal={() => setIsOpen(false)} />
        )}
        {type === 'appointment' && (
          <Appointment closeModal={() => setIsOpen(false)} />
        )}
      </Modal>

      <div className="flex">
        <H1>{`${props.patientInfo.info.first_name} ${props.patientInfo.info.last_name}`}</H1>
        <div>
          <Button onClick={(e) => openModal('subcontrol')}>
            Управление подпиской
          </Button>
          <Button onClick={(e) => openModal('patientdoctors')}>
            Прикрепить к врачу
          </Button>
          <Button onClick={(e) => openModal('appointment')}>
            Назначить прием
          </Button>
        </div>
      </div>
      <Info info={props.patientInfo.info} />
      <Graph />
    </Container>
  )
}

const Container = styled.div`
  grid-area: main;
  .flex {
    display: flex;
    justify-content: space-between;
    margin: 50px 50px 30px 50px;
  }
`
const H1 = styled.h1`
  font-weight: 600;
  font-size: 38px;
  color: #202020;
`
const Button = styled.button`
  padding: 20px 25px;
  font-weight: 400;
  font-size: 14px;
  background: #57c3a7;
  border-radius: 4px;
  color: #fff;
  border: none;
  cursor: pointer;
  margin-left: 10px;
  outline: none;
`

const mapStateToProps = (state) => {
  return {
    patientInfo: state.patientInfo,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    viewPatient: (values) => {
      dispatch(viewPatient(values))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
