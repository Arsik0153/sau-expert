import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { isLogin } from './../utils/isLogin'

const PublicRoute = ({ component: Component, restricted = false, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isLogin() && restricted ? (
          <Redirect to="/patient/profile" />
        ) : (
          <Component {...props} />
        )
      }
    />
  )
}

export default PublicRoute
