import { connect } from 'react-redux'
import Dish from '../dish/Dish'
import { 
  editDishFromDiary
} from '../actions'

const mapStateToProps = state => {
    return {
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return Object.assign({}, ownProps, {
    })
}
  
  const container = connect(
    mapStateToProps,
    mapDispatchToProps
  )(Dish)
  
  export default container