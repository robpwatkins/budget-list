import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import ClearIcon from '@material-ui/icons/Clear';
import { TextField } from '@material-ui/core';
import { useOutsideClickAlerter } from '../hooks/outsideClickAlerter';

const StyledDiv = styled.div`
  display: flex;
  width: 60%;
  justify-content: space-between;
  align-items: center;
`
const BillDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 88%;
`;

const useStyles = makeStyles({
  root: {
    "& input::-webkit-clear-button, & input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
      display: "none",
    },
    "&:after": {
      borderBottom: "1px solid #212121"
    }
  },
  input: {
    padding: "10px 0 7px 0" 
  }
});

const inputProps = {
  step: 0.01
};

const Bill = (props) => {
  const ref = useRef();
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [input, setInput] = useState('');
  const [inputIsChanged, setInputIsChanged] = useState(false);

  useOutsideClickAlerter(ref, () => setIsClicked(false));

  const classes = useStyles();

  const updateInput = event => {
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
      >
      <BillDiv
        onClick={() => {
          setInput(props.bill);
          setIsClicked(true);
          setIsHovered(false);
        }}
        ref={ref}
      >
        {isClicked ? (
          <form onSubmit={handleSubmit}>
            <TextField
              InputProps={{ classes: classes, inputProps }} 
              type="number"
              step="0.01" 
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
      </BillDiv>
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