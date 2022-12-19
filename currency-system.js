//Create an object to store the currency
let currency = {
  coins: 0,
  gems: 0,
  tokens: 0
};

//Create a function to add currency to the object
function addCurrency(type, amount) {
  if (type === 'coins') {
    currency.coins += amount;
  }
  else if (type === 'gems') {
    currency.gems += amount;
  }
  else if (type === 'tokens') {
    currency.tokens += amount;
  }
}

//Create a function to subtract currency from the object
function subtractCurrency(type, amount) {
  if (type === 'coins') {
    currency.coins -= amount;
  }
  else if (type === 'gems') {
    currency.gems -= amount;
  }
  else if (type === 'tokens') {
    currency.tokens -= amount;
  }
}

//Create a function to check if a player has enough currency to purchase a given item
function checkBalance(type, amount) {
  if (type === 'coins') {
    if (currency.coins >= amount) {
      return true;
    }
    else {
      return false;
    }
  }
  else if (type === 'gems') {
    if (currency.gems >= amount) {
      return true;
    }
    else {
      return false;
    }
  }
  else if (type === 'tokens') {
    if (currency.tokens >= amount) {
      return true;
    }
    else {
      return false;
    }
  }
}