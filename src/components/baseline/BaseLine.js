import React from 'react'
import FoodListContainer from '../foodlist/FoodListContainer'
import DiaryListContainer from '../diary/DiaryListContainer'
import DishContainer from '../dish/DishContainer'

export default class BaseLine extends React.Component {

    render() {
        return <div className='baseline'>
            <FoodListContainer />
            <DishContainer />
            <DiaryListContainer />
        </div>
    }

}