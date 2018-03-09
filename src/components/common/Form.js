import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from './Button';

const StyledInput = styled.input`
  border: 1px solid #ddd;
  border-radius: 3px;
  height: 30px;
  line-height: 30px;
  padding: 0 12px;
`;
export const Input = props => {
  return <StyledInput {...props} autoComplete="off" spellcheck="off" />;
};

const QtdWrapper = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: center;
  button {
    border-radius: 3px 0 0 3px;
    :last-child {
      border-radius: 0 3px 3px 0;
    }
  }
`;
const IDBtn = styled(Button)`
  height: 23px;
  line-height: 23px;
  padding: 0 5px;
  background: #ccc;
`;
const InputSmall = styled(Input)`
  width: 50px;
  border-radius: 0;
  padding-left: 0;
  padding-right: 0;
  text-align: center;
  height: 23px;
  line-height: 23px;
`;

export class InputQtd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
    };
    this.inc = this.inc.bind(this);
    this.dec = this.dec.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  onChange(e) {
    let val = Number(e.target.value) || this.props.value;
    this.setState({
      value: val,
    })
    this.props.onChange(val);
  }
  inc(e) {
    let val = Number(this.state.value);
    val = val >= 50 ? val + 50 : val + 1
    this.setState({
      value: val,
    })
    this.props.onChange(val);
  }
  dec(e) {
    let val = Number(this.state.value);
    val = val > 50 ? val - 50 : val - 1,
    this.setState({
      value: val,
    })
    this.props.onChange(val);
  }
  render() {
    return (
      <QtdWrapper>
        <IDBtn onClick={this.dec}>-</IDBtn>
        <InputSmall
          {...this.props}
          onFocus={e => {
            e.target.select();
          }}
          value={this.state.value}
          onChange={this.onChange}
        />
        <IDBtn onClick={this.inc}>+</IDBtn>
      </QtdWrapper>
    );
  }
}
