import { indicatorsReducer } from './indicatorsReducer.js'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  indicators: indicatorsReducer,
})

export default rootReducer
