import { isObject, isNumber } from 'lodash'

const diary = (state = [], action) => {
    if(action.type === 'PUSH_DISH_TO_DIARY') {
        console.log(action)
    }
    return state;
}

export default diary