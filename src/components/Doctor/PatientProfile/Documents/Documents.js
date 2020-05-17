import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Dropzone from 'react-dropzone'
import upload from './../../../../assets/upload.svg'
import Table from './Table'
import { connect } from 'react-redux'
import {
  getDocuments,
  newDocument,
} from '../../../../redux/actions/doctor/documents'
import Preloader from '../../../helpers/Preloader'
import Modal from 'react-modal'
import close from './../../../../assets/close.svg'

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

const Documents = (props) => {
  const [fileNames, setFileNames] = useState([])
  const handleDrop = (accepted) => {
    setFileNames(accepted.map((file) => file))
    setTitle(accepted[0].name)
  }
  let token = localStorage.getItem('token')
  useEffect(() => {
    props.getDocuments({
      id: props.id,
      token,
    })
  }, [])

  const [modalIsOpen, setIsOpen] = useState(false)

  const [title, setTitle] = useState('')
  const handleSubmit = () => {
    let values = {
      id: props.id,
      token,
      request: {
        title,
        type: 1,
        file: fileNames[0],
      },
    }
    console.log(values.request)
    props.newDocument(values)
    setTimeout(() => {
      props.getDocuments({
        id: props.id,
        token,
      })
    }, 150)
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
          <H2>Загрузить документ</H2>
          <Close src={close} alt="Close" onClick={() => setIsOpen(false)} />
          <Dropzone
            onDrop={(accepted) => {
              handleDrop(accepted)
            }}
            accept="image/*,.pdf"
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
          <label>Наименование документа</label>
          <input
            type="text"
            placeholder="analiz.pdf"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label>Тип документа</label>
          <select>
            <option value="1">Анализ</option>
          </select>
          <button type="submit" onClick={() => handleSubmit()}>
            Сохранить
          </button>
        </DocModal>
      </Modal>
      <div className="flex">
        <div></div>
        <Button onClick={() => setIsOpen(true)}>Загрузить файл</Button>
      </div>
      {props.getDocumentsInfo.status !== 'success' ? (
        <div className="preloader-container">
          <Preloader />
        </div>
      ) : (
        <Table info={props.getDocumentsInfo.info.results} />
      )}
    </Container>
  )
}

const Container = styled.div`
  margin: 30px 50px;
  .flex {
    display: flex;
    justify-content: space-between;
  }
`
const H2 = styled.h2`
  font-weight: 600;
  font-size: 24px;
  color: #202020;
`
const Button = styled.div`
  border: 2px solid #57c3a7;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 30px;
  color: #57c3a7;
  cursor: pointer;
  height: 52px;
`
const Close = styled.img`
  position: absolute;
  right: 0px;
  top: 10px;
  cursor: pointer;
`
const DocModal = styled.div`
  position: relative !important;
  .dropzone {
    border: 2px solid #57c3a7;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 30px;
    color: #57c3a7;
    cursor: pointer;
    height: 52px;
    margin: 50px 0 30px 0;
  }
  .dropzone img {
    margin-right: 15px;
  }
  .dropzone p {
    margin: 0;
  }
  .accept {
    border-color: #107c10 !important;
    border: 2px dashed #57c3a7;
  }
  .ReactModal__Content {
    position: relative !important;
  }

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
    getDocumentsInfo: state.getDocumentsInfo,
    newDocument: state.newDocument,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getDocuments: (values) => {
      dispatch(getDocuments(values))
    },
    newDocument: (values) => {
      dispatch(newDocument(values))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Documents)
