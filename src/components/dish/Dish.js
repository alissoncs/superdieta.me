import React from 'react'
import PropTypes from 'prop-types'
import { isArray } from 'lodash'
import moment from 'moment'
import DishItem from './DishItem'
import './dish.scss'

import { totalDishCalories } from '../../services/kcalculator'

export default class Dish extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            enableEditG: false,
        }
        this.classComponent = [ 'dish-block' ] 
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
    create() {
        if(!this.props.pushDishToDiary) {
            return false;
        }
        const { list } = this.props
        this.props.pushDishToDiary({
            at: moment(),
            foods: [...list]
        });
        if (this.props.clearDish) this.props.clearDish();
    }
    componentDidMount() {
        setTimeout(() => {
            this.classComponent.push('show')
            this.forceUpdate()
        }, 0)
    }
    render() {
        let { list, fadeBlock, pushDishToDiary } = this.props
        if(!list) return null;
        const totalKcal = totalDishCalories(list);
        if(fadeBlock) {
            this.classComponent.push('show')
        }

        return <div className={this.classComponent.join(' ')}>
            <div className='dish-list-items'>
                {list.map((food, index) => {
                    return <DishItem 
                    key={food.id} 
                    item={food} 
                    onChangeG={this.updateGFromDish.bind(this)}
                    onRemove={this.removeFromDish.bind(this)}/>
                })}
            </div>
            <div className='dish-right-group'>
                <div className='totals'>
                    <span className='legend'>Total de kcal</span>
                    <big className='kcal-total'>{totalKcal}</big>
                    <small className='medd'>kcal</small>
                </div>
                {pushDishToDiary && <button 
                    disabled={!list || list.length == 0}
                    className='btn btn-ok' 
                    onClick={this.create.bind(this)}>OK</button>
                }
            </div>
        </div>
    }

}

Dish.propTypes = {
    list: PropTypes.array,
    fadeBlock: PropTypes.bool,
    removeFromDish: PropTypes.func,
    updateGFromDish: PropTypes.func,
    clearDish: PropTypes.func.isRequired,
    pushDishToDiary: PropTypes.func,
}