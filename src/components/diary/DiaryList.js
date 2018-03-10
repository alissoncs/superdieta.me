import React from 'react';
import { connect } from 'react-redux';
import styled, { css } from 'styled-components';
import Dish from '../dish/Dish';
import Total from './Total';

const DiaryWrapper = styled.div``;

class DiaryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
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
      <DiaryWrapper>
        {diary.map((ref, index) => (
          <Dish viewMode list={ref.foods} key={index} />
        ))}
        {diary.length == 0 && this.emptyMessage()}
        <Total diary={diary} />
      </DiaryWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    diary: state.diary,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return Object.assign({}, ownProps, {});
};

export default connect(mapStateToProps, mapDispatchToProps)(DiaryList);
