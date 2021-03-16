'use strict'; 
// Про Контекст и про this
/*
 Функциональный контекст - В него попадают все идентификаторы объявленные в ф-ии и переданные аргументы в ф-ю.
 *******
 Объектный контекст - есть не у каждой ф-ии и к ней можно обратиться через кнонастр. this.
 *******
*/
const Context = function() {
  // 
  this.name = 'Marcus';  
  
  // Генирируется объеткт city, т.е. это объектный контекст.
  const city = {
    name: 'Kiev',
    year: 482,
    // ф-я объявленная через констр. function, сможет обратиться к объектному контексты
	f1: function() {
      return this.name;
    },
	// Лямда ф-я не сможет обратиться к name, и будет искать this.name из конекста выше.
    f2: () => {
      return this; // 'Marcus'
    },
	// Сможет обратиться к name объекта, она объявлена как ф-я объекта, в таком случае ключ будет f3
    f3() {
      return this.name;
    }
  };
  return city;
};

// Создаем экземпляр Context
const city = new Context();

// По факту вызываем методы ф-ии, 
// Так как вызываем методы не передавая аргументы, а ф-я возвращает какие то значения,  то это ф-я с побочными эффектами.
// Объектный контекст ф-ии это объект city.
console.log('city.f1() = ' + city.f1());
console.log('city.f2() = ' + city.f2());
console.log('city.f3() = ' + city.f3());