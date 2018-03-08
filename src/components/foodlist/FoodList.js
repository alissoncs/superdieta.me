import React from 'react';
import PropTypes from 'prop-types';
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

export default class FoodList extends React.Component {
  onAddItem(food) {
    this.props.addToDish(food);
  }

  renderItem(item) {
    const { name, id, kcal, g } = item;
    return (
      <div className="food-item" key={id}>
        <div className="flex-1">
          <strong>{item.name}</strong>
        </div>
        <div className="flex-2">{`${kcal}kcal / ${g || 100}g`}</div>
        <button className="btn" onClick={this.onAddItem.bind(this, item)}>
          +
        </button>
      </div>
    );
  }
  render() {
    return (
      <div className="foodlist">
        <h2 className="title">Lista de alimentos</h2>
        {dbfood.map(item => {
          return this.renderItem(item);
        })}
      </div>
    );
  }
}

FoodList.propTypes = {
  addToDish: PropTypes.func,
};
