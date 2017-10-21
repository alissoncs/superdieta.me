import React from 'react'
import PropTypes from 'prop-types'
import './foodlist.scss';
const dbfood = [
    {
        name: 'batata doce',
        id: 1,
        kcal: 77,
        g: 100,
    },
    {
        name: 'frango',
        id: 2,
        kcal: 163,
        g: 100,
    },
    {
        name: 'carne vermelha magra',
        id: 4,
        kcal: 137,
    },
    {
        name: 'arroz',
        id: 3,
        kcal: 130,
        g: 100,
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
    }
]

export default class FoodList extends React.Component {

    onAddItem(id) {
        const food = dbfood.find(item => item.id === id)
        this.props.addToDish(food)
    }

    renderItem(item) {
        const { name, id, kcal, g } = item
        return <div className='food-item' key={id}>
            <div className='flex-1'>
                <strong>
                    {item.name}
                </strong>
            </div>
            <div className='flex-2'>
                {`${kcal}kcal / ${(g || 100)}g`}
            </div>
            <button className='btn' onClick={this.onAddItem.bind(this, id)}>
                +
            </button>
        </div>;
    }
    render() {
        return <div className='foodlist'>
            <h2 className='title'>Lista de alimentos</h2>
            {dbfood.map(item => {
                return this.renderItem(item)
            })}
        </div>
    }

}

FoodList.propTypes = {
    addToDish: PropTypes.func,
}