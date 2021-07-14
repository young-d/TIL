# 함수 (+Arrow Function)

- *sub-program*

    *- input & output*

    *- function name*

- *fundamental building block in the program*
- *subprogram can be used multiple times*
- *perfoms a task or calculates a value*

<br/>
<br/>


# *함수선언*

### 1. *Function declaration*

- *function name(param1, param2) { body... return; }*
- *one function === one thing*
- *naming: doSomething, command, verb*

    *e.g. createCardAndPoint -> createCard, createPoint*

- *function is object in JS*

```jsx
function printHello() {

console.log('Hello');

}

printHello();  *// Hello*

function log(message) {

console.log(message);

}

log('Hello@');  *// Hello@*

log(1234);  *// 1234(string)*

*//cf> TypeScript*

function log(message : string): number {

console.log(message);

return 0;

}
```

### *2. Parameters*

- *primitive parameters: passed by value*
- *object parameters: passed by reference*

```jsx
function changeName(obj) {

obj.name = 'coder';

}

const ellie = { name : 'ellie' };

changeName(ellie);

console.log(ellie);  // { name : 'coder'}
```

### *3. Default parameters (added in ES6)*

```jsx
function showMessage(message, from) {
		if ( from === undefined ) {
				from = 'unknown';
		}
		console.log(`${message} by ${from}`);
}

showMessage('Hi!');  // Hi! by unknown (undefined로 출력되는 것 방지하고자 if문에서 default 값으로 unknown 지정)

//파라미터에다가 바로 원하는 default값 지정해 둘 수 있음

function showMessage(message, from = 'default') {

console.log(`${message} by ${from}`);

}

showMessage('Hi!');  *// Hi! by default*
```

### *4. Rest parameters (added in ES6)*

- *... 을 붙이면 배열 형태로 전달*

```jsx
function printAll(...args) {

// for loop

for (let i = 0; i < args.length; i++) {

console.log(args[i]);

}

// for ~ of ~

for (const arg of args) {

console.log(arg);

}

// forEach 함수

args.forEach((arg) => console.log(arg));

}

printAll('dream', 'coding', 'ellie');

// dream

// coding

// ellie
```

### *5. Local scope*

- *밖에서는 안이 보이지 않고, 안에서는 밖을 볼 수 있다!*

```jsx
let globalMessage = 'global';  // -> global variable

function printMessage() {

		let message = 'hello';  // -> local variable
		
		console.log(message);  // hello
		
		console.log(globalMessage); // global
		
		//함수 안에 또 다른 함수 선언 가능
		
		function printAnother() {
		
				console.log(message);
				
				let childMessage = 'hello';
				
		}

		//console.log(childMessage);  // -> Error : childMessage is not defined

		printAnother();  // hello

}

printMessage();

//console.log(message); // -> Error : message is not defined
```

### *6. Return a value*

- *return 명시하지 않은 함수의 경우, return undefined가 생략되어 있는 것*

```jsx
function sum(a, b) {
		return a + b;
		
		//  return undefined;
}

const result = sum(1, 2);  // 3

console.log(`sum: ${result}`);  // 3
```

### *7. Early return, early Exit*

*e.g : user.point > 10 인 조건*

```jsx
//bad case
function upgradeUser(user) {
		if(user.point > 10) {
		
		//long upgrade logic...
		
		}
}

//good case
function upgradeUser(user) {
		//조건이 맞지 않을 때에는 빨리 return으로 함수를 종료시키고 (ex>값이 -1인경우, 값이 undefined인 경우)
		if(user.point <= 10) {
				return;
		}
		
		//조건이 맞을 때에만 필요한 logic 실행
		//(long upgrade logic...)
}
```

<br/>
<br/>


# *함수표현*

- *First-class function*
- *functions are treated like any other variable*
- *can be assigned as a value to variable*
- *can be passed as an argument to other functions*
- *can be returned by another function*

### *1. Function expression*

- *a function declaration can be called earlier than it is defined. (hoisted)*
- *a function expression is created when the execution reaches it.*

```jsx
//함수 선언과 동시에 print라는 변수에 할당

const print = function() {  //anonymous function

		console.log('print');

};

const print = function print() {  //named function

		console.log('print');

};

print();

const printAgain = print;

printAgain();

const sumAgain = sumAll;  //함수 선언 전에 호출 가능

console.log(sumAgain(1, 3));  //4

function sumAll(a, b) {  //함수 선언부는 가장 위로 올려진다(function hoisting)

		return a + b;

}
```

### *2. Callback function using function expression*

```jsx
function randomQuiz(answer, printYes, printNo) {  //printYes, printNo : 콜백함수
			if(answer === 'love you') {
					printYes();
			}else {
					printNo();
			}
}

//1_ anonymous function

const printYes = function() {

		console.log('yes!');

}

//2_ named function

//better debugging in debugger's stack traces

const printNo = function print() {

		console.log('no!');

//  print();   ->  recursions

}

randomQuiz('wrong', printYes, printNo); //no!

randomQuiz('love you', printYes, printNo); //yes!
```

### *3. Arrow function*

- *always anonymous*

```jsx
//cf> function expression

const simplePrint = function () {

		console.log('simplePrint!');

};

const simplePrint = () => console.log('simplePrint!');

//cf> function expression

const add = function (a, b) {

		//do something more*

		return a + b;
};

const add = (a, b) => a + b;
```

### *4. IIFE*

- *Immediately Invoked Function Expression*

(*요즘 잘 쓰진 않지만 js에서 바로 함수를 실행하고 싶을 때 사용하면 좋음)*

```jsx
(function hello() {

			console.log('IIFE');  //IIFE

})();
```
