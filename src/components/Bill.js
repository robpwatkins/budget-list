import React, { useState } from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  display: flex;
  width: 60%;
  justify-content: space-between;
  align-items: center;
`

const DeleteButton = styled.button`
  width: 12px;
  margin: 5px;
  padding-bottom: 2px;
`

const Bill = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <StyledDiv 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <p>{props.bill}</p>
      {isHovered && (
        <DeleteButton onClick={() => console.log(props.index)}>
          x
        </DeleteButton>
      )}
    </StyledDiv>
  )
}

export default Bill;