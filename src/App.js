import React, { useState } from 'react';
import styled from 'styled-components';
import './App.css';
import Bills from './components/Bills';
import BudgetForm from './components/BudgetForm';
import Total from './components/Total';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 60vh;
  justify-content: flex-end;
`

const App = () => {
  const [bills, setBills] = useState([]);

  return (
    <div className="App">
      <StyledDiv>
        <Bills bills={bills} setBills={setBills} />
        <BudgetForm bills={bills} setBills={setBills} />
        <Total bills={bills} />
      </StyledDiv>
    </div>
  );
}

export default App;
