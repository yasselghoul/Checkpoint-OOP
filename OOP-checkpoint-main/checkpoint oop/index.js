// Product class to store id, name, and price of the product
class Product {
    constructor(id, name, price) {
      this.id = id;
      this.name = name;
      this.price = price;
    }
  }
  
  // ShoppingCartItem class to store the product and its quantity
  class ShoppingCartItem {
    constructor(product, quantity) {
      this.product = product;
      this.quantity = quantity;
    }
  
    // Method to calculate total price for the ShoppingCartItem
    getTotalPrice() {
      return this.product.price * this.quantity;
    }
  }
  
  // ShoppingCart class to manage an array of ShoppingCartItem instances
  class ShoppingCart {
    constructor() {
      this.items = [];
    }
  
    // Method to add an item to the cart
    addItem(product, quantity) {
      const existingItem = this.items.find(item => item.product.id === product.id);
      if (existingItem) {
        existingItem.quantity += quantity; // If item exists, increase quantity
      } else {
        const cartItem = new ShoppingCartItem(product, quantity);
        this.items.push(cartItem);
      }
    }
  
    // Method to remove an item from the cart
    removeItem(productId) {
      this.items = this.items.filter(item => item.product.id !== productId);
    }
  
    // Method to get total number of items in the cart
    getTotalItems() {
      return this.items.reduce((total, item) => total + item.quantity, 0);
    }
  
    // Method to get the total price of the cart
    getTotalPrice() {
      return this.items.reduce((total, item) => total + item.getTotalPrice(), 0);
    }
  
    // Method to display all items in the cart
    displayCart() {
      if (this.items.length === 0) {
        console.log("The cart is empty.");
      } else {
        console.log("Items in your cart:");
        this.items.forEach(item => {
          console.log(
            `Product: ${item.product.name}, Quantity: ${item.quantity}, Price per unit: $${item.product.price}, Total price: $${item.getTotalPrice()}`
          );
        });
        console.log(`Total items: ${this.getTotalItems()}`);
        console.log(`Total price: $${this.getTotalPrice()}`);
      }
    }
  }
  
  // Testing our object classes
  
  // Create products
  const product1 = new Product(1, "Laptop", 999);
  const product2 = new Product(2, "Phone", 499);
  const product3 = new Product(3, "Headphones", 199);
  
  // Create a shopping cart
  const cart = new ShoppingCart();
  
  // Add items to the cart
  cart.addItem(product1, 1);
  cart.addItem(product2, 2);
  cart.addItem(product3, 1);
  
  // Display the cart
  cart.displayCart();
  
  // Remove an item from the cart
  cart.removeItem(2);
  
  // Display the cart after removing an item
  cart.displayCart();
  