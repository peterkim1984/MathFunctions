function add (add1, add2) {
  return add1 + add2;
};

console.log( add(2,3) );

function subtract (sub1, sub2) {
  return sub1 - sub2;

};

console.log( subtract(5,1));

function multiply (mult1, mult2) {
  return mult1 * mult2;
};

console.log( multiply (4, 6));

function divide (div1, div2) {
  return div1 / div2;
};

console.log ( divide (30, 10));

function power (pow1, pow2) {
  return Math.pow(pow1, pow2);
};
console.log (power(12, 2));

function test_add_1() {
  var a1 = 5;
  var a2 = 4;
  return add (a1, a2);
};

console.log (test_add_1());

function test_add_2() {
  var a3 = 5;
  var a4 = 4;
  var a5 = 3;
  var a6 = add (a3, a4);
  return add (a5, a6);
};

console.log (test_add_2());

function test_subtract_1() {
  var s1 = 5;
  var s2 = 4;
  return subtract ( s1, s2);
};

console.log (test_subtract_1());

function test_subtract_2() {
  var s3 = 5;
  var s4 = 4;
  var s5 = 3;
  var s6 = subtract (s3, s4);
  return subtract ( s5, s6);
};

console.log (test_subtract_2());
