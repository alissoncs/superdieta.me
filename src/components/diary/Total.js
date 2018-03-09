import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import {
  totalDishCalories,
  totalProtein,
  totalCarbs,
  totalFats,
} from '../../services/kcalculator';
import Card from '../common/Card'

const TotalWrapper = styled.div`
  background: #fff;
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  padding: 8px;
`;

const Item = styled(Card)``;

export default class Total extends React.Component {
  mountTotals(diary) {
    if (!diary) return {};

    let totalKcal, carbs, proteins, fats;
    totalKcal = carbs = proteins = fats = 0;
    diary.forEach(({ foods }) => {
      totalKcal += totalDishCalories(foods);
      carbs += totalCarbs(foods);
      proteins += totalProtein(foods);
      fats += totalFats(foods);
    });
    return { totalKcal, carbs, proteins, fats };
  }
  render() {
    const res = this.mountTotals(this.props.diary);
    const { totalKcal, carbs, proteins, fats } = res;

    return (
      <TotalWrapper>
        <Item text={totalKcal} title='Kcal'/>
        <Item text={carbs} title='carbs'/>
        <Item text={proteins} title='proteins'/>
        <Item text={fats} title='fats'/>
      </TotalWrapper>
    );
  }
}
Total.propTypes = {
  diary: PropTypes.array,
};
