import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    "& input::-webkit-clear-button, & input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
      display: "none"
    },
    "&:after": {
      borderBottom: "1px solid #212121"
    }
  },
  input: {
    padding: "13px 0 7px 0" 
  },
});

const inputProps = {
  step: 0.01
};

const buttonStyle = {
  height: "100%",
  margin: "0 15px"
}

const BudgetForm = (props) => {
  const [input, setInput] = useState('');

  const classes = useStyles();

  const updateInput = (event) => {
    setInput(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setInput(input);
    props.setBills([Number(input), ...props.bills])
    setInput('');
  }

  return (
    <div>
      <form action="" onSubmit={handleSubmit} autoComplete="off">
        <TextField
          InputProps={{ classes: classes, inputProps }}
          onChange={updateInput}
          placeholder={props.bills.length === 0 ? 'put a bill' : 'put another bill'}
          value={input}
          autoFocus={true}
          type="number"
        >
        </TextField>
        <Button 
          type="submit"
          variant="contained"
          style={buttonStyle}
        >
          PUT IT!
        </Button>
      </form>
    </div>
  )
}

export default BudgetForm;