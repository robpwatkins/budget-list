import React, { useState } from 'react';

const Bill = (props) => {
  
  return (
    <div>
      {props.bills.map((bill, index) => {
        return (
          <div key={index}>
            <p>{bill}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Bill;