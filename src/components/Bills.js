import React, { useState } from 'react';
import styled from 'styled-components';
import DeleteButton from './DeleteButton';

const OverflowGuy = styled.div`
  display: flex;
  flex-direction: column-reverse;
  overflow: scroll;
`

const StyledDiv = styled.div`
  display: flex;
  width: 60%;
  justify-content: space-between;
  align-items: center;
`



const Bill = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <OverflowGuy>
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
    </OverflowGuy>
  )
}

export default Bill;