import styled, { css } from 'styled-components';
import React from 'react';

const Button = styled.button`
  border: 0;
  background: #48dc6a;
  color: #FFF;
  cursor: pointer;
  padding: 3px 12px;
  display: inline-block;
  vertical-align: top;
  font-size: 13px;
  border-radius: 3px;
  :hover {
    color: #FFF;
    background: #32c353;
  }
  ${props => props.disabled && css`
    background: #eee;
    :hover {
      background: #eee;
    }
  `}
  ${props => props.blue && css`
    background: #0290fe;
    :hover {
      background: #1284dc;
    }
  `}
  ${props => props.red && css`
    background: #ff6446;
    :hover {
      background: #f34827;
    }
  `}
`;

export default Button;
