//Задание 1. 
value = prompt("Введите значение")
value++;
value--;

if  (isNaN(value)){
  console.log("Упс, кажется, вы ошиблись")
}
else if(typeof value === "number" && value % 2 != 0){
  console.log("Вы ввели нечетное число")
}
else if(typeof value === "number" && value % 2 == 0){
  console.log("Вы ввели четное число")
}
else{
  console.log("Упс, кажется, вы ошиблись")
}


