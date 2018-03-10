import { isObject, isNumber } from 'lodash';

const diary = (state = [], action) => {
  if (action.type === 'PUSH_DISH_TO_DIARY') {
    return [...state, { ...action.dish, id: state.length+1 }];
  } else if (action.type === 'UPDATE_DISH_FROM_DIARY') {
  }
  return state;
};

export default diary;
