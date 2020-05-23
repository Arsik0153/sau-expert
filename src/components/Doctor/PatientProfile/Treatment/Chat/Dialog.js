import React from 'react'
import styled from 'styled-components'
import History from './History'

const Dialog = (props) => {
  return (
    <Container>
      <History id={props.id} />
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: calc(100% - 80px);
`

export default Dialog
