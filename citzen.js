var randomDigits = function(digits) {
  var f = Math.random() * Math.pow(10, digits);
  return Math.floor(f);
};

function UsCitizen(name, sn) {
  this.name = name;

  this.vaildLastFour = function(four) {
    return four === sn.slice(-4);
  };

  this.goIntoWitSec = function() {
    sn = randomDigits(3) + '-' + randomDigits(2) + '-' + randomDigits(4);
  };
}

var nic = new UsCitizen('Nicholas Cage', '423-11-5647');

console.log(nic.vaildLastFour('5647'));
nic.goIntoWitSec();

console.log(nic.vaildLastFour('5647'));
