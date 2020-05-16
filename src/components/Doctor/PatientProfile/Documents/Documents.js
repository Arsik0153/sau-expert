import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Dropzone from 'react-dropzone'
import upload from './../../../../assets/upload.svg'
import Table from './Table'
import { connect } from 'react-redux'
import { getDocuments } from '../../../../redux/actions/doctor/documents'
import Preloader from '../../../helpers/Preloader'

const Documents = (props) => {
  const [fileNames, setFileNames] = useState([])
  const handleDrop = (accepted) => {
    setFileNames(accepted.map((file) => file.name))
  }
  let token = localStorage.getItem('token')
  useEffect(() => {
    props.getDocuments({
      id: props.id,
      token,
    })
  }, [])

  return (
    <Container>
      <div className="flex">
        <div></div>
        <div>
          <Dropzone
            onDrop={(accepted) => {
              handleDrop(accepted)
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
                      <p>Загрузить файл</p>
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
const mapStateToProps = (state) => {
  return {
    getDocumentsInfo: state.getDocumentsInfo,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getDocuments: (values) => {
      dispatch(getDocuments(values))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Documents)
