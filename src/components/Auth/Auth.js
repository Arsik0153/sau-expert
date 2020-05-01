import React from 'react'
import styled from 'styled-components'
import Login from './Login'

const Auth = () => {
  return (
    <Container>
      <Login />
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default Auth
