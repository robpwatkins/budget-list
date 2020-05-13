import React, { useState } from 'react';
import styled from 'styled-components';
import ClearIcon from '@material-ui/icons/Clear';
import { Input, Button } from '@material-ui/core';

const StyledDiv = styled.div`
  display: flex;
  width: 60%;
  justify-content: space-between;
  align-items: center;
`

const Bill = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const handleSubmit = event => {
    event.preventDefault();
    console.log('heyoo');
  }

  return (
    <StyledDiv 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsClicked(true)}
    >
      {isClicked ? (
        <form onSubmit={handleSubmit}>
          <Input type="text" placeholder={props.bill.toString()} />
        </form>
        ):(
          <p>{props.bill}</p>
        )
      }
      {isHovered && (
        <ClearIcon 
          fontSize="small" 
          onClick={() => {
            const newBills = props.bills;
            newBills.splice(props.index, 1);
            props.setBills([ ...newBills ]);
          }}
        />
      )}
    </StyledDiv>
  )
}

export default Bill;