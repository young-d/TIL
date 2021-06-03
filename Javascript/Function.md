/*
Function
- fundmental building block in the program
- subprogram can be used ultiple times
-performs a task or calculates a value


1. Function declaration
function name(param1, param2) {body... return; }
one function === one thing
naming: doSomething, command, verb
e.g. createCardAndPoint -> createCard, createPoint
function is object in JS

*/

function printHello() {
    console.log('Hello');
}
printHello();

function log(message) {
    console.log(message);
}
log('Hello@');
log(1234);

/*
2. Parameters
premitive parameters: passed by value
object parameters: passed by reference
*/

function changeName(obj) {
    obj.name = 'coder';
}
const ellie = {name : 'ellie'};
changeName(ellie);
console.log(ellie);

/*
3. Default parameters (added in ES6)
undefined를 방지하기 위함
*/
function showMessage(message, from = 'unknown') {
    console.log(`${message} by ${from}`);
}
showMessage('Hi~');

/*
4. Rest parameters (added in ES6)
배열 출력
*/
function printAll(...args) {

    //how 1
    for(let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }

    //how 2
    for(arg of args) {
        console.log(arg);
    }

    //how 3
    args.forEach((arg) => console.log(arg));
}
printAll('dream', 'coding', 'ellie');

/*   
5. Local scope
*/
let globalMessage = 'global';  //global variable
function printMessage() {
    
}