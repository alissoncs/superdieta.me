import styled, { css } from 'styled-components';
import React from 'react';
import isUndefined from 'lodash/isUndefined';

const CardWrapper = styled.div`
  border: 0;
  color: #999;
  background: #EEE;
  cursor: pointer;
  display: inline-block;
  padding: 12px 12px;
  font-size: 13px;
  border-radius: 3px;
  text-align: center;
  min-height: 30px;
  ${props => props.disabled && css``};
`;
const Text = styled.span`
  display: block;
  font-size: 30px;
  line-height: 1.2em;
  font-weight: bold;
`;
const Title = styled.big`
  line-height: 1;
  font-size: 9px;
  display: block;
`;
const Sub = styled.small`
  font-size: 9px;
  line-height: 1;
  font-weight: normal;
  display: block;
`;

export default class Card extends React.Component {
  render() {
    const { text, title, sub } = this.props;
    return (
      <CardWrapper {...this.props}>
        {title && <Title>{title}</Title>}
        <Text>{isUndefined(text) ? '--' : text}</Text>
        {sub && <Sub>{sub}</Sub>}
      </CardWrapper>
    );
  }
}
