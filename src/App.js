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
import Doctor from './components/Doctor/Main/Doctor'
import DoctorIssues from './components/Doctor/Issues/Issues'
import DoctorNotifications from './components/Doctor/Notifications/Notifications'
import DoctorPatients from './components/Doctor/Patients/Patients'
import DoctorChat from './components/Doctor/Chat/Chat'
import DoctorMyProfile from './components/Doctor/Profile/Profile'
import PatientProfile from './components/Doctor/PatientProfile/PatientProfile'

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
        <PrivateRoute
          exact
          path="/patient/profile"
          type="Пациент"
          component={Profile}
        />
        <PrivateRoute
          exact
          path="/patient/indicators"
          type="Пациент"
          component={Patient}
        />
        <PrivateRoute
          exact
          path="/patient/calendar"
          type="Пациент"
          component={Calendar}
        />
        <PrivateRoute
          exact
          path="/patient/issues"
          type="Пациент"
          component={Issues}
        />
        <PrivateRoute
          exact
          path="/patient/map"
          type="Пациент"
          component={Map}
        />
        <PrivateRoute
          exact
          path="/patient/references"
          type="Пациент"
          component={References}
        />
        <PrivateRoute
          exact
          path="/patient/advice"
          type="Пациент"
          component={Advice}
        />
        <PrivateRoute
          exact
          path="/patient/chat"
          type="Пациент"
          component={Chat}
        />
        <PrivateRoute
          exact
          path="/patient/notifications"
          type="Пациент"
          component={Notifications}
        />

        <PrivateRoute
          exact
          path="/manager/main"
          type="Менеджер"
          component={Manager}
        />
        <PrivateRoute
          exact
          path="/manager/patients"
          type="Менеджер"
          component={ManagerPatients}
        />
        <PrivateRoute
          exact
          path="/manager/newpatients"
          type="Менеджер"
          component={NewPatients}
        />
        <PrivateRoute
          exact
          path="/manager/doctors"
          type="Менеджер"
          component={Doctors}
        />
        <PrivateRoute
          exact
          path="/manager/reports"
          type="Менеджер"
          component={Reports}
        />
        <PrivateRoute
          exact
          path="/manager/references"
          type="Менеджер"
          component={ManagerReferences}
        />
        <PrivateRoute
          exact
          path="/manager/newsletter"
          type="Менеджер"
          component={Newsletter}
        />
        <PrivateRoute
          exact
          path="/manager/newmanager"
          type="Менеджер"
          component={NewManager}
        />
        <PrivateRoute
          exact
          path="/manager/patient/:patientId"
          type="Менеджер"
          component={ViewPatient}
        />
        <PrivateRoute
          exact
          path="/manager/newdoctor"
          type="Менеджер"
          component={NewDoctor}
        />
        <PrivateRoute
          exact
          path="/manager/doctor/:doctorId"
          type="Менеджер"
          component={ViewDoctor}
        />

        <PrivateRoute
          type="Врач"
          exact
          path="/doctor/main"
          component={Doctor}
        />
        <PrivateRoute
          type="Врач"
          exact
          path="/doctor/issues"
          component={DoctorIssues}
        />
        <PrivateRoute
          type="Врач"
          exact
          path="/doctor/notifications"
          component={DoctorNotifications}
        />
        <PrivateRoute
          type="Врач"
          exact
          path="/doctor/patients"
          component={DoctorPatients}
        />
        <PrivateRoute
          type="Врач"
          exact
          path="/doctor/chat"
          component={DoctorChat}
        />
        <PrivateRoute
          type="Врач"
          exact
          path="/doctor/myprofile"
          component={DoctorMyProfile}
        />
        <PrivateRoute
          type="Врач"
          exact
          path="/doctor/patient/:patientId"
          component={PatientProfile}
        />
      </Switch>
    </BrowserRouter>
  )
}

export default App
