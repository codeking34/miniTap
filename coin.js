const coinList = document.getElementById('coinList');
   
   async function fetchCoinData() {
   try {
   const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd');
   const coins = await response.json();
   
   coins.forEach(coin => {
   const coinElement = document.createElement('div');
   coinElement.classList.add('coin');
   coinElement.innerHTML = `
   <img src="${coin.image}" alt="${coin.name}">
   <span>${coin.name}</span>
   <span>$${coin.current_price.toFixed(2)}</span>
   `;
   coinList.appendChild(coinElement);
   });
   } catch (error) {
   console.error('Error fetching data:', error);
   }
   }
   
   fetchCoinData();