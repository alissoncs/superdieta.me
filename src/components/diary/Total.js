import React from 'react';
import PropTypes from 'prop-types';
import {
  totalDishCalories,
  totalProtein,
  totalCarbs,
  totalFats,
} from '../../services/kcalculator';

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
      <div className="total-group">
      </div>
    );
  }
}
Total.propTypes = {
  diary: PropTypes.array,
};
