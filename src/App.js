import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import onlyAuthorizedUsers from './components/hoc/onlyAuthorizedUsers'
import onlyNotAuthorizedUsers from './components/hoc/onlyNotAuthorizedUsers'
import Patient from './components/Patient/Indicators/Patient'
import Calendar from './components/Patient/Calendar/Calendar'
import Issues from './components/Patient/Issues/Issues'
import Map from './components/Patient/Map/Map'
import References from './components/Patient/References/References'
import Advice from './components/Patient/Advice/Advice'
import Profile from './components/Patient/Profile/Profile'
import Chat from './components/Patient/Chat/Chat'
import Notifications from './components/Patient/Notifications/Notifications'
import Auth from './components/Auth/Auth'
import Restore from './components/Auth/Restore'
import Register from './components/Auth/Register'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={onlyNotAuthorizedUsers(Auth)} />
        <Route
          exact
          path="/restore"
          component={onlyNotAuthorizedUsers(Restore)}
        />
        <Route
          exact
          path="/register"
          component={onlyNotAuthorizedUsers(Register)}
        />
        <Route
          exact
          path="/patient/profile"
          component={onlyAuthorizedUsers(Profile)}
        />
        <Route exact path="/patient/indicators" component={Patient} />
        <Route exact path="/patient/calendar" component={Calendar} />
        <Route exact path="/patient/issues" component={Issues} />
        <Route exact path="/patient/map" component={Map} />
        <Route exact path="/patient/references" component={References} />
        <Route exact path="/patient/advice" component={Advice} />
        <Route exact path="/patient/chat" component={Chat} />
        <Route exact path="/patient/notifications" component={Notifications} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
