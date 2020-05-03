import React, { useState } from 'react'
import styled from 'styled-components'
import Info from './Info'
import Graph from './Graph'
import Modal from 'react-modal'
import SubControl from './SubControl'
import PatientDoctors from './PatientDoctors'

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

const Main = () => {
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
          <SubControl closeModal={() => setIsOpen(false)} />
        )}
        {type === 'patientdoctors' && (
          <PatientDoctors closeModal={() => setIsOpen(false)} />
        )}
      </Modal>

      <div className="flex">
        <H1>Иван Иванов Иванович</H1>
        <div>
          <Button onClick={(e) => openModal('subcontrol')}>
            Управление подпиской
          </Button>
          <Button onClick={(e) => openModal('patientdoctors')}>
            Прикрепить к врачу
          </Button>
          <Button>Назначить прием</Button>
        </div>
      </div>
      <Info />
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
`

export default Main
