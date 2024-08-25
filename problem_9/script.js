// Constructor function for Person
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Add the introduce method to Person's prototype
Person.prototype.introduce = function() {
    console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
};

// Constructor function for Employee that inherits from Person
function Employee(name, age, jobTitle) {
    // Call Person constructor
    Person.call(this, name, age);
    this.jobTitle = jobTitle;
}

// Set up inheritance
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

// Add the work method to Employee's prototype
Employee.prototype.work = function() {
    console.log(`${this.name} is working as a ${this.jobTitle}.`);
};

// Demonstration
// Create an instance of Person
const person = new Person('Alice', 30);
person.introduce();  // Output: Hi, my name is Alice and I am 30 years old.

// Create an instance of Employee
const employee = new Employee('Bob', 25, 'Software Developer');
employee.introduce(); // Output: Hi, my name is Bob and I am 25 years old.
employee.work();     // Output: Bob is working as a Software Developer.
