import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import MsgMy from './MsgMy'
import MsgOther from './MsgOther'
import { connect } from 'react-redux'
import { getHistory } from '../../../../../redux/actions/doctor/getHistory'
import Preloader from '../../../../helpers/Preloader'

const History = (props) => {
  const chat = useRef()
  useEffect(() => {
    chat.current.scrollTop += chat.current.scrollHeight
  }, [props])
  let user = JSON.parse(localStorage.getItem('user'))

  let token = localStorage.getItem('token')
  useEffect(() => {
    props.getHistory({ id: props.id, token })
  }, [])
  return (
    <Container ref={chat}>
      {props.getHistoryInfo.status !== 'success' ? (
        <div className="preloader-container">
          <Preloader />
        </div>
      ) : (
        props.getHistoryInfo.info.results.map((result) =>
          result.doctor.id === user.id ? (
            <MsgMy
              key={result.id}
              text={result.text}
              time={new Date(result.created_at).toLocaleDateString('ru-RU')}
              src="https://sun9-72.userapi.com/c857632/v857632437/1eb217/Yy_HgWS2HXo.jpg"
            />
          ) : (
            <MsgOther
              key={result.id}
              text={result.text}
              time={new Date(result.created_at).toLocaleDateString('ru-RU')}
              src="https://sun9-62.userapi.com/c857724/v857724931/1e6422/xUHjNVxZdvo.jpg"
            />
          )
        )
      )}
    </Container>
  )
}

const Container = styled.div`
  height: 100%;
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 4px;
  }
  ::-webkit-scrollbar-track {
    background: #c5c5c5;
  }
  ::-webkit-scrollbar-thumb {
    background: #57c3a7;
    border-radius: 2px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #458f7c;
  }
`

const mapStateToProps = (state) => {
  return {
    getHistoryInfo: state.getHistoryInfo,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getHistory: (values) => {
      dispatch(getHistory(values))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(History)
