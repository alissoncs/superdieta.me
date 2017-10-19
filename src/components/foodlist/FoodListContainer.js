import { connect } from 'react-redux'
import FoodList from './FoodList'
import { addToDish } from '../actions'

const mapStateToProps = state => {
    return {
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return Object.assign({}, ownProps, {
      addToDish: data => dispatch(addToDish(data)),
    })
}
  
  const container = connect(
    mapStateToProps,
    mapDispatchToProps
  )(FoodList)
  
  export default container