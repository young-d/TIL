### Function
- fundamental building block in the program
- subprogram can be used multiple times
- perfoms a task or calculates a value

1. Function declaration
function name(param1, param2) { body... return; }
one function === on thing
naming: doSomething, command, verb
e.g. createCardAndPoint -> createCard, createCardAndPoint 
function is object in JS


function printHello() {
    console.log('Hello');
}
printHello();

function log(message) {
    console.log(message);
}
log('Hello@');
log(1234);



2. Parameters
premitive parameters: passed by value
object parameters: pass by reference

function changeName(obj) {
    obj.name = 'coder';
}
const ellie = { name : 'ellie' };
changeName(ellie);
console.log(ellie);



3. Default parameters (added in ES6)
function showMessage(message, from) {
    if ( from === undefined ) {
        from = 'unknown';
    }
    console.log(`${message} by ${from}`);
}
showMessage('Hi!);


function showMessage(message, from === 'unknown' ) {
    console.log(`${message} by ${from}`);
}
showMessage('Hi!);


4. Rest parameters (added in ES6)
function printAll(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }

    for (const arg of args) {
        console.log(arg);
    }
}
printAll('dream', 'coding', 'ellie');



5. Local scope
let globalMessage = 'global';  // global variable
function printMessage() {
    let message = 'hello';
    console.log(message); // local variable
    console.log(globalMessage);
}
printMessage();
