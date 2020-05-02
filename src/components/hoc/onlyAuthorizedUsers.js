import React from 'react'
import { Redirect } from 'react-router-dom'

export default function onlyAuthorizedUsers(WrappedComponent) {
  return class extends React.Component {
    render() {
      if (!localStorage.getItem('token')) {
        return <Redirect to="/" />
      } else {
        return <WrappedComponent {...this.props} />
      }
    }
  }
}
