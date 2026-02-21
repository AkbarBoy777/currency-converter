const currencyFirst = document.getElementById('currency-first');
const worthFirst = document.getElementById('worth-first');

const currencySecond = document.getElementById('currency-second');
const worthSecond = document.getElementById('worth-second');

const exchangeRate = document.getElementById('exchange-rate');

updateRate();

function updateRate(){
    fetch(`https://v6.exchangerate-api.com/v6/4c71ae86f8b52263629e78d0/latest/${currencyFirst.value}`)
        .then((res) => res.json())
        .then((data) => {
            const rate = data.conversion_rates[`${currencySecond.value}`];
            exchangeRate.innerHTML = `1 ${currencyFirst.value} = ${Number(rate).toLocaleString('en-US')} ${currencySecond.value}`;    
            worthSecond.value = (Number(worthFirst.value) * rate).toLocaleString('en-US');
        });
}

currencyFirst.addEventListener('change', updateRate);

currencySecond.addEventListener('change', updateRate);

worthFirst.addEventListener("input", updateRate);