import { combineReducers } from 'redux'
import dish from './dish/reducer'

const allReducers = combineReducers({
    dish,
})

export default allReducers
