import { combineReducers } from 'redux'
import { indicatorsReducer } from './indicatorsReducer'
import { authReducer } from './authReducer'
import { confirmReducer } from './confirmReducer'
import { loginReducer } from './loginReducer'
import { userReducer } from './userReducer'
import { getPatientStatisticsReducer } from './getPatientStatisticsReducer'
import { getDoctorStatisticsReducer } from './getDoctorStatisticsReducer'
import { getPatientsReducer } from './managerPatientReducer'
import { getDoctorReducer } from './managerDoctorReducer'
import { viewPatientReducer } from './viewPatientReducer'
import { setSubDateReducer } from './setSubDateReducer'
import { newManagerReducer } from './newManagerReducer'
import { getManagersReducer } from './getManagersReducer'
import { newDoctorReducer } from './newDoctorReducer'
import { viewDoctorReducer } from './viewDoctorReducer'
import { viewMyProfileReducer } from './patient/viewMyProfileReducer'
import { getIssuesReducer } from './patient/getIssuesReducer'
import { newIssueReducer } from './patient/newIssueReducer'
import { getDoctorDashboardReducer } from './doctor/getDoctorDashboardReducer'
import { getPatientsForDoctorReducer } from './doctor/getPatientsForDoctor'
import { getMyProfileDoctorReducer } from './doctor/getMyProfileDoctor'
import { getPatientProfileReducer } from './doctor/getPatientProfile'
import { getDiagnosListReducer } from './doctor/getDiagnosList'
import { searchDiagnosReducer } from './doctor/searchDiagnosReducer'
import { newDiagnosReducer } from './doctor/newDiagnos'
import { newHeartReducer } from './doctor/newHeartReducer'
import { newScheduleReducer } from './doctor/newSchedule'
import { getScheduleReducer } from './doctor/getScheduleReducer'
import { getDocumentsReducer } from './doctor/getDocumentsReducer'

const rootReducer = combineReducers({
  indicators: indicatorsReducer,
  auth: authReducer,
  confirm: confirmReducer,
  login: loginReducer,
  user: userReducer,
  patientStatistics: getPatientStatisticsReducer,
  doctorStatistics: getDoctorStatisticsReducer,
  patientTable: getPatientsReducer,
  doctorTable: getDoctorReducer,
  patientInfo: viewPatientReducer,
  setSubDate: setSubDateReducer,
  newManagerInfo: newManagerReducer,
  getManagersInfo: getManagersReducer,
  newDoctorInfo: newDoctorReducer,
  doctorInfo: viewDoctorReducer,
  myProfile: viewMyProfileReducer,
  issues: getIssuesReducer,
  newIssueInfo: newIssueReducer,
  doctorDashboard: getDoctorDashboardReducer,
  patientsForDoctor: getPatientsForDoctorReducer,
  myProfileDoctor: getMyProfileDoctorReducer,
  patientProfile: getPatientProfileReducer,
  diagnosList: getDiagnosListReducer,
  diagnosSearch: searchDiagnosReducer,
  newDiagnosInfo: newDiagnosReducer,
  newHeartInfo: newHeartReducer,
  newScheduleInfo: newScheduleReducer,
  getScheduleInfo: getScheduleReducer,
  getDocumentsInfo: getDocumentsReducer,
})

export default rootReducer
