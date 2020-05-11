import React, { useState } from 'react';
import './App.css';
import Bill from './components/Bill';
import BudgetForm from './components/BudgetForm';

const App = () => {
  const [bills, setBills] = useState([]);

  return (
    <div className="App">
      <Bill bills={bills} />
      <BudgetForm setBills={setBills} />
    </div>
  );
}

export default App;
