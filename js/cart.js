/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
var table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
var cart;

function loadCart() {
  var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// DONE: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  var tableBody = document.getElementById('cart').tBodies[0];
  tableBody.innerHTML = '';
}

// DONE: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
  var tempCart = JSON.parse(localStorage['cart']);

  // DONE: Find the table body
  var tableBody = document.getElementById('cart').tBodies[0];

  // DONE: Iterate over the items in the cart
  for (var i = 0; i < tempCart.length; i++) {
    // DONE: Create a TR
    var tempTr = document.createElement('tr');
    // DONE: Create a TD for the delete link, quantity,  and the item

    // item
    var tempTd = document.createElement('td');
    tempTd.textContent = 'X';
    tempTr.appendChild(tempTd);

    // quantity
    tempTd = document.createElement('td');
    tempTd.textContent = tempCart[i].quantity;
    tempTr.appendChild(tempTd);

    // product
    tempTd = document.createElement('td');
    tempTd.textContent = tempCart[i].product;
    tempTr.appendChild(tempTd);

    // DONE: Add the TR to the TBODY and each of the TD's to the TR
    tableBody.appendChild(tempTr);
  }
}

function removeItemFromCart(event) {
  // DONE: When a delete link is clicked, use cart.removeItem to remove the correct item
  if (event.target.innerHTML === 'X') {
    var keyToRemove = event.path[1].lastChild.innerHTML;
    cart.removeItem(keyToRemove);
  }
  // DONE: Save the cart back to local storage
  localStorage.clear();
  cart.saveToLocalStorage();
  // DONE: Re-draw the cart table
  renderCart();
}

// This will initialize the page and draw the cart on screen
renderCart();
