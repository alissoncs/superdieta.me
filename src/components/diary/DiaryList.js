import React from 'react';
import { connect } from 'react-redux'
import DiaryDishContainer from './DiaryDishContainer';
import Total from './Total';

class DiaryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.classComponent = ['diary-card'];
  }

  card(ref) {
    return (
      <div className={this.classComponent.join(' ')}>
        <div className="at">
          <span>{ref.at.format('H:mm')}</span>
        </div>
        <div className="diary-dish-block">
          <DiaryDishContainer list={ref.foods} fadeBlock={true} />
        </div>
      </div>
    );
  }

  emptyMessage() {
    return (
      <div className="empty-message">
        <p>Nenhum item adicionado ao diário</p>
      </div>
    );
  }

  render() {
    let { diary } = this.props;
    if (!diary) diary = [];

    return (
      <div className="diary">
        {diary.map((ref, index) => {
          return (
            <div key={index} className="diary-item">
              {this.card(ref)}
            </div>
          );
        })}
        {diary.length == 0 && this.emptyMessage()}
        <Total diary={diary} />
      </div>
    );
  }
}

const mapStateToProps = state => {
    return {
      diary: state.diary,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return Object.assign({}, ownProps, {
    })
}

  const container = connect(
    mapStateToProps,
    mapDispatchToProps
  )(DiaryList)

  export default container
