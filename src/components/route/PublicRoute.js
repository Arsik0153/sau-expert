import React, { useEffect, useState } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { isLogin } from './../utils/isLogin'

const PublicRoute = ({ component: Component, restricted = false, ...rest }) => {
  let user = JSON.parse(localStorage.getItem('user'))
  const [url, setUrl] = useState('')

  useEffect(() => {
    if (user && user.type === 'Пациент') {
      setUrl('/patient/profile')
    } else {
      setUrl('/manager/main')
    }
  }, [user])
  return (
    <Route
      {...rest}
      render={(props) =>
        isLogin() && restricted ? (
          <Redirect to={url} />
        ) : (
          <Component {...props} />
        )
      }
    />
  )
}

export default PublicRoute
