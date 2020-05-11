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
    props.setBills([ ...props.bills, input])
    setInput('');
  }

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <Input
          onChange={updateInput}
          placeholder="put a bill"
          value={input}
          name="username"
          >
        </Input>
        <Button 
          type="submit"
          variant="contained"
          style={buttonStyle}
          >Put!
        </Button>
      </form>
    </div>
  )
}

export default BudgetForm;