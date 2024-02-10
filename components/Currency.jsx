import { useEffect, useContext, useState } from "react"

function Currency(){
    const [currencies, setCurrencies] = useState([]);
    const [rates, setRates] = useState([]);

    useEffect ( () => {
        const fetchData = async() => {
            try {
                const response = await fetch('https://raw.githubusercontent.com/Mirvik/currency-json/main/currency.json');
                if (!response.ok){
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                const dataRates = result.rates;

                setCurrencies(Object.keys(dataRates));
                setRates(Object.values(dataRates));
            }
            catch(error){
                console.error('Error fetching data: ', error)
            }
        };
        fetchData();
    }, []);

    return (
        <>
            {currencies.map((currency, index) => (
                <option key={index} value={rates[index]}>
                    {currency}
                </option>
            ))}
        </>
    )
}

export default Currency;