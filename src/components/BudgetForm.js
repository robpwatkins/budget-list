import React, { useState } from 'react';
import { Input, Button } from '@material-ui/core';

const buttonStyle = {
  margin: "15px"
}

const BudgetForm = (props) => {
  const [input, setInput] = useState('');
  
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
        <Input
          onChange={updateInput}
          placeholder={props.bills.length === 0 ? 'put a bill' : 'put another bill'}
          value={input}
          name="username"
          autoFocus={true}
          >
        </Input>
        <Button 
          type="submit"
          variant="contained"
          style={buttonStyle}
          >PUT IT!
        </Button>
      </form>
    </div>
  )
}

export default BudgetForm;