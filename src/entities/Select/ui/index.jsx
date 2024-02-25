import React, { useEffect, useState } from "react";
import { loadCurrency } from "../api/api.js";
import './index.css';

const Select = ({name, id, setName, setValue}) => {

  const [currencies, setCurrencies]  = useState([]);
  const [rates, setRates] = useState([]);

  useEffect( () => {
    loadCurrency(setCurrencies, setRates);
  }, []);
  console.log(rates);


  return (
      <select name={name} id={id} onChange={(e) => { setName(e.target.options[e.target.selectedIndex].text);  setValue(e.target.value)} }>
        {currencies.map((currency, index) => <option key={index} value={rates[index]}>{currency}</option>)}
      </select>
  )
};
export { Select };