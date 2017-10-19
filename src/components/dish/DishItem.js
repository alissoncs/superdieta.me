import React from 'react'
import PropTypes from 'prop-types'
import { isArray, isFunction, isNumber } from 'lodash'

export default class DishItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            enableEditG: true,
        }
    }
    
    renderEditGForm() {
        const { item } = this.props
        console.log(item)
        if(this.state.enableEditG) {
            return <div>
                <input type='tel' value={item.g} onChange={this.onChangeG.bind(this)} />
            </div>
        }
        return null;
    }
    onChangeG(event) {
        const newG = event.target.value
        const { item } = this.props
        if(parseInt(newG)) {
            item.g = parseInt(newG)
        } else {
            item.g = ''
        }
        
        this.props.onChangeG(item)
    }
    enableEditG() {
        this.setState({
            enableEditG: true,
        })
    }
    onRemove(item) {
        if(this.props.onRemove) {
            this.props.onRemove(item);
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
