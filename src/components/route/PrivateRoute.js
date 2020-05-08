import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { isLogin } from './../utils/isLogin'

const PrivateRoute = ({ component: Component, type, ...rest }) => {
  let user = JSON.parse(localStorage.getItem('user'))
  return (
    <Route
      {...rest}
      render={(props) =>
        isLogin() && user.type === type ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  )
}

export default PrivateRoute
