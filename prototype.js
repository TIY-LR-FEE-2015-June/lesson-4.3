// Overriding Prototype Functions

function Person(first, middle, last) {
  this.firstName = first;
  this.middleInitial = middle;
  this.lastName = last;
}

// The fullName function should be available
// to every Person object
Person.prototype.fullName = function () {
  return this.firstName + ' ' + this.middleInitial + ' ' + this.lastName;
};

function Student(first, middle, last, seat) {
  // I don't want to write the same constructor twice
  Person.call(this, first, middle, last);

  this.seatNumber = seat;
}

// Student should inherit from the Person prototype
Student.prototype = Object.create(Person.prototype);

Student.prototype.fullName = function () {
  var tmp = Person.prototype.fullName.call(this);

  return 'STUDENT: ' + tmp;
};

var student = new Student('Phillip', 'J', 'Fry');
var student2 = new Student('Eric', 'T', 'Cartman');

// Sets fullName on a single student
student2.fullName = function() {
  return 'Hey';
};

console.log(student.fullName());
console.log(student2.fullName());

console.log(student2 instanceof Student);
console.log(student2 instanceof Person);
console.log(student2 instanceof Object);
console.log(student2 instanceof Array);

// Students Don't Write These
console.assert(student2 instanceof Student, 'student2 should be a Student');
console.assert(student2 instanceof Object, 'student2 should be an Object');
console.assert(!(student2 instanceof Array), 'student2 should not be an Array');
