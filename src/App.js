import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Patient from './components/Patient/Patient'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Patient} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
