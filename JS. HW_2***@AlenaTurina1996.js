1. Написать скриптик, который сосчитает и выведет результат от возведения 2 в степень 10, начиная со степени 1

let i = 1
while(i<11){
    console.log(2 ** i)
  i=i+1
}

1*. Преобразовать 1 задачу в функцию, принимающую на вход степень, в которую будет возводиться число 2
const pow = function(a){
for (let i=1;i<=a;i++){
console.log(2**i)
}
}
pow(10)

2. Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее
Пример в консоли:
:)
:):)
:):):)
:):):):)
:):):):):)
let res = ''
let smile = ':)'
for(let x = 1; x<6; x++){
    console.log(res += smile)
}

2*. Преобразовать 2 задачу в функцию, принимающую на вход строку, которая и будет выводиться в консоль (как в условии смайлик), а также количество строк для вывода 
e.g. function printSmile(stroka, numberOfRows)
function printSmile(str, numberOfRows){
    for(let x = 1; x<=numberOfRows; x++){
console.log(str.repeat(x))
    }
}
printSmile(';(', 10)


3**.  Написать функцию, которая принимает на вход слово. Задача функции посчитать и вывести в консоль, сколько в слове гласных, и сколько согласных букв.
e.g. function getWordStructure(word)
В консоли: 
Слово (word) состоит из  (число) гласных и (число) согласных букв

Проверки: 'case', 'Case', 'Check-list'
function getWordStructure(word){ 
    let vowels = 'aeiouy'.split('');
    let consonants = 'bcdfghjklmnpqrstvwxz'.split('');
    let vowelsCount = 0;
    let constantsCount = 0;
    for(const char of word){
        if (vowels.includes(char)) vowelsCount++
        else if (consonants.includes(char)) constantsCount++
    }

console.log(`В слове ${word} : ${vowelsCount} гласных и ${constantsCount} согласных букв`)
}
getWordStructure("case")

4**. Написать функцию, которая проверяет, является ли слово палиндромом
e.g. function isPalindrom(word)

Проверки: 'abba', 'Abba'
function isPalindrom(word) {
  for (let a = 0, b =word.lenght -1 ; a<word.lenght, b>=0; a++, b--){
    if(word[a] !==word[a]){
        return false
    }
  }
  return true
}
console.log(isPalindrom('abba'))
