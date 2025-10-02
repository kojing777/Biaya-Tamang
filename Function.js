// function greet() {
//     console.log("Hello, Bijaya!");
// }
// greet();


//Function with Parameters
// function greetUser(name) {
//     console.log("Hello, " + name + "!");
// }
// greetUser("Bijaya");
// greetUser("Ram");

//Function with Return Value
// function add(a, b) {
//     return a + b;
// }
// let sum = add(5, 7);
// console.log("Sum is:", sum);

// function greet() {
//     console.log("Hello, Bijaya!");
// }
// greet();

// function kojing() {
//     console.log("Hello, Kojing!");
//     console.log("Hello, Kojing!");
// }
// kojing();

// function add() {
//     console.log('hi from kojing moktan');
//     console.log('hi from kojing moktan');
// }
// add();
// add();

// //function with parameters
// function getUser(name) {
//     console.log('hello.' + name + "!");
// }
// getUser("kojing moktan");
// getUser("bijaya");

// function hiUser(kojing) {
//     console.log("hi", kojing, "hehehe");
// }

// hiUser('lama');
// hiUser("bijaya");


// function lama(thar) {
//     console.log("kojing" + thar)
// }
// lama(" moktan");


// function koko(coco) {
//     console.log('lolo', coco)

// }
// koko('momo');


// function hi(bijaya) {
//     console.log("hi", bijaya)
// }
// hi('lama');
// hi('kojing moktan');


// function sum(a, b) {
//     return a + b;
// }
// let total = sum(5, 7);
// console.log("total is:", total);

// function sum1(x, y) {
//     return x + y;
// }
// let allTotal = sum1(10, 20);
// console.log("allTotal is:", allTotal);


// // const square = (n) => n * n;
// // console.log(square(5));


// let factorial = function fact(n) {
//     if (n <= 1) return 1;
//     return n * fact(n - 1);
// } 
// console.log(factorial(5));

// //ES6 Features - Arrow Functions
// const multiply = function (x,y){
//     return x*y
// }
// console.log(multiply(4,5))

// function FullName(first,last){
//     return first + ' ' +last; 
// }
// console.log(FullName('bijaya','tamang'))


// function greet(name = 'guest'){
//     return `hello,${name}`;
// }
// console.log(greet())
// console.log(greet('bijaya'))

// function isAudult(age){
//     return age < 17;
// }
// console.log(isAudult(29))

// function square(n){
//     return n*n;

// }
// function sumOfSquare(a,b){
//     return square(a)+square(b);

// }
// console.log(sumOfSquare(5,6));

//arrow function 
// const double =(n)=> n*2;
// console.log(double(8));

// const sayHi = ()=> console.log('ki!!!')
// sayHi();

//practice

function maxOfTwo(a, b) {
    if (a > b) {
        return a;

    } else {
        return b
    }
}
console.log(maxOfTwo(10, 20))

// function factorial(n){
//     let result = 1;
//     for(let i = 1;i<=n;i++){
//         result *=i;
//     }
//     return result

// }
// console.log(factorial(5))


function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}
console.log(factorial(6))

const reverseString = (str)=>{
    return str.split('').reverse().join('');
}
console.log(reverseString('hello'))
