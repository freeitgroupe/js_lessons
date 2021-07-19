'use strict';

/*
const a = Math.sin;
const b = [30,45,60].map(a)
console.log(b);
*/

// атрибуты ф-ии
// function declaration (будет виден во всех частях файла)
function inc(a) {
  return ++a;
}

// function expression будет виден после того как мы его присвоили в переменную
// зн-е функционального типа присвоили в идентификатор sum 
const sum = function(a, b) {
  return a + b;
};

// лямда экспрешен или ф-я стрелка
// (a > b ? a : b) - возвращается как return этой ф-ии
// 
const max = (a, b) => (a > b ? a : b);

// лямда ф-я с блоком операторов { } в таком случае пишем return в конце. 
const avg = (a, b) => { 
	const s = sum(a,b);
	return s/2;
}

console.log('Names: ');
console.dir({
  inc: inc.name,
  sum: sum.name,
  max: max.name,
});

console.log('Arguments: ');
console.dir({
  inc: inc.length,
  sum: sum.length,
  max: max.length,
});

console.log('Anonymous function: ' + function(x) { return x; }.name);
console.log('Anonymous lambda: ' + (x => x).name);

console.log('toString: ');
console.dir({
  inc: inc.toString(),
  sum: sum.toString(),
  max: max.toString(),
});