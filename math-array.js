// We want a new MathArray data type that allows
//  us to find the sum and average of items!
function MathArray() {
}

// We need to inherit from Array so that we can pull
// in all of the functionality of a regular Array
MathArray.prototype = Object.create(Array.prototype);

/**
 * The `sum` method on every MathArray should
 * return a sum of all the items in the array
 *
 * @return number
 */
MathArray.prototype.sum = function() {
  return this.reduce(function(prev, current) {
    return prev + current;
  }, 0);
};

/**
 * The `average` method on every MathArray should return
 * an average of all the items in the array
 *
 * @return number
 */
MathArray.prototype.average = function() {
  return this.sum() / this.length;
};

// Create a new instance of MathArray
var m = new MathArray();

// Add values to the MathArray
m.push(1);
m.push(2);
m.push(3);

// Log the value of the array's average
console.log(m.average());
