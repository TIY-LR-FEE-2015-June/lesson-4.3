// Basic Inheritance

function Person(first, middle, last) {
  this.firstName = first;
  this.middleInitial = middle;
  this.lastName = last;

  this.fullName = function () {
    return this.firstName + ' ' + this.middleInitial + ' ' + this.lastName;
  };
}

function Student(first, middle, last, seat) {
  // I don't want to write the same constructor twice
  Person.call(this, first, middle, last);

  this.seatNumber = seat;
}

// Student should inherit from Person
Student.prototype = Object.create(Person.prototype);

var student = new Student('Phillip', 'J', 'Fry');

console.log(student.fullName());

var student2 = new Student('Eric', 'T', 'Cartman');

console.log(student2.fullName());

console.log(student2 instanceof Student);
console.log(student2 instanceof Person);
console.log(student2 instanceof Object);
console.log(student2 instanceof Array);

// Students Don't Write These
console.assert(student2 instanceof Student, 'student2 should be a Student');
console.assert(student2 instanceof Object, 'student2 should be an Object');
console.assert(!(student2 instanceof Array), 'student2 should not be an Array');
