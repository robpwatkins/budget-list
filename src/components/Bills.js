import React from 'react';
import styled from 'styled-components';
import DeleteButton from './DeleteButton';
import Bill from '../components/Bill';

const OverflowGuy = styled.div`
  display: flex;
  flex-direction: column-reverse;
  overflow: scroll;
`




const Bills = (props) => {

  return (
    <OverflowGuy>
      {props.bills.map((bill, index) => {
        return (
          <Bill bill={bill} key={index} />
        )
      })}
    </OverflowGuy>
  )
}

export default Bills;