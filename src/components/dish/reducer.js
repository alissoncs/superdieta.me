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
                g: f.g,
                kcal: f.kcal,
            }]
        }
        
    } else if(action.type === 'REMOVE_FROM_DISH') {
        const { id } = action
        let food = action.food
        if(isNumber(action.id)) {
            food = state.find(item => item.id === action.id)
        }
        if(isObject(food)) {
            const index = state.indexOf(food)
            return [...state.slice(0, index)]
        }
        
    } else if(action.type === 'UPDATE_G_FROM_DISH') {        
        let existent = state.find(food => food.id === action.food.id)
        if(existent) {
            existent.g = action.food.g
        }
        return [...state]
    }
    return state;
}

export default dish