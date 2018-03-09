import React from 'react';
import { connect } from 'react-redux';
import FoodListContainer from '../foodlist/FoodListContainer';
import DiaryList from '../diary/DiaryList';
import DishContainer from '../dish/DishContainer';

class BaseLine extends React.Component {
  render() {
    return (
      <div className="baseline">
        <div className="block-1">
          <div className="dish-creation-component">
            <DishContainer />
          </div>
          <DiaryList />
        </div>
        <div className="block-2">
          <FoodListContainer />
        </div>
        <div className="block-3">teste</div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return Object.assign({}, ownProps, {});
};

const container = connect(mapStateToProps, mapDispatchToProps)(BaseLine);

export default container;
