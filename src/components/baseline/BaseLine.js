import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import FoodList from '../foodlist/FoodList';
import DiaryList from '../diary/DiaryList';
import Dish from '../dish/Dish';

const Wrapper = styled.div`
  display: flex;
`
const FoodListWrapper = styled.aside`
  width: 30%;
`;
const MiddleWrapper = styled.div`
  width: 60%;
  background: #f1f1f1;
`

class BaseLine extends React.Component {
  render() {
    return (
      <Wrapper>
        <FoodListWrapper>
          <FoodList />
        </FoodListWrapper>
        <MiddleWrapper>
          <Dish />
          <DiaryList />
        </MiddleWrapper>
      </Wrapper>
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
