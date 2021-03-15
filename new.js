'use strict';

const sum = new Function('a, b', 'return a + b');

const sum1 = (a,b) => (a+b);

console.dir({
  name: sum.name,
  name1: sum1.name,
  length: sum.length,
  toString: sum.toString(),
});