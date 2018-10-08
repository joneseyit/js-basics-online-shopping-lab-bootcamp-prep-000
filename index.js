var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 let newObj = {};
 newObj["itemName"] = item;
 newObj["itemPrice"] = Math.floor(Math.random()*100);
 cart.push(newObj);
 return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  if(cart.length === 0) return "Your shopping cart is empty.";
  let newString = "In your cart, you have";
  for(let i = 0; i < cart.length; i++){
    let curItem = cart[i].itemName;
    let curPrice = cart[i].itemPrice;
    if(cart.length === 1){
    newString +=` ${curItem} at $${curPrice}.`;
    } else if(cart.length - 1 === i){
      newString += ` and ${curItem} at $${curPrice}.`;
    } else {
      newString += ` ${curItem} at $${curPrice},`
    }
    
  }
  return newString;
}

function total() {
  // write your code here
  let sum = 0;
  for(let i = 0; i < cart.length; i++){
    sum += cart[i].itemPrice;
  }
  return sum
}

function removeFromCart(item) {
  // write your code here
  
}

function placeOrder(cardNumber) {
  // write your code here
}
