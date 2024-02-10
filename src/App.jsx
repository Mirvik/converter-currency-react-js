import { createContext, createElement, useState } from 'react'
import Currency from '../components/Currency'


const MyContext = createContext("text");
function App() {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState(['AGLD', 0.7866582756450597]);
  const [toCurrency, setToCurrency] = useState(['AGLD', 0.7866582756450597]);

  return (
      <div className="card">
        <h1>Currency Converter</h1>
        <p>Amount</p>
        <input type="number" placeholder='1' onChange={(event) => event.target.value ? setAmount(event.target.value) : setAmount(1)} />
        <p>From</p>
        <select name="fromSelect" id="fromSelect" title='from' onChange={(event) => setFromCurrency([event.target.options[event.target.selectedIndex].text, event.target.value])}>
          < Currency />
        </select>
        <p>To</p>
        <select name="toSelect" id="toSelect" title='to' onChange={(event) => setToCurrency([event.target.options[event.target.selectedIndex].text, event.target.value])}>
          < Currency />
        </select>
        <p>Output:</p>
        <p className='output'>{amount} {fromCurrency[0]} = {fromCurrency[0] === toCurrency[0] ? amount : (amount * fromCurrency[1] * toCurrency[1])} {toCurrency[0]}</p>
        <button type='button'>Convert</button>
      </div>
  )
}

export default App