import { connect } from 'react-redux'
import BaseLine from './BaseLine'

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
  )(BaseLine)
  
  export default container