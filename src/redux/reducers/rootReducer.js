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
})

export default rootReducer
