import { combineReducers } from 'redux'
import dish from './dish/reducer'
import diary from './diary/reducer'

const allReducers = combineReducers({
    dish,
    diary,
})

export default allReducers
