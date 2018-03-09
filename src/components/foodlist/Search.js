import React from 'react'
import styled from 'styled-components'
import { Input } from '../common/Form'

const Wrapper = styled.div``;
const InputCustom = styled(Input)`
  width: 100%;
  font-size: 14px;
`;

export default
class Search extends React.Component {
  render() {
    return <Wrapper>
      <InputCustom placeholder='Digite um alimento...' />
    </Wrapper>
  }
}
