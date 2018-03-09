import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { addToDish } from '../actions';

import FoodItem from './FoodItem';
import Search from './Search';

const dbfood = [
  {
    name: 'batata doce',
    id: 1,
    kcal: 77,
    g: 100,
    carbs: 18.4,
  },
  {
    name: 'frango',
    id: 2,
    kcal: 163,
    g: 100,
    protein: 21.5,
  },
  {
    name: 'carne vermelha magra',
    id: 4,
    kcal: 137,
    protein: 35.9,
  },
  {
    name: 'arroz',
    id: 3,
    kcal: 130,
    g: 100,
    carbs: 28.2,
  },
  {
    name: 'arroz integral',
    id: 11,
    kcal: 111,
    g: 100,
    carbs: 25.8,
  },
  {
    name: 'brocolis',
    id: 5,
    kcal: 25,
    g: 100,
  },
  {
    name: 'ovo inteiro cozido',
    id: 10,
    kcal: 155,
    g: 100,
    protein: 13.3,
  },
];

const Title = styled.h2`
  margin: 0 0;
  font-size: 13px;
  font-weight: 100;
  padding: 12px;
`;
const Wrapper = styled.div`
`;
const SearchWrapper = styled.div`
  padding: 12px;
`;

class FoodList extends React.Component {
  onAddItem(food) {
    this.props.addToDish(food);
  }

  render() {
    return (
      <Wrapper>
        <Title>Lista de alimentos</Title>
        <SearchWrapper>
          <Search />
        </SearchWrapper>
        {dbfood.map((item, index) => {
          return (
            <FoodItem
              item={item}
              key={index}
              onAdd={this.onAddItem.bind(this)}
            />
          );
        })}
      </Wrapper>
    );
  }
}

FoodList.propTypes = {
  addToDish: PropTypes.func,
};

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return Object.assign({}, ownProps, {
    addToDish: data => dispatch(addToDish(data)),
  });
};

const container = connect(mapStateToProps, mapDispatchToProps)(FoodList);

export default container;
