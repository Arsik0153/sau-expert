import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import PrivateRoute from './components/route/PrivateRoute'
import PublicRoute from './components/route/PublicRoute'
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
import Manager from './components/Manager/Main/Manager'
import ManagerPatients from './components/Manager/Patients/Patients'
import NewPatients from './components/Manager/NewPatients/NewPatients'
import Doctors from './components/Manager/Doctors/Doctors'
import Reports from './components/Manager/Reports/Reports'
import ManagerReferences from './components/Manager/References/Refernces'
import Newsletter from './components/Manager/Newsletter/Newsletter'
import NewManager from './components/Manager/NewManager/NewManager'
import ViewPatient from './components/Manager/ViewPatient/ViewPatient'
import NewDoctor from './components/Manager/NewDoctor/NewDoctor'
import ViewDoctor from './components/Manager/ViewDoctor/ViewDoctor'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute restricted={true} exact path="/" component={Auth} />
        <PublicRoute
          restricted={true}
          exact
          path="/restore"
          component={Restore}
        />
        <PublicRoute
          restricted={true}
          exact
          path="/register"
          component={Register}
        />
        <PrivateRoute exact path="/patient/profile" component={Profile} />
        <PrivateRoute exact path="/patient/indicators" component={Patient} />
        <PrivateRoute exact path="/patient/calendar" component={Calendar} />
        <PrivateRoute exact path="/patient/issues" component={Issues} />
        <PrivateRoute exact path="/patient/map" component={Map} />
        <PrivateRoute exact path="/patient/references" component={References} />
        <PrivateRoute exact path="/patient/advice" component={Advice} />
        <PrivateRoute exact path="/patient/chat" component={Chat} />
        <PrivateRoute
          exact
          path="/patient/notifications"
          component={Notifications}
        />

        <Route exact path="/manager/main" component={Manager} />
        <Route exact path="/manager/patients" component={ManagerPatients} />
        <Route exact path="/manager/newpatients" component={NewPatients} />
        <Route exact path="/manager/doctors" component={Doctors} />
        <Route exact path="/manager/reports" component={Reports} />
        <Route exact path="/manager/references" component={ManagerReferences} />
        <Route exact path="/manager/newsletter" component={Newsletter} />
        <Route exact path="/manager/newmanager" component={NewManager} />
        <Route
          exact
          path="/manager/patient/:patientId"
          component={ViewPatient}
        />
        <Route exact path="/manager/newdoctor" component={NewDoctor} />
        <Route exact path="/manager/doctor/:doctorId" component={ViewDoctor} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
