import React from 'react'
import PropTypes from 'prop-types'
import CardTotalKcal from '../dish/CardTotalKcal'
import { totalDishCalories, totalProtein, totalCarbs, totalFats } from '../../services/kcalculator'
import './total.scss'

export default class Total extends React.Component {
    mountTotals(diary) {
        if(!diary) return {}

        let totalKcal, carbs, proteins, fats
        totalKcal = carbs = proteins = fats = 0
        diary.forEach(({ foods }) => {
            totalKcal += totalDishCalories(foods)
            carbs += totalCarbs(foods)
            proteins += totalProtein(foods)
            fats += totalFats(foods)
        })
        return { totalKcal, carbs, proteins, fats }
    }
    render() {         
        const res = this.mountTotals(this.props.diary);
        console.log('usadhusadhsa', res);
        const { totalKcal, carbs, proteins, fats } = res
        
        return <div className='total-group'>
            <CardTotalKcal legend='Proteinas' g={proteins || 0}/>
            <CardTotalKcal legend='Gorduras' g={fats || 0}/>
            <CardTotalKcal legend='Carboidratos' g={carbs || 0}/>
            <CardTotalKcal legend='Calorias' kcal={totalKcal || 0}/>
        </div>
    }
}
Total.propTypes = {
    diary: PropTypes.array,
}