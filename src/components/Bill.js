import React, { useState } from 'react';
import styled from 'styled-components';
import ClearIcon from '@material-ui/icons/Clear';
import { Input } from '@material-ui/core';

const StyledDiv = styled.div`
  display: flex;
  width: 60%;
  justify-content: space-between;
  align-items: center;
`

const Bill = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [input, setInput] = useState('');
  const [inputIsChanged, setInputIsChanged] = useState(false);

  const updateInput = (event) => {
    setInput(event.target.value);
    setInputIsChanged(true)
  }

  const handleSubmit = event => {
    event.preventDefault();
    if (inputIsChanged) {
      const newBills = props.bills;
      newBills.splice(props.index, 1);
      newBills.splice(props.index, 0, Number(input));
      props.setBills([ ...newBills ]);
    }
    setIsClicked(false);
  }

  return (
    <StyledDiv 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => {
        setInput(props.bill);
        setIsClicked(true)
      }}
    >
      {isClicked ? (
        <form onSubmit={handleSubmit}>
          <Input 
            type="text" 
            placeholder={props.bill.toString()}
            value={input}
            onChange={updateInput}
            autoFocus={true}
          />
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