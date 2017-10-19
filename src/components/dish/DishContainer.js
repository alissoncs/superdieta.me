import { connect } from 'react-redux'
import Dish from './Dish'
import { 
  removeFromDish, 
  updateGFromDish,
  clearDish,
  pushDishToDiary } from '../actions'

const mapStateToProps = state => {
    return {
      list: state.dish
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return Object.assign({}, ownProps, {
      removeFromDish: item => dispatch(removeFromDish(item)),
      updateGFromDish: item => dispatch(updateGFromDish(item)),
      pushDishToDiary: dish => dispatch(pushDishToDiary(dish)),
      clearDish: () => dispatch(clearDish()),
    })
}
  
  const container = connect(
    mapStateToProps,
    mapDispatchToProps
  )(Dish)
  
  export default container