# Use strict

- added in ES5
- use this for Vanila Javascript.

```jsx
"use strict"
```

# Data Type

- Immutable data type: primitive types, frozen objects (i.e. object.freeze())
- Mutable data type: all objects by default are mutable in JS

**favor immytable data type always for a few reasons..**
- security(해커들이 변수 값을 변경하여 프로그램을 위협하는 것을 방지)
- thread safety(동시에 데이터값을 변경하는 위험성으로부터 안전) 
- reduce human mistakes(실수 방지)

# Variable `let`

- rw(read/write)
- mutable data type
- blockspoce :block({})안에 있는 변수는 블럭안에서만 유효
    - global variable: block밖에서 선언해도 block안밖에서 모두 쓸 수 있는 변수

```jsx
let globalName = 'global name';
{
    let name = 'ellie';
    console.log(name); //ellie
    name='hello';
    console.log(name); //hello
    
    console.log(globalName); //global name
}
console.log(name); // 출력안됨
console.log(globalName); //global name
```

**var(ES5) 사용금지!!**<br/>
-reason1. var는 선언 전에 값 할당 또는 출력이 가능.. (by.var hoisting)
   cf>hoisting: 어디에 선언했는지에 관계없이 항상 선언부를 가장 위로 올려주는 것<br/>
-reason2. var no block scope

```jsx
{
    age = 4; //선언 전에 할당
    var age;
}
console.log(age); //4
```

# Constant `const`

- r(read only)
- Immutable data type
- use const whenever possible.
- only use let if variable need to change.
- obj → ref로 값을 가리키기 때문에 const로 선언해도 값을 변경할 수 있다

```jsx
const daysInWeek = 7;
const maxNumber = 5;
```

# Variable Types

 변수 타입에 따라 메모리에 값이 다르게 저장 (primitive vs. object)

## 1. primitive (single item)

- 더 이상 작은 단위로 나눌 수 없는 데이터 타입-> 값 자체가 메모리에 저장
- number, string, boolean, null, undefiend, symbol

### (1) number

- special numeric values: infinity, -infinity, NaN

```jsx
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity); // Infinity
console.log(negativeInfinity); // -Infinity
console.log(nAn); //NaN
```

- bigInt (fairly new, don't use it yet-크롬과 사파리에서만 지원 중)
숫자 맨 뒤에 n붙이면 bigInt로 간주

```jsx
const bigInt = 112132343242342346872639847263874837n; // over(-2**53) ~2*53
console.log(`value: ${bigInt}, type: ${typeof bigInt}`); //value: 112132343242342346872639847263874837, type: bigint
```

### (2) string

```jsx
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`); //value: hello brendan, type: string
```

- template literals(string) : ``안에서 문자열과 변수를 +기호없이 조합 가능

```jsx
const helloBob = `hi ${brendan}!`;
console.log(`value: ${helloBob}, type: ${typeof helloBob}`); //value: hi brendan!, type: string
```

### (3) boolean

- false: 0, null, undefined, NaN, ''
- true: any other value

```jsx
const canRead = true;
const test = 3 < 1; //false
console.log(`value: ${canRead}, type: ${typeof canRead}`); //value: true, type: boolean
console.log(`value: ${test}, type: ${typeof test}`); //value: false, type: boolean
```

### (4) null

- 명확하게 empty 상태

```jsx
let nothing = null; // 명확하게 empty(텅텅빈 상태)임을 할당
console.log(`value: ${nothing}, type: ${typeof nothing}`); //value: null, type: object
```

### (5) undefined

- 어떠한 값도 할당되지 않은 상태(null값조차x)

```jsx
let x; //아직 값(null값 포함)이 할당되지 않은 상태
console.log(`value: ${x}, type: ${typeof x}`); //value: undefined, type: undefined
```

### (6) Symbol

- create unique identifiers for objects
- symbol타입을 출력할 때는 문자열로 변환해서 출력(description)

```jsx
console.log(`value: ${gSymbol1.description}, type: ${typeof gSymbol1.description}`); //value: id, type: string
```

- 정말 고유한 식별자가 필요할 때 쓰는 데이터 타입

    ✏ex1.동일한 문자열을 가지지만 다른 식별자로 인식

    ```jsx
    const symbol1 = Symbol('id');
    const symbol2 = Symbol('id');
    console.log(symbol1 === symbol2); //false
    ```

    ✏ex2.동일한 문자열을 같은 식별자로 인식하고자 할 때는 for를 붙여줌

    ```jsx
    const gSymbol1 = Symbol.for('id');
    const gSymbol2 = Symbol.for('id');
    console.log(gSymbol1 === gSymbol2); //true
    ```

## 2. object (box container)

- single items를 여러개 묶어서 박스로 관리할 수 있는 데이터 타입-> 데이터가 너무 커서 메모리 주소만 가지고 할당된 데이터의 메모리를 참조(실제 데이터가 있는 곳을 가리킴)
- real-life object, data structure
- function, first-class
    - first-class function: function를 인자로 전달하거나 return타입으로 반환하는 것이 가능

✏ex. object인 ellie 자체(참조하고 있는 메모리 영역)는 const라서 변경이 불가능, object안의 name과 age(ellie와는 또다른 메모리를 가짐)는 변경가능

```jsx
const ellie = {name: 'ellie', age: 20};
ellie.age=21;
```

# Dynamic Typing

- dynamically typed language (runtime 단계에서 type결정)
    - cf>컴파일언어: start typing: 선언 단계에서 타입 결정

```jsx
const count = 17; //integer
const size = 17.1; //decimal number
console.log(`value: ${count}, type: ${typeof count}`); //value: 17, type: number
console.log(`value: ${size}, type: ${typeof size}`); //value: 17.1, type: number
```

✏ex.

```jsx
let text = 'hello';
console.log(text.charAt(0)); //h
console.log(`value: ${text}, type: ${typeof text}`); //value: hello, type: string
text = 1;
console.log(`value: ${text}, type: ${typeof text}`); //value: 1, type: number
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`); //value: 75, type: string
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`); //value: 4, type: number
```

😥단점: type이 runtime단계에서 결정되기 때문에 중간에 코드로 type을 변경해버리면 에러발생

```jsx
console.log(text.charAt(0)); //*TypeError: text.charAt is not a function
```
