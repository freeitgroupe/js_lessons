// Immediately-invoked function expression
// Первые скобки "(" экранируют ф-ию от другого контекста.
//() сразу вызываем ф-ю 
(function f1() {
  console.log('f1');
})();

(function() {
  console.log('anonymous');
})();

(() => {
  console.log('lambda');
})();

{
  console.log('block');
}

