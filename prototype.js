// Using Functions to Return an Object

var giveMeAStudent = function(first, middle, last) {
  return {
    firstName: first,
    middleInitial: middle,
    lastName: last,
    fullName: function () {
      return this.firstName + ' ' + this.middleInitial + ' ' + this.lastName;
    }
  };
};

var student = giveMeAStudent('Phillip', 'J', 'Fry');

console.log(student.fullName());

var student2 = giveMeAStudent('Eric', 'T', 'Cartman');

console.log(student2.fullName());
