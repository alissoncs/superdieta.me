import { isObject, isNumber } from 'lodash'

const dish = (state = [], action) => {
    if(action.type === 'ADD_TO_DISH') {
        // verifica se já existe na lista, se existir, somente incrementa
        let existent = state.find(food => food.id === action.food.id)
        if(!existent) {
            const f = action.food
            return [...state, {
                id: f.id,
                name: f.name,
                g: f.g || 100,
                kcal: f.kcal,
            }]
        }
        
    } else if(action.type === 'REMOVE_FROM_DISH') {
        let id = action.id || action.food.id
        return [...state.filter(item => item.id !== id)]        
    } else if(action.type === 'UPDATE_FROM_DISH') {        
        let existent = state.find(food => food.id === action.food.id)
        if(existent) {
            existent.g = action.food.g
        }
        return [...state]
    } else if(action.type === 'CLEAR_DISH') {
        return []
    }
    return state;
}

export default dish