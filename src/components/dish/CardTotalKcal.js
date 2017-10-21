import React from 'react'
import './card-total-kcal.scss'

export default class CardTotalKcal extends React.Component {
    render() {
        return <div className='card-default card-total-kcal'>
            <span className='legend'>Total de kcal</span>
            <big className='kcal-total'>{this.props.kcal}</big>
            <small className='medd'>kcal</small>
        </div>
    }
}