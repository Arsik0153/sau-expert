import { combineReducers } from 'redux'
import { indicatorsReducer } from './indicatorsReducer'
import { authReducer } from './authReducer'
import { confirmReducer } from './confirmReducer'
import { loginReducer } from './loginReducer'
import { userReducer } from './userReducer'
import { getPatientStatisticsReducer } from './getPatientStatisticsReducer'
import { getDoctorStatisticsReducer } from './getDoctorStatisticsReducer'

const rootReducer = combineReducers({
  indicators: indicatorsReducer,
  auth: authReducer,
  confirm: confirmReducer,
  login: loginReducer,
  user: userReducer,
  patientStatistics: getPatientStatisticsReducer,
  doctorStatistics: getDoctorStatisticsReducer,
})

export default rootReducer
