import { isNumber } from 'lodash'

export const addToDish = food => {
    return {
        type: 'ADD_TO_DISH',
        food,
    }
}

export const removeFromDish = foodOrId => {
    const id = (!isNumber(id)) ? foodOrId.id : foodOrId
    return {
        type: 'REMOVE_FROM_DISH',
        id,
    }
}
export const updateGFromDish = food => {
    return {
        type: 'UPDATE_G_FROM_DISH',
        food,
    }
}