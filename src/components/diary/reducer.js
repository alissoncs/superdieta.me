import { isObject, isNumber } from 'lodash'

const diary = (state = [], action) => {
    if(action.type === 'PUSH_DISH_TO_DIARY') {
        return [...state, action.dish];
    }
    return state;
}

export default diary