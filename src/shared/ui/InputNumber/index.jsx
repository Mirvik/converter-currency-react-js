import React from 'react';
import './index.css';

const InputNumber = ({callback}) => {
  return (
    <input type='number' placeholder='1' onChange={(e) => callback(e.target.value)} />
  )
};
export { InputNumber }