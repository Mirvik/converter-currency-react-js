import React from 'react';

const Output = ({amount, fromName, toName, fromValue, toValue}) => {

    const output = amount * fromValue * toValue;
    console.log(fromName);

    return (
        <p className="output">{amount} {fromName} = {fromName === toName ? amount : output } {toName}</p>
    )
}
export { Output }