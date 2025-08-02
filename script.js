// Import HTML Elements to JavaScript
// 1. Bitcoin Elements
let bitcoinPrice = document.querySelector(".bitcoinPrice");
let bitcoinPriceTable = document.querySelector(".bitcoinPriceTable");
let bitcoinPercentageNumber = document.getElementById(
  "bitcoinPercentageNumber"
);
let bitcoinPercentageValue = document.querySelector(".bitcoinPercentageValue");
let bitcoinPercentageColour = document.querySelector(".bitcoinPercentage");
let bitcoinPercentageValueTable = document.querySelector(
  ".bitcoinPercentageValueTable"
);
let bitcoinPercentageTable = document.querySelector(".bitcoinPercentageTable");
let bitcoinMarketCap = document.querySelector(".bitcoinMarketCap");
let bitcoinChartUp = document.querySelector(".bitcoin-chart-up");
let bitcoinChartDown = document.querySelector(".bitcoin-chart-down");

// 2. Ethereum Elements
let ethPrice = document.querySelector(".ethPrice");
let ethPriceTable = document.querySelector(".ethPriceTable");
let ethPercentageNumber = document.getElementById("ethPercentageNumber");
let ethPercentageValue = document.querySelector(".ethPercentageValue");
let ethPercentageColour = document.querySelector(".ethPercentage");
let ethPercentageValueTable = document.querySelector(
  ".ethPercentageValueTable"
);
let ethPercentageTable = document.querySelector(".ethPercentageTable");
let ethMarketCap = document.querySelector(".ethMarketCap");
let ethChartUp = document.querySelector(".eth-chart-up");
let ethChartDown = document.querySelector(".eth-chart-down");

// 3. XRPCoin Elements
let xrpPriceTable = document.querySelector(".xrpPriceTable");
let xrpPercentageTable = document.querySelector(".xrpPercentageTable");
let xrpMarketCap = document.querySelector(".xrpMarketCap");
let xrpChartUp = document.querySelector(".xrp-chart-up");
let xrpChartDown = document.querySelector(".xrp-chart-down");

// 4. TetherCoin Elements
let tetherPriceTable = document.querySelector(".tetherPriceTable");
let tetherPercentageTable = document.querySelector(".tetherPercentageTable");
let tetherMarketCap = document.querySelector(".tetherMarketCap");
let tetherChartUp = document.querySelector(".tether-chart-up");
let tetherChartDown = document.querySelector(".tether-chart-down");

// 5. BNB Elements
let bnbPrice = document.querySelector(".bnbPrice");
let bnbPriceTable = document.querySelector(".bnbPriceTable");
let bnbPercentageNumber = document.getElementById("bnbPercentageNumber");
let bnbPercentageValue = document.querySelector(".bnbPercentageValue");
let bnbPercentageColour = document.querySelector(".bnbPercentage");
let bnbPercentageValueTable = document.querySelector(
  ".bnbPercentageValueTable"
);
let bnbPercentageTable = document.querySelector(".bnbPercentageTable");
let bnbMarketCap = document.querySelector(".bnbMarketCap");
let bnbChartUp = document.querySelector(".bnb-chart-up");
let bnbChartDown = document.querySelector(".bnb-chart-down");

// 6. Solana Elements
let solanaPrice = document.querySelector(".solanaPrice");
let solanaPriceTable = document.querySelector(".solanaPriceTable");
let solanaPercentageNumber = document.getElementById("solanaPercentageNumber");
let solanaPercentageValue = document.querySelector(".solanaPercentageValue");
let solanaPercentageColour = document.querySelector(".solanaPercentage");
let solanaPercentageValueTable = document.querySelector(
  ".solanaPercentageValueTable"
);
let solanaPercentageTable = document.querySelector(".solanaPercentageTable");
let solanaMarketCap = document.querySelector(".solanaMarketCap");
let solanaChartUp = document.querySelector(".solana-chart-up");
let solanaChartDown = document.querySelector(".solana-chart-down");

// 7. DogeCoin Elements
let dogePriceTable = document.querySelector(".dogePriceTable");
let dogePercentageTable = document.querySelector(".dogePercentageTable");
let dogeMarketCap = document.querySelector(".dogeMarketCap");
let dogeChartUp = document.querySelector(".doge-chart-up");
let dogeChartDown = document.querySelector(".doge-chart-down");

// 8. CardanoCoin Elements
let cardanoPriceTable = document.querySelector(".cardanoPriceTable");
let cardanoPercentageTable = document.querySelector(".cardanoPercentageTable");
let cardanoMarketCap = document.querySelector(".cardanoMarketCap");
let cardanoChartUp = document.querySelector(".cardano-chart-up");
let cardanoChartDown = document.querySelector(".cardano-chart-down");

// 9. SuiCoin Elements
let suiPriceTable = document.querySelector(".suiPriceTable");
let suiPercentageTable = document.querySelector(".suiPercentageTable");
let suiMarketCap = document.querySelector(".suiMarketCap");
let suiChartUp = document.querySelector(".sui-chart-up");
let suiChartDown = document.querySelector(".sui-chart-down");

// 10. AvalancheCoin Elements
let avaxPriceTable = document.querySelector(".avaxPriceTable");
let avaxPercentageTable = document.querySelector(".avaxPercentageTable");
let avaxMarketCap = document.querySelector(".avaxMarketCap");
let avaxChartUp = document.querySelector(".avax-chart-up");
let avaxChartDown = document.querySelector(".avax-chart-down");

// Declare empty variables to store data for use later
let bitcoinArray = null;
let ethArray = null;
let rippleArray = null;
let tetherArray = null;
let bnbArray = null;
let solanaArray = null;
let dogecoinArray = null;
let cardanoArray = null;
let suiArray = null;
let avalancheArray = null;

// API Key
const aPIKey = {
  method: "GET",
  headers: {
    accept: "application/json",
    "x-cg-demo-api-key": "CG-4YWTtNbP64NShstWgSJiLVV9",
  },
};

// API URL
let aPIUrl =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&names=ethereum%2C%20bitcoin%2C%20tether%2C%20bnb%2C%20solana%2C%20xrp%2C%20cardano%2C%20avalanche%2C%20dogecoin%2C%20sui";

//   API Function
async function fetchCryptoData() {
  try {
    const response = await fetch(aPIUrl, aPIKey);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    bitcoinArray = data[0];
    bitcoinDisplayDOM();
    ethArray = data[1];
    ethDisplayDOM();
    rippleArray = data[2];
    xrpDisplayDOM();
    tetherArray = data[3];
    tetherDisplayDOM();
    bnbArray = data[4];
    bnbDisplayDOM();
    solanaArray = data[5];
    solanaDisplayDOM();
    dogecoinArray = data[6];
    dogecoinDisplayDOM();
    cardanoArray = data[7];
    cardanoDisplayDOM();
    suiArray = data[8];
    suiDisplayDOM();
    avalancheArray = data[9];
    avalancheDisplayDOM();
    // END
    console.log(data);
  } catch (error) {
    console.error("Error fetching crypto data:", error);
  }
}
fetchCryptoData();

// Convert API Data Number to Two Decimal Places
function currencyToDecimal(num) {
  return Number(num).toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}
// Convert API Data Number to Two Decimal Places
function currencyToCommaNumber(num) {
  return Number(num).toLocaleString("en-US");
}

// 1. Bitcoin Data Function
function bitcoinDisplayDOM() {
  bitcoinPrice.textContent = currencyToDecimal(bitcoinArray.current_price);
  bitcoinPriceTable.textContent = currencyToDecimal(bitcoinArray.current_price);
  bitcoinPercentageNumber.textContent = currencyToDecimal(
    bitcoinArray.high_24h
  );
  bitcoinPercentageValue.textContent = currencyToDecimal(
    bitcoinArray.price_change_percentage_24h
  );
  if (bitcoinPercentageValue.textContent < 0)
    bitcoinPercentageColour.style.backgroundColor = "rgba(177, 23, 23, 0.322)";
  else {
    bitcoinPercentageColour.style.backgroundColor = "rgba(23, 177, 23, 0.322)";
  }
  bitcoinPercentageValueTable.textContent = currencyToDecimal(
    bitcoinArray.price_change_percentage_24h
  );
  if (bitcoinPercentageValueTable.textContent < 0.0) {
    bitcoinPercentageTable.style.color = "rgb(211, 54, 54)";
    bitcoinChartDown.style.display = "block";
  } else {
    bitcoinPercentageTable.style.color = "rgb(87, 188, 124)";
    bitcoinChartUp.style.display = "block";
  }
  bitcoinMarketCap.textContent = currencyToCommaNumber(bitcoinArray.market_cap);
}

// 2. Ethereum Data Function
function ethDisplayDOM() {
  ethPrice.textContent = currencyToDecimal(ethArray.current_price);
  ethPriceTable.textContent = currencyToDecimal(ethArray.current_price);
  ethPercentageNumber.textContent = currencyToDecimal(ethArray.high_24h);
  ethPercentageValue.textContent = currencyToDecimal(
    ethArray.price_change_percentage_24h
  );
  if (ethPercentageValue.textContent < 0)
    ethPercentageColour.style.backgroundColor = "rgba(177, 23, 23, 0.322)";
  else {
    ethPercentageColour.style.backgroundColor = "rgba(23, 177, 23, 0.322)";
  }
  ethPercentageValueTable.textContent = currencyToDecimal(
    ethArray.price_change_percentage_24h
  );
  if (ethPercentageValueTable.textContent < 0.0) {
    ethPercentageTable.style.color = "rgb(211, 54, 54)";
    ethChartDown.style.display = "block";
  } else {
    ethPercentageTable.style.color = "rgb(87, 188, 124)";
    ethChartUp.style.display = "block";
  }
  ethMarketCap.textContent = currencyToCommaNumber(ethArray.market_cap);
}

// 3. XRP Data Function
function xrpDisplayDOM() {
  xrpPriceTable.textContent = currencyToDecimal(rippleArray.current_price);
  xrpPercentageTable.textContent = currencyToDecimal(
    rippleArray.price_change_percentage_24h
  );
  if (xrpPercentageTable.textContent < 0.0) {
    xrpPercentageTable.style.color = "rgb(211, 54, 54)";
    xrpChartDown.style.display = "block";
  } else {
    xrpPercentageTable.style.color = "rgb(87, 188, 124)";
    xrpChartUp.style.display = "block";
  }
  xrpMarketCap.textContent = currencyToCommaNumber(rippleArray.market_cap);
}

// 4. Tether Data Function
function tetherDisplayDOM() {
  tetherPriceTable.textContent = currencyToDecimal(tetherArray.current_price);
  tetherPercentageTable.textContent = currencyToDecimal(
    tetherArray.price_change_percentage_24h
  );
  if (tetherPercentageTable.textContent < 0.0) {
    tetherPercentageTable.style.color = "rgb(211, 54, 54)";
    tetherChartDown.style.display = "block";
  } else {
    tetherPercentageTable.style.color = "rgb(87, 188, 124)";
    tetherChartUp.style.display = "block";
  }
  tetherMarketCap.textContent = currencyToCommaNumber(tetherArray.market_cap);
}

// 5. BNB Data Function
function bnbDisplayDOM() {
  bnbPrice.textContent = currencyToDecimal(bnbArray.current_price);
  bnbPriceTable.textContent = currencyToDecimal(bnbArray.current_price);
  bnbPercentageNumber.textContent = currencyToDecimal(bnbArray.high_24h);
  bnbPercentageValue.textContent = currencyToDecimal(
    bnbArray.price_change_percentage_24h
  );
  if (bnbPercentageValue.textContent < 0)
    bnbPercentageColour.style.backgroundColor = "rgba(177, 23, 23, 0.322)";
  else {
    bnbPercentageColour.style.backgroundColor = "rgba(23, 177, 23, 0.322)";
  }
  bnbPercentageValueTable.textContent = currencyToDecimal(
    bnbArray.price_change_percentage_24h
  );
  if (bnbPercentageValueTable.textContent < 0.0) {
    bnbPercentageTable.style.color = "rgb(211, 54, 54)";
    bnbChartDown.style.display = "block";
  } else if (bnbPercentageValueTable.textContent > 0) {
    bnbPercentageTable.style.color = "rgb(87, 188, 124)";
    bnbChartUp.style.display = "block";
  }
  bnbMarketCap.textContent = currencyToCommaNumber(bnbArray.market_cap);
}

// 6. Solana Data Function
function solanaDisplayDOM() {
  solanaPrice.textContent = currencyToDecimal(solanaArray.current_price);
  solanaPriceTable.textContent = currencyToDecimal(solanaArray.current_price);
  solanaPercentageNumber.textContent = currencyToDecimal(solanaArray.high_24h);
  solanaPercentageValue.textContent = currencyToDecimal(
    solanaArray.price_change_percentage_24h
  );
  if (solanaPercentageValue.textContent < 0)
    solanaPercentageColour.style.backgroundColor = "rgba(177, 23, 23, 0.322)";
  else {
    solanaPercentageColour.style.backgroundColor = "rgba(23, 177, 23, 0.322)";
  }
  solanaPercentageValueTable.textContent = currencyToDecimal(
    solanaArray.price_change_percentage_24h
  );
  if (solanaPercentageValueTable.textContent < 0.0) {
    solanaPercentageTable.style.color = "rgb(211, 54, 54)";
    solanaChartDown.style.display = "block";
  } else {
    solanaPercentageTable.style.color = "rgb(87, 188, 124)";
    solanaChartUp.style.display = "block";
  }
  solanaMarketCap.textContent = currencyToCommaNumber(solanaArray.market_cap);
}

// 7. DogeCoin Data Function
function dogecoinDisplayDOM() {
  dogePriceTable.textContent = currencyToDecimal(dogecoinArray.current_price);
  dogePercentageTable.textContent = currencyToDecimal(
    dogecoinArray.price_change_percentage_24h
  );
  if (dogePercentageTable.textContent < 0.0) {
    dogePercentageTable.style.color = "rgb(211, 54, 54)";
    dogeChartDown.style.display = "block";
  } else {
    dogePercentageTable.style.color = "rgb(87, 188, 124)";
    dogeChartUp.style.display = "block";
  }
  dogeMarketCap.textContent = currencyToCommaNumber(dogecoinArray.market_cap);
}

// 8. CardanoCoin Data Function
function cardanoDisplayDOM() {
  cardanoPriceTable.textContent = currencyToDecimal(cardanoArray.current_price);
  cardanoPercentageTable.textContent = currencyToDecimal(
    cardanoArray.price_change_percentage_24h
  );
  if (cardanoPercentageTable.textContent < 0.0) {
    cardanoPercentageTable.style.color = "rgb(211, 54, 54)";
    cardanoChartDown.style.display = "block";
  } else {
    cardanoPercentageTable.style.color = "rgb(87, 188, 124)";
    cardanoChartUp.style.display = "block";
  }
  cardanoMarketCap.textContent = currencyToCommaNumber(cardanoArray.market_cap);
}

// 9. SuiCoin Data Function
function suiDisplayDOM() {
  suiPriceTable.textContent = currencyToDecimal(suiArray.current_price);
  suiPercentageTable.textContent = currencyToDecimal(
    suiArray.price_change_percentage_24h
  );
  if (suiPercentageTable.textContent < 0.0) {
    suiPercentageTable.style.color = "rgb(211, 54, 54)";
    suiChartDown.style.display = "block";
  } else {
    suiPercentageTable.style.color = "rgb(87, 188, 124)";
    suiChartUp.style.display = "block";
  }
  suiMarketCap.textContent = currencyToCommaNumber(suiArray.market_cap);
}

// 10. Avalanche Data Function
function avalancheDisplayDOM() {
  avaxPriceTable.textContent = currencyToDecimal(avalancheArray.current_price);
  avaxPercentageTable.textContent = currencyToDecimal(
    avalancheArray.price_change_percentage_24h
  );
  if (avaxPercentageTable.textContent < 0.0) {
    avaxPercentageTable.style.color = "rgb(211, 54, 54)";
    avaxChartDown.style.display = "block";
  } else {
    avaxPercentageTable.style.color = "rgb(87, 188, 124)";
    avaxChartUp.style.display = "block";
  }
  avaxMarketCap.textContent = currencyToCommaNumber(avalancheArray.market_cap);
}

// Light Mode and Dark Mode Function
let lightMode = document.getElementById("lightmode");
let darkMode = document.getElementById("darkmode");

lightMode.addEventListener("click", () => {
  document.body.classList.add("light-mode");
  darkMode.style.display = "block";
  lightMode.style.display = "none";
});
darkMode.addEventListener("click", () => {
  document.body.classList.remove("light-mode");
  lightMode.style.display = "block";
  darkMode.style.display = "none";
});

// Import Element To Be Animated!
const marketDisplay = document.querySelector(".market-display");

// Animation Function
const newViewportAnimation = new IntersectionObserver(
  (trackElement) => {
    const elementObserved = trackElement[0]; // Only one element is tracked
    if (elementObserved.isIntersecting) {
      elementObserved.target.classList.add("active");
    } else {
      elementObserved.target.classList.remove("active"); // Reverses the animation
    }
  },
  {
    threshold: 0.05, // [0.3, 1] Trigger when 10% of the element is visible within the Viewport
  }
);

// Pass in the the imported element name as your argument
newViewportAnimation.observe(marketDisplay);

// METHOD 2 for Intersection Observer Function
// Import multiple HTML elements to JavaScript
// const images = document.querySelectorAll(".fade-in");

// Declare a function
// const observer = new IntersectionObserver(
//   (entries) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         entry.target.classList.add("active");
//       } else {
//         entry.target.classList.remove("active");
//       }
//     });
//   },
//   { threshold: 0.5 }
// );

// images.forEach((img) => observer.observe(img));
