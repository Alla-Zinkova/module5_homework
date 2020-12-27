//Задание 8
let number = new Map();

number.set (1, "one");
number.set(2, "two");
number.set(3, "three");
number.set(4, "four");

for(let [key, value] of number){
  console.log(`Ключ - ${key}, Значение - ${value}`);
}
