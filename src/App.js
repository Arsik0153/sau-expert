import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Patient from './components/Patient/Indicators/Patient'
import Calendar from './components/Patient/Calendar/Calendar'
import Issues from './components/Patient/Issues/Issues'
import Map from './components/Patient/Map/Map'
import References from './components/Patient/References/References'
import Advice from './components/Patient/Advice/Advice'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Patient} />
        <Route exact path="/patient/calendar" component={Calendar} />
        <Route exact path="/patient/issues" component={Issues} />
        <Route exact path="/patient/map" component={Map} />
        <Route exact path="/patient/references" component={References} />
        <Route exact path="/patient/advice" component={Advice} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
