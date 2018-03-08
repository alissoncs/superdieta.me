import React from 'react'
import './card-total-kcal.scss'

export default class CardTotalKcal extends React.Component {
    render() {
        return <div className='card-default card-total-kcal'>
            <span className='legend'>{this.props.legend || 'Total de kcal'}</span>
            <big className='kcal-total'>{this.props.kcal || this.props.g || 0}</big>
            <small className='medd'>{typeof this.props.kcal !== 'undefined' ? 'kcal' : 'g'}</small>
        </div>
    }
}