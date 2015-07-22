// Regular Objects

var student = {
  firstName: 'Philip',
  middleInitial: 'J',
  lastName: 'Fry',
  fullName: function () {
    return this.firstName + ' ' + this.middleInitial + ' ' + this.lastName;
  }
};

console.log(student.fullName()); // "Philip J Fry"
student.firstName = 'Joe';

var student2 = {
  firstName: 'Eric',
  middleInitial: '.',
  lastName: 'Cartman'
};

console.log(student2.fullName()); // Undefined is not a function
