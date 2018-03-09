import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import isFunction from 'lodash/isFunction';
import { InputQtd } from '../common/Form';
import Button from '../common/Button';
import { foodCalories } from '../../services/kcalculator';

const ItemWrapper = styled.div`
  position: relative;
  border-radius: 3px;
  background: #FFF;
  box-shadow: 0 0 4px #f1f1f1;
  color: #555;
  padding: 10px;
`;

const Title = styled.strong`
  font-size: 12px;
  display: block;
  text-align: center;
  margin: 0 0 4px 0;
  font-weight: normal;
  `;
  const Kcal = styled.small`
  display: block;
  text-align: center;
  font-size: 10px;
  margin-top: 4px;
  font-weight: normal;
  `;
  const RmBtn = styled(Button)`
  font-size: 18px;
  line-height: .5em;
  font-weight: bold;
  padding: 3px 3px;
  margin: 4px 0 0 0;
  position: absolute;
  top: 0;
  right: 0;
`;
const InputQtdCustom = styled(InputQtd)`
  margin-bottom: 0 0 4px 0;
`;

export default class DishItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      enableEditG: true,
    };
    this.onChangeG = this.onChangeG.bind(this)
  }
  renderEditGForm() {
    const { item, onChange } = this.props;
    return (
      <InputQtdCustom onChange={this.onChangeG} value={item.g || 0}/>
    );
  }
  renderRemoveButton() {
    if (!this.props.onRemove) return null;
    const { item } = this.props;

    return (
      <RmBtn
        red
        onClick={() => {
          this.onRemove(item);
        }}>
        &times;
      </RmBtn>
    );
  }
  onChangeG(g) {
    const { item } = this.props
    item.g = g > 2000 ? 2000 : g
    this.props.onChange(item)
  }
  enableEditG() {
    this.setState({
      enableEditG: true,
    });
  }
  onRemove(item) {
    if (this.props.onRemove) {
      this.props.onRemove(item);
    }
  }

  render() {
    const { item } = this.props;

    return (
      <ItemWrapper {...this.props}>
        <Title>{item.name}</Title>
        {this.renderEditGForm()}
        <Kcal>{`${foodCalories(item)}kcal`}</Kcal>
        {this.renderRemoveButton()}
      </ItemWrapper>
    );
  }
}

DishItem.propTypes = {
  item: PropTypes.object.isRequired,
  onRemove: PropTypes.func,
  onChange: PropTypes.func,
};
