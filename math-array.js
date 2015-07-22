// We want a new MathArray data type that allows
//  us to find the sum and average of items!
function MathArray() {
}

MathArray.prototype = Object.create(Array.prototype);

MathArray.prototype.sum = function() {
  return this.reduce(function(prev, current) {
    return prev + current;
  }, 0);
};

MathArray.prototype.average = function() {
  return this.sum() / this.length;
};

var m = new MathArray();

m.push(1);
m.push(2);
m.push(3);

console.log(m.average());
