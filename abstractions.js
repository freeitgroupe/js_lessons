'use strict';

/*
* О ф-ях, можно думать как об абстракциях(высокого и низкого уровня)
*/
const power = Math.pow; // абстракция высокого уровня 

// square и cube являются частными случаями power
const square = x => power(x, 2); //абстракции более низкого уровня
const cube = x => power(x, 3);//абстракции более низкого уровня

console.log(power(10, 2));
console.log(square);

console.log(power(10, 3));
console.log(cube(10));
console.log(power.name);

const f = function neme(x, n) {
	let t = x;
	for(let i=1; n > i; i++){
		t*= x;
	}
	return t;
}
const temp = f;

console.log(f.length)