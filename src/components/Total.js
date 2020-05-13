import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  display: flex;
  width: 100%;
  height: 55px;
  justify-content: flex-start;
`;

const Total = (props) => {
  const calculateTotal = () => {
    let theTotal;
    if (props.bills.length > 1) {
      theTotal = props.bills.reduce((a, b) => a + b);
      if (theTotal.toString().split('').indexOf('.') !== -1) {
        theTotal = theTotal.toFixed(2);
      }
    }
    return theTotal;
  }

  return (
    <StyledDiv>
      <h3>{calculateTotal()}</h3>
    </StyledDiv>
  )
}

export default Total;