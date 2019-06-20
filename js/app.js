'use strict';

// Cart constructor.
var Cart = function(items) {
  // this.items is an array of CartItem instances.
  this.items = items;
};

Cart.prototype.addItem = function(product, quantity) {
  // DONE: Fill in this instance method to create a new CartItem and add it to this.items
  var tempCartItem = new CartItem(product, quantity);
  this.items.push(tempCartItem);
};

Cart.prototype.saveToLocalStorage = function() {
  // DONE: Fill in this instance method to save the contents of the cart to localStorage
  // get items from cart

  if (localStorage.getItem('cart')) {
    var tempCart = JSON.parse(localStorage.getItem('cart'));
    // add new items to cart
    // 0 -> new item, 1 -> update required, 2 -> duplicate
    var flag = 0;
    var j, i;

    for (i = 0; i < tempCart.length; i++) {
      for (j = 0; j < this.items.length; j++) {
        if (this.items[j].product === tempCart[i].product) {
          if (this.items[j].quantity !== tempCart[i].quantity) {
            flag = 1;
            // this.items[j].quantity += tempCart[i].quantity;
            break;
          }
        } else {
          // this.addItem(tempCart[i].product, tempCart[i].quantity);
          flag = 2;
        }
      }
      switch (flag) {
      case 0:
        this.addItem(tempCart[i].product, tempCart[i].quantity);
        break;
      case 1:
        this.items[j].quantity += tempCart[i].quantity;
        break;
      case 2:
        break;
      default:
      }
    }
    localStorage.setItem('cart', JSON.stringify(this.items));
  } else {
    localStorage.setItem('cart', JSON.stringify(this.items));
  }
};

Cart.prototype.removeItem = function(item) {
  // TODO: Fill in this instance method to remove one item from the cart.
  // Note: You will have to decide what kind of parameter to pass in here!
};

var CartItem = function(product, quantity) {
  this.product = product;
  this.quantity = quantity;
};

// Product contructor.
var Product = function(filePath, name) {
  this.filePath = filePath;
  this.name = name;
  Product.allProducts.push(this);
};
Product.allProducts = [];

function generateCatalog() {
  new Product('assets/bag.jpg', 'Bag');
  new Product('assets/banana.jpg', 'Banana');
  new Product('assets/bathroom.jpg', 'Bathroom');
  new Product('assets/boots.jpg', 'Boots');
  new Product('assets/breakfast.jpg', 'Breakfast');
  new Product('assets/bubblegum.jpg', 'Bubblegum');
  new Product('assets/chair.jpg', 'Chair');
  new Product('assets/cthulhu.jpg', 'Cthulhu');
  new Product('assets/dog-duck.jpg', 'Dog-Duck');
  new Product('assets/dragon.jpg', 'Dragon');
  new Product('assets/pen.jpg', 'Pen');
  new Product('assets/pet-sweep.jpg', 'Pet Sweep');
  new Product('assets/scissors.jpg', 'Scissors');
  new Product('assets/shark.jpg', 'Shark');
  new Product('assets/sweep.png', 'Sweep');
  new Product('assets/tauntaun.jpg', 'Taun-Taun');
  new Product('assets/unicorn.jpg', 'Unicorn');
  new Product('assets/usb.gif', 'USB');
  new Product('assets/water-can.jpg', 'Water Can');
  new Product('assets/wine-glass.jpg', 'Wine Glass');
}

// Initialize the app by creating the big list of products with images and names
generateCatalog();
