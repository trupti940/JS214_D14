// Base constructor function for Product
function Product(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
}

// Add methods to Product prototype
Product.prototype.getDetails = function() {
    return `Name: ${this.name}, Price: $${this.price}, Quantity: ${this.quantity}`;
};

Product.prototype.updateQuantity = function(newQuantity) {
    this.quantity = newQuantity;
    console.log(`${this.name} quantity updated to ${this.quantity}.`);
};

// Constructor function for Electronics
function Electronics(name, price, quantity, brand, model) {
    Product.call(this, name, price, quantity); // Call the parent constructor
    this.brand = brand;
    this.model = model;
}

// Inherit from Product
Electronics.prototype = Object.create(Product.prototype);
Electronics.prototype.constructor = Electronics;

// Add methods specific to Electronics
Electronics.prototype.powerOn = function() {
    console.log(`${this.brand} ${this.model} is now powered on.`);
};

Electronics.prototype.powerOff = function() {
    console.log(`${this.brand} ${this.model} is now powered off.`);
};

// Constructor function for Clothing
function Clothing(name, price, quantity, size, material) {
    Product.call(this, name, price, quantity); // Call the parent constructor
    this.size = size;
    this.material = material;
}

// Inherit from Product
Clothing.prototype = Object.create(Product.prototype);
Clothing.prototype.constructor = Clothing;

// Add methods specific to Clothing
Clothing.prototype.getSize = function() {
    return `Size: ${this.size}`;
};

Clothing.prototype.getMaterial = function() {
    return `Material: ${this.material}`;
};

// Constructor function for Books
function Books(name, price, quantity, author, genre) {
    Product.call(this, name, price, quantity); // Call the parent constructor
    this.author = author;
    this.genre = genre;
}

// Inherit from Product
Books.prototype = Object.create(Product.prototype);
Books.prototype.constructor = Books;

// Add methods specific to Books
Books.prototype.getAuthor = function() {
    return `Author: ${this.author}`;
};

Books.prototype.getGenre = function() {
    return `Genre: ${this.genre}`;
};

// Demonstration

// Create instances of each product type
const laptop = new Electronics('Laptop', 999.99, 10, 'Dell', 'XPS 13');
const tshirt = new Clothing('T-Shirt', 19.99, 50, 'L', 'Cotton');
const book = new Books('JavaScript Essentials', 29.99, 100, 'John Doe', 'Programming');

// Display product details
console.log(laptop.getDetails()); // Name: Laptop, Price: $999.99, Quantity: 10
laptop.powerOn(); // Dell XPS 13 is now powered on.
laptop.powerOff(); // Dell XPS 13 is now powered off.

console.log(tshirt.getDetails()); // Name: T-Shirt, Price: $19.99, Quantity: 50
console.log(tshirt.getSize()); // Size: L
console.log(tshirt.getMaterial()); // Material: Cotton

console.log(book.getDetails()); // Name: JavaScript Essentials, Price: $29.99, Quantity: 100
console.log(book.getAuthor()); // Author: John Doe
console.log(book.getGenre()); // Genre: Programming

// Update product quantity
laptop.updateQuantity(8); // Laptop quantity updated to 8.
