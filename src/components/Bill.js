import React, { useState } from 'react';
import styled from 'styled-components';
import DeleteButton from '../components/DeleteButton';

const StyledDiv = styled.div`
  display: flex;
  width: 60%;
  justify-content: space-between;
  align-items: center;
`



const Bill = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
      {props.bills.map((bill, index) => {
        return (
          <StyledDiv 
            key={index} 
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <p>{bill}</p>
            {isHovered && (
              <DeleteButton />
            )}
          </StyledDiv>
        )
      })}
    </div>
  )
}

export default Bill;