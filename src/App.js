import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Patient from './components/Patient/Indicators/Patient'
import Calendar from './components/Patient/Calendar/Calendar'
import Issues from './components/Patient/Issues/Issues'
import Map from './components/Patient/Map/Map'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Patient} />
        <Route exact path="/patient/calendar" component={Calendar} />
        <Route exact path="/patient/issues" component={Issues} />
        <Route exact path="/patient/map" component={Map} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
