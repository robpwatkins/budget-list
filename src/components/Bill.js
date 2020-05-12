import React from 'react';

const Bill = (props) => {
  // const [isClicked, setIsClicked] = useState(false);

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