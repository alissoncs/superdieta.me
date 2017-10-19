import React from 'react'
import PropTypes from 'prop-types'
import { isArray } from 'lodash'
import DishItem from './DishItem'

export default class Dish extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            enableEditG: false,
        }
    }
    removeFromDish(item) {
        if(item && this.props.removeFromDish)
            this.props.removeFromDish(item);
    }
    updateGFromDish(item) {
        this.props.updateGFromDish(item)
    }
    renderEditGForm() {
        if(this.state.enableEditG) {

        }
        return
    }
    render() {
        let { list } = this.props
        if(!list) return null;

        return <div className='mount-dish card'>
            {list.map((food, index) => {
                return <DishItem 
                key={food.id} 
                item={food} 
                onChangeG={this.updateGFromDish.bind(this)}
                onRemove={this.removeFromDish.bind(this)}/>
            })}
        </div>
    }

}

Dish.propTypes = {
    list: PropTypes.array,
    removeFromDish: PropTypes.func,
    updateGFromDish: PropTypes.func,
}