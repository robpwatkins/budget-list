import React, { useState } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  width: 12px;
  margin: 5px;
  padding-bottom: 2px;
`

const DeleteButton = () => {
  return (
    <StyledButton>
      x
    </StyledButton>
  )
}

export default DeleteButton;