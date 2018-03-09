import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
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
  background: #fff;
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
  ${props =>
    props.yellow &&
    css`
      background: #ffc463;
      color: #fff;
    `};
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
  componentDidMount() {}
  render() {
    let { list, viewMode } = this.props;
    if (!list) return null;

    const totalKcal = totalDishCalories(list);

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
          <CardCustom
            yellow={!viewMode}
            title="Total de kcal"
            text={totalKcal || 0}
            sub={'kcal'}
          />
          {!viewMode && (
            <OKButton
              disabled={!list || list.length == 0}
              className="btn btn-ok"
              onClick={this.create.bind(this)}
            >OK
            </OKButton>
          )}
        </RightWrapper>
      </DishWrapper>
    );
  }
}

Dish.propTypes = {
  list: PropTypes.array,
  viewMode: PropTypes.bool,

  removeFromDish: PropTypes.func,
  updateFromDish: PropTypes.func,
  clearDish: PropTypes.func,
  pushDishToDiary: PropTypes.func,
};

const mapStateToProps = (state, own) => {
  return {
    list: state.dish || own.list,
    viewMode: Boolean(own.viewMode),
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    ...ownProps,
    removeFromDish: item => dispatch(removeFromDish(item)),
    updateFromDish: item => dispatch(updateFromDish(item)),
    pushDishToDiary: dish => dispatch(pushDishToDiary(dish)),
    clearDish: () => dispatch(clearDish()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dish);
