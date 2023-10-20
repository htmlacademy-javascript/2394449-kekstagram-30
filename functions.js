// Функция - длинна строки
let str = '';
let maxlength;
function Result(str, maxlength) {
    return str.length <= maxlength;
}
console.log(Result('Hello World!', 5));

//Функция - палиндром
let str = '';
function Palindrom(str) {
    let check = str.replaceAll(' ','').toUpperCase();
    let kcehck = check.split("").reverse().join("");
    return check === kcehck;
}
console.log(Palindrom('  Лёша на полке клопа нашёл'));
