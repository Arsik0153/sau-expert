import { combineReducers } from 'redux'
import { indicatorsReducer } from './indicatorsReducer'
import { authReducer } from './authReducer'
import { confirmReducer } from './confirmReducer'

const rootReducer = combineReducers({
  indicators: indicatorsReducer,
  auth: authReducer,
  confirm: confirmReducer,
})

export default rootReducer
