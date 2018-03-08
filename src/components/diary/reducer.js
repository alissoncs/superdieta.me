import { isObject, isNumber } from 'lodash';

const diary = (state = [], action) => {
  if (action.type === 'PUSH_DISH_TO_DIARY') {
    return [...state, action.dish];
  } else if (action.type === 'UPDATE_DISH_FROM_DIARY') {
    console.log(action.dish, diary);
  }
  return state;
};

export default diary;
