// Constructor function for Car
function Car(make, model, year, isAvailable = true) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.isAvailable = isAvailable;
}

// Constructor function for Customer
function Customer(name) {
    this.name = name;
    this.rentedCars = [];
}

// Add a method to the Customer prototype to rent a car
Customer.prototype.rentCar = function(car) {
    if (car.isAvailable) {
        car.isAvailable = false;
        this.rentedCars.push(car);
        console.log(`${this.name} has rented a ${car.make} ${car.model}.`);
    } else {
        console.log(`The ${car.make} ${car.model} is already rented.`);
    }
};

// Add a method to the Customer prototype to return a car
Customer.prototype.returnCar = function(car) {
    // Simulate a delay in processing the return
    setTimeout(() => {
        const index = this.rentedCars.indexOf(car);
        if (index > -1) {
            car.isAvailable = true;
            this.rentedCars.splice(index, 1);
            console.log(`${this.name} has returned a ${car.make} ${car.model}.`);
        } else {
            console.log(`The ${car.make} ${car.model} was not rented by ${this.name}.`);
        }
    }, 2000); // 2 seconds delay
};

// Constructor function for PremiumCustomer that inherits from Customer
function PremiumCustomer(name, discount = 10) {
    Customer.call(this, name);
    this.discount = discount;
}

// Inherit from Customer
PremiumCustomer.prototype = Object.create(Customer.prototype);
PremiumCustomer.prototype.constructor = PremiumCustomer;

// Add a method to calculate rental price
PremiumCustomer.prototype.calculateRentalPrice = function(carType, days) {
    const basePricePerDay = 50;
    const typeRates = {
        'SUV': 1.2,
        'Sedan': 1.0,
        'Hatchback': 0.8
    };

    const rate = typeRates[carType] || 1.0;
    let price = basePricePerDay * rate * days;

    // Apply discount for premium customers
    price -= price * (this.discount / 100);

    return price;
};

// Function to simulate car maintenance
function Maintenance(car, delay) {
    setTimeout(() => {
        car.isAvailable = true;
        console.log(`${car.make} ${car.model} is now available after maintenance.`);
    }, delay);
}

// Demonstration
// Create car objects
const car1 = new Car('Toyota', 'Corolla', 2020);
const car2 = new Car('Honda', 'Civic', 2019);
const car3 = new Car('Ford', 'Explorer', 2021);

// Create customers
const regularCustomer = new Customer('Alice');
const premiumCustomer = new PremiumCustomer('Bob', 15);

// Rent cars
regularCustomer.rentCar(car1); // Alice has rented a Toyota Corolla.
premiumCustomer.rentCar(car2); // Bob has rented a Honda Civic.

// Try to rent a car that's already rented
regularCustomer.rentCar(car1); // The Toyota Corolla is already rented.

// Return cars
regularCustomer.returnCar(car1); // Alice has returned a Toyota Corolla.
premiumCustomer.returnCar(car2); // Bob has returned a Honda Civic.

// Calculate rental prices
console.log(`Rental price for SUV for 5 days: $${premiumCustomer.calculateRentalPrice('SUV', 5)}`); // e.g., Rental price for SUV for 5 days: $300

// Perform maintenance on a car
Maintenance(car3, 3000); // Ford Explorer is now available after maintenance.
