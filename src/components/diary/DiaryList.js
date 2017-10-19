import React from 'react'
import Avatar from 'material-ui/Avatar';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';

export default class DiaryList extends React.Component {

    card(ref) {
        return null;
    }

    render() {
        return <div className='foodlist'>
            {this.card({})}
        </div>
    }

}