import React, { useState } from 'react';
import styled from 'styled-components';
import './App.css';
import Bills from './components/Bills';
import BudgetForm from './components/BudgetForm';
import Total from './components/Total';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 50vh;
  justify-content: flex-end;
`

const App = () => {
  const [bills, setBills] = useState([]);

  return (
    <div className="App">
      <StyledDiv>
        <Bills bills={bills}/>
        <BudgetForm bills={bills} setBills={setBills}/>
      </StyledDiv>
      <Total bills={bills}/>
    </div>
  );
}

export default App;
