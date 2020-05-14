import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  margin-top: 7px;
`;

const Total = (props) => {
  const calculateTotal = () => {
    let theTotal = 0;
    if (props.bills.length > 1) {
      theTotal = props.bills.reduce((a, b) => a + b);
      if (theTotal.toString().split('').indexOf('.') !== -1) {
        theTotal = theTotal.toFixed(2);
      }
    }
    return theTotal;
  }

  return (
    <StyledDiv style={props.bills.length <= 1 ? {opacity: 0} : {}}>
      <h3>{calculateTotal()}</h3>
    </StyledDiv>
  )
}

export default Total;