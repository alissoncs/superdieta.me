import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components'
import isArray from 'lodash/isArray';
import { connect } from 'react-redux';
import moment from 'moment';
import DishItem from './DishItem';
import Button from '../common/Button';
import Card from '../common/Card';

import {
  removeFromDish,
  updateFromDish,
  clearDish,
  pushDishToDiary,
} from '../actions';
import { totalDishCalories } from '../../services/kcalculator';

const DishWrapper = styled.div`
  background: #FFF;
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  padding: 8px;
`;
const ItemsWrapper = styled.div`
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
`;

const OKButton = styled(Button)`
  height: 80px;
  font-size: 20px;
  font-weight: bold;
  padding: 0 20px;
`;
const CardCustom = styled(Card)`
  height: 80px;
  margin-right: 6px;
  min-width: 120px;
  ${props => props.yellow && css`
    background: #ffc463;
    color: #FFF;
  `}
`;
const RightWrapper = styled.div`
  flex-wrap: nowrap;
`;

const DishItemCustom = styled(DishItem)`
  height: 80px;
  margin: 0 4px 4px 0;
`;

class Dish extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      enableEditG: false,
    };
    this.classComponent = ['dish-block'];
  }
  removeFromDish(item) {
    if (item && this.props.removeFromDish) this.props.removeFromDish(item);
  }
  updateFromDish(item) {}
  renderEditGForm() {
    if (this.state.enableEditG) {
    }
    return;
  }
  create() {
    if (!this.props.pushDishToDiary) {
      return false;
    }
    const { list } = this.props;
    this.props.pushDishToDiary({
      at: moment(),
      foods: [...list],
    });
    if (this.props.clearDish) this.props.clearDish();
  }
  componentDidMount() {
  }
  render() {
    let { list, fadeBlock, pushDishToDiary } = this.props;
    if (!list) return null;
    const totalKcal = totalDishCalories(list);
    if (fadeBlock) {
      this.classComponent.push('show');
    }

    return (
      <DishWrapper>
        <ItemsWrapper>
          {list.map((food, index) => {
            return (
              <DishItemCustom
                key={food.id}
                item={food}
                onChange={this.props.updateFromDish}
                onRemove={
                  this.props.removeFromDish && this.removeFromDish.bind(this)
                }
              />
            );
          })}
        </ItemsWrapper>
        <RightWrapper>
          <CardCustom yellow title='Total de kcal' text={totalKcal || 0} sub={'kcal'} />
          {pushDishToDiary && (
            <OKButton
              disabled={!list || list.length == 0}
              className="btn btn-ok"
              onClick={this.create.bind(this)}>OK</OKButton>
          )}
        </RightWrapper>
      </DishWrapper>
    );
  }
}

Dish.propTypes = {
  list: PropTypes.array,
  fadeBlock: PropTypes.bool,
  removeFromDish: PropTypes.func,
  updateFromDish: PropTypes.func,
  clearDish: PropTypes.func,
  pushDishToDiary: PropTypes.func,
};

const mapStateToProps = state => {
  return {
    list: state.dish,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return Object.assign({}, ownProps, {
    removeFromDish: item => dispatch(removeFromDish(item)),
    updateFromDish: item => dispatch(updateFromDish(item)),
    pushDishToDiary: dish => dispatch(pushDishToDiary(dish)),
    clearDish: () => dispatch(clearDish()),
  });
};

const container = connect(mapStateToProps, mapDispatchToProps)(Dish);

export default container;
