import { combineReducers } from 'redux'
import { indicatorsReducer } from './indicatorsReducer'
import { authReducer } from './authReducer'
import { confirmReducer } from './confirmReducer'
import { loginReducer } from './loginReducer'

const rootReducer = combineReducers({
  indicators: indicatorsReducer,
  auth: authReducer,
  confirm: confirmReducer,
  login: loginReducer,
})

export default rootReducer
