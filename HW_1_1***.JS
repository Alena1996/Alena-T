1*:
Преобразовать написанный код в 26-33 пунктах в функцию, принимающую на вход возраст.
Пример: const checkAge = function(age) {
Ваши преобразования
}
Вывести в консоль результат работы функции с возрастами 17, 18, 61

 let age_2 = 18
 let age_3 = 60
const checkAge = function(age){
 if (age) {
 if (age < age_2){
    console.log("You dont have access cause your age is" + " " + age + " " + "Its less then ")
 }else if (age >=  age_2 && age <  age_3){
    console.log("Welcome  !")
 }else if (age  > age_3){
    console.log("Keep calm and look Culture channel")
 }else {
    console.log("Technical work")
 }
} 
}
checkAge(17)
checkAge(18)
checkAge(61)
2*:
Преобразовать задание 1* таким образом, чтобы первым делом в функции проверялся тип данных. И если он не Number - кидалась ошибка.

 let age_2 = 18
 let age_3 = 60
const checkAge = function(age){
  age = Number(age)
if(typeof('number')){

    
 if (age) {
 if (age < age_2){
    console.log("You dont have access cause your age is" + " " + age + " " + "Its less then ")
 }else if (age >=  age_2 && age <  age_3){
    console.log("Welcome  !")
 }else if (age  > age_3){
    console.log("Keep calm and look Culture channel")
 }else {
    console.log("Technical work")
 }
} else{
    console.log('Error,is type not number')
 }
 }
}
3**:
Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number

 let age_2 = 18
 let age_3 = 60
const checkAge = function(age){
if(age && !isNaN(age)){

    
 if (age) {
 if (age < age_2){
    console.log("You dont have access cause your age is" + " " + age + " " + "Its less then ")
 }else if (age >=  age_2 && age <  age_3){
    console.log("Welcome  !")
 }else if (age  > age_3){
    console.log("Keep calm and look Culture channel")
 }else {
    console.log("Technical work")
 }
} else{
    console.log('Error,is type not number')
 }
 }
}

4***:
Преобразовать задание 3* таким образом, чтобы возраст вводится используя функцию prompt в привязанной верстке

 let age_2 = 18
 let age_3 = 60
const checkAge = function(age){
if(age && !isNaN(age)){

    
 if (age) {
 if (age < age_2){
    alert("You dont have access cause your age is" + " " + age + " " + "Its less then ")
 }else if (age >=  age_2 && age <  age_3){
    alert("Welcome  !")
 }else if (age  > age_3){
    alert("Keep calm and look Culture channel")
 }else {
    alert("Technical work")
 }
} else{
    alert('Error,is type not number')
 }
 }
}
let a = prompt ('Inter now')
checkAge(a)

