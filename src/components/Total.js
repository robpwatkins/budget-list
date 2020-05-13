import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  display: flex;
  width: 100%;
  height: 55px;
  justify-content: flex-start;
`;

const Total = (props) => {
  return (
    <StyledDiv>
      <h3>
        {props.bills.length > 1 && props.bills.reduce((a, b) => a + b).toFixed(2)}
      </h3>
    </StyledDiv>
  )
}

export default Total;