import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Table from './Table'
import { connect } from 'react-redux'
import {
  getAnalysis,
  editAnalysis,
  newAnalysis,
} from '../../../../../redux/actions/doctor/analysis'
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

const Analysis = (props) => {
  let token = localStorage.getItem('token')
  useEffect(() => {
    props.getAnalysis({ id: props.id, token })
  }, [])

  const update = () => {
    setTimeout(() => {
      props.getAnalysis({ id: props.id, token })
    }, 200)
  }

  const toggleChecked = (newChecked, id, is_uploaded) => {
    if (!is_uploaded) return
    let values = {
      id: props.id,
      token,
      analysisId: id,
      request: {
        is_checked: newChecked,
      },
    }
    props.editAnalysis(values)
  }

  const [title, setTitle] = useState('')
  const handleSubmit = () => {
    let values = {
      id: props.id,
      token,
      request: {
        title,
      },
    }
    props.newAnalysis(values)
    update()
  }

  const [modalIsOpen, setIsOpen] = useState(false)
  const [activeId, setActiveId] = useState('')
  const openModal = (id, t) => {
    setIsOpen(true)
    setActiveId(id)
    setNewTitle(t)
  }
  const [newTitle, setNewTitle] = useState('')
  const editTitle = () => {
    let values = {
      id: props.id,
      token,
      analysisId: activeId,
      request: {
        title: newTitle,
      },
    }
    props.editAnalysis(values)
    update()
    setIsOpen(false)
    setNewTitle('')
  }

  return (
    <Container>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setIsOpen(false)}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <DocModal>
          <H2>Изменение анализа</H2>
          <Close src={close} alt="Close" onClick={() => setIsOpen(false)} />
          <label>Название</label>
          <input
            type="text"
            placeholder="Анализ крови"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <button type="submit" onClick={() => editTitle()}>
            Сохранить
          </button>
        </DocModal>
      </Modal>
      <Box>
        <H3>Назначение анализа</H3>
        <label>Название</label>
        <input
          type="text"
          placeholder="Анализ крови"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit" onClick={() => handleSubmit()}>
          Назначить
        </button>
      </Box>
      <Box>
        <Table
          info={props.getAnalysisInfo.info}
          toggleChecked={toggleChecked}
          openModal={openModal}
        />
      </Box>
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 350px 1fr;
  grid-gap: 30px;
  textarea,
  input {
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
    display: inline-block;
    margin-top: 15px;
  }
  textarea {
    height: 150px;
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
const Box = styled.div`
  background: #ffffff;
  box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.03);
  border-radius: 6px;
  padding: 30px;
  height: fit-content;
`
const H3 = styled.h3`
  font-weight: 600;
  font-size: 24px;
  color: #202020;
  margin-bottom: 20px;
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
const DocModal = styled.div`
  position: relative !important;
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
  }

  select:focus,
  input:focus,
  textarea:focus {
    border: 1px solid #57c3a7;
  }

  select::placeholder,
  input::placeholder,
  textarea::placeholder {
    color: #bdbdbd;
    font-weight: 300;
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
`

const mapStateToProps = (state) => {
  return {
    getAnalysisInfo: state.getAnalysisInfo,
    editAnalysisInfo: state.editAnalysisInfo,
    newAnalysisInfo: state.newAnalysisInfo,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAnalysis: (values) => {
      dispatch(getAnalysis(values))
    },
    editAnalysis: (values) => {
      dispatch(editAnalysis(values))
    },
    newAnalysis: (values) => {
      dispatch(newAnalysis(values))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Analysis)
