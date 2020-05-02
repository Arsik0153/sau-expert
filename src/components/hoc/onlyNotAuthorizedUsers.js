import React from 'react'

export default function onlyNotAuthorizedUsers(WrappedComponent) {
  return class extends React.Component {
    render() {
      if (localStorage.getItem('token')) {
        this.props.history.push('/patient/profile')
        return null
      } else {
        return <WrappedComponent {...this.props} />
      }
    }
  }
}
