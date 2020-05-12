import React from 'react';

const Total = (props) => {
  return (
    <div>
      <h3>
        {props.bills.length > 1 && props.bills.reduce((a, b) => a + b)}
      </h3>
    </div>
  )
}

export default Total;