import { isNumber } from 'lodash';

export const addToDish = food => {
  return {
    type: 'ADD_TO_DISH',
    food,
  };
};

export const removeFromDish = foodOrId => {
  const id = !isNumber(id) ? foodOrId.id : foodOrId;
  return {
    type: 'REMOVE_FROM_DISH',
    id,
  };
};
export const updateFromDish = food => {
  return {
    type: 'UPDATE_FROM_DISH',
    food,
  };
};
export const clearDish = () => {
  return {
    type: 'CLEAR_DISH',
  };
};
export const pushDishToDiary = dish => {
  return {
    type: 'PUSH_DISH_TO_DIARY',
    dish,
  };
};
export const editDishFromDiary = dish => {
  return {
    type: 'UPDATE_DISH_FROM_DIARY',
    dish,
  };
};
