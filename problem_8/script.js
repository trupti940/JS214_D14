// Task 1: Define a constructor function 'Animal' with a property 'type'
function Animal(type) {
    this.type = type;
}

// Task 2: Add a method to 'Animal' prototype that logs "This is a type of animal"
Animal.prototype.logType = function() {
    console.log("This is a type of animal");
};

// Task 3: Define a constructor function 'Dog' that inherits from 'Animal'
function Dog(type, breed) {
    Animal.call(this, type);  // Call 'Animal' constructor
    this.breed = breed;
}

// Task 4: Ensure that 'Dog's prototype points to 'Animal's prototype
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

// Task 5: Override the method in 'Dog' prototype to log "This is a dog of breed: [breed]"
Dog.prototype.logType = function() {
    console.log(`This is a dog of breed: ${this.breed}`);
};

// Task 6: Create an instance of 'Dog' called 'myDog' and call these methods
let myDog = new Dog("Mammal", "Golden Retriever");
myDog.logType();  // Output: "This is a dog of breed: Golden Retriever"

// we can also call the method from the 'Animal' prototype
Animal.prototype.logType.call(myDog);  // Output: "This is a type of animal"
