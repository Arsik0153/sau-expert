import React from 'react'
import styled from 'styled-components'
import History from './History'

const Dialog = () => {
  return (
    <Container>
      <History />
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: calc(100% - 92px);
`

export default Dialog
