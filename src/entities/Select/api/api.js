
const loadCurrency = async (setCurrencies, setRates) => {
    try {
        const response = await fetch('https://raw.githubusercontent.com/Mirvik/currency-json/main/currency.json');
        if (!response.ok){
            throw new Error('Network response was not ok');
        }
        const result = await response.json();
        const dataRates = result.rates;

        const currencies = Object.keys(dataRates);

        const rates = Object.values(dataRates);

        setCurrencies(currencies);
        setRates(rates);
    }
    catch(error){
        console.error('Error fetching data: ', error)
    }
}

export { loadCurrency };