import React from 'react'
import PropTypes from 'prop-types'
import CardTotalKcal from '../dish/CardTotalKcal'
import { totalDishCalories } from '../../services/kcalculator'
import './total.scss'

export default class Total extends React.Component {
    mountTotals(diary) {
        if(!diary) return {}

        let totalKcal = 0
        diary.forEach(({ foods }) => {
            totalKcal += totalDishCalories(foods)
        })

        return { totalKcal }
    }
    render() {
        const { totalKcal } = this.mountTotals(this.props.diary)
        console.log(totalKcal)
        
        return <div className='total-group'>
            <CardTotalKcal kcal={totalKcal || 0}/>
        </div>
    }
}
Total.propTypes = {
    diary: PropTypes.array,
}