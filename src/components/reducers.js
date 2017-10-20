import { combineReducers } from 'redux'
import dish from './dish/reducer'
import diary from './diary/reducer'
import foodlist from './foodlist/reducer'

const allReducers = combineReducers({
    dish,
    diary,
    foodlist,
})

export default allReducers
