import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Patient from './components/Patient/Indicators/Patient'
import Calendar from './components/Patient/Calendar/Calendar'
import Issues from './components/Patient/Issues/Issues'
import Map from './components/Patient/Map/Map'
import References from './components/Patient/References/References'
import Advice from './components/Patient/Advice/Advice'
import Profile from './components/Patient/Profile/Profile'
import Chat from './components/Patient/Chat/Chat'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Profile} />
        <Route exact path="/patient/indicators" component={Patient} />
        <Route exact path="/patient/calendar" component={Calendar} />
        <Route exact path="/patient/issues" component={Issues} />
        <Route exact path="/patient/map" component={Map} />
        <Route exact path="/patient/references" component={References} />
        <Route exact path="/patient/advice" component={Advice} />
        <Route exact path="/patient/chat" component={Chat} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
