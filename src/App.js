import React, { useState, useEffect, useRef } from 'react';
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

const LilTester = styled.div`
  width: 500px;
  height: 250px;
  background: hotpink;
`;

const App = () => {
  const ref = useRef();
  const [bills, setBills] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  useOnClickOutside(ref, () => setModalOpen(false));

  return (
    <div className="App">
      <StyledDiv>
          {isModalOpen ? (
            <LilTester ref={ref}>
              Im a lil tester :)
            </LilTester>
          ):(
            <button onClick={() => setModalOpen(true)}>Open Lil Tester</button>
          )}
        <Bills bills={bills} setBills={setBills} />
        <BudgetForm bills={bills} setBills={setBills} />
        <Total bills={bills} />
      </StyledDiv>
    </div>
  );
}

function useOnClickOutside(ref, handler) {
  useEffect(
    () => {
      const listener = event => {
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }
        handler(event);
      };

      document.addEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    },
    [ref, handler]
  );  
}

export default App;
