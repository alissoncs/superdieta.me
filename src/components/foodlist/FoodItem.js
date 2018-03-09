import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button'

const ItemWrapper = styled.div`
  border-bottom: 1px solid #eeeeee;
  padding: 8px 12px;
  position: relative;
  display: flex;
  align-items: center;
  background: #FFF;
  font-size: 13px;
  &:hover {
    background: #f1f1f1;
  }
`;
const Name = styled.strong`
  width: 100%;
  font-weight: bold;
`;
const Info = styled.span`
  font-weight: normal;
  font-size: 11px;
`;
const AddBtn = styled(Button)`
  font-size: 20px;
  font-weight: bold;
`;

export default
class FoodItem extends React.Component {
  btn(event) {
    this.props.onAdd(this.props.item)
  }
  render() {
    const { item } = this.props

    const { name, id, kcal, g } = item;

     return (
      <ItemWrapper>
        <Name>{item.name}</Name>
        <Info>
          {`${kcal}kcal / ${g || 100}g`}
        </Info>
        <AddBtn title='Adicionar' onClick={this.btn.bind(this)}>+</AddBtn>
      </ItemWrapper>
    );
  }
}
