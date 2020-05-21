import React from 'react'
import styled from 'styled-components'
import History from './History'

const Dialog = (props) => {
  return (
    <Container>
      <History list={props.list} myId={props.myId} />
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: calc(80% - 92px);
`

export default Dialog
