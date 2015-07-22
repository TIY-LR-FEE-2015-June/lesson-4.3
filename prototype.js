// Basic Constructor

function Student(first, middle, last) {
  this.firstName = first;
  this.middleInitial = middle;
  this.lastName = last;

  this.fullName = function () {
    return this.firstName + ' ' + this.middleInitial + ' ' + this.lastName;
  };
}

var student = new Student('Phillip', 'J', 'Fry');

console.log(student.fullName());

var student2 = new Student('Eric', 'T', 'Cartman');

console.log(student2.fullName());

console.assert(student2 instanceof Student, 'student2 should be a Student');
console.assert(student2 instanceof Object, 'student2 should be an Object');
console.assert(!(student2 instanceof Array), 'student2 should not be an Array');
