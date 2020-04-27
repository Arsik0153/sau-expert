import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Patient from './components/Patient/Indicators/Patient'
import Calendar from './components/Patient/Calendar/Calendar'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Patient} />
        <Route exact path="/patient/calendar" component={Calendar} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
