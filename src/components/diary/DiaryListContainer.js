import { connect } from 'react-redux'
import DiaryList from './DiaryList'

const mapStateToProps = state => {
    return {
      diary: state.diary,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return Object.assign({}, ownProps, {
    })
}
  
  const container = connect(
    mapStateToProps,
    mapDispatchToProps
  )(DiaryList)
  
  export default container