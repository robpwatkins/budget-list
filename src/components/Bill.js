import React, { useState } from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import ClearIcon from '@material-ui/icons/Clear';
import { TextField } from '@material-ui/core';

const StyledDiv = styled.div`
  display: flex;
  width: 60%;
  justify-content: space-between;
  align-items: center;
`

const useStyles = makeStyles({
  root: {
    "&:after": {
      borderBottom: "1px solid #212121"
    }
  },
  input: {
    padding: "10px 0 7px 0" 
  }
});

const Bill = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [input, setInput] = useState('');
  const [inputIsChanged, setInputIsChanged] = useState(false);
  const classes = useStyles();

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
    setIsHovered(false);
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
          <TextField
            InputProps={{ classes: classes }} 
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