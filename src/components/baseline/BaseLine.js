import React from 'react'
import FoodListContainer from '../foodlist/FoodListContainer'
import DiaryListContainer from '../diary/DiaryListContainer'
import DishContainer from '../dish/DishContainer'
import './baseline.scss';

export default class BaseLine extends React.Component {

    render() {
        return <div className='baseline'>
            <div className='block-1'>
                <div className='dish-creation-component'>
                    <DishContainer />
                </div>
                <DiaryListContainer />
            </div>
            <div className='block-2'>
                <FoodListContainer />                
            </div>
            <div className='block-3'>
                teste
            </div>
        </div>
    }

}