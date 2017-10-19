import React from 'react'
import PropTypes from 'prop-types'
import { isArray, isFunction } from 'lodash'

export default class DishItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            enableEditG: false,
        }
    }
    
    renderEditGForm() {
        const { item } = this.props
        console.log(item)
        // if(this.state.enableEditG) {
            return <input type='tel' value={item.g} onChange={this.onChangeG.bind(this)} />
        //}
        return null;
    }
    onChangeG(event) {
        const newG = event.target.value;
        this.props.item.g = newG
        this.props.onChangeG(this.props.item)
    }
    enableEditG() {
        this.setState({
            enableEditG: true,
        })
    }
    onRemove() {
        if(this.props.onRemove) {
            this.props.onRemove();
        }
    }
    componentWillMount() {
    }
    render() {
        let { item } = this.props

        return <div id={item.id}>
            <strong>{`${item.name}`}</strong>
            <span onClick={this.enableEditG.bind(this)}>{`${item.g || 100}`}</span>
            {this.renderEditGForm()}
            <button disabled={!isFunction(this.props.onRemove)} onClick={() => {
                this.onRemove(item)    
            }}>&times;</button>
        </div>;
    }

}

DishItem.propTypes = {
    item: PropTypes.object.isRequired,
    onRemove: PropTypes.func,
    onChangeG: PropTypes.func,
}
