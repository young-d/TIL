# String concatenation

```jsx
console.log('my' + ' cat'); //my cat
console.log('1' + 2); //12
console.log(`string literals: 1 + 2 = ${1 + 2}`); //string literals: 1 + 2 = 3
```

# Numeric operators

```jsx
console.log(1 + 1); //add
console.log(1 - 1); //substract
console.log(1 / 1); //divide
console.log(1 * 1); //multiply
console.log(1 % 1); //remainder
console.log(1 ** 1); //exponentation
```

# Icrement and decrement operators

```jsx
console.log('my' + ' cat'); //my cat
console.log('1' + 2); //12
console.log(`string literals: 1 + 2 = ${1 + 2}`); //string literals: 1 + 2 = 3
```

# String concatenation

```jsx
let counter = 2;
const preIncrement = ++counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`); //preIncrement: 3, counter: 3
const postIncrement = counter++;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`); //preIncrement: 3, counter: 4
const preDecrement = --counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`); //preIncrement: 3, counter: 3
const postDecrement = counter--;
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`); //preIncrement: 3, counter: 2
```

# Assignment operators

```jsx
let x = 3;
let y = 6;
x += y;
x -= y;
x *= y;
x /= y;
```

# Comparison operators

```jsx
console.log(10 < 6); //less than
console.log(10 <= 6); //less than or equal
console.log(10 > 6); //greater than
console.log(10 >= 6); //greater than or equal
```

# Logical operators `||(or)`, `&&(and)`, `!(not)`

- or, and  연산자는 조건을 순서대로 판단하므로 heavy한 조건일수록 뒤에서 주는것이 좋다!
→앞쪽에서 조건을 충족하면 뒤의 조건은 굳이 판단하지 않기 때문

```jsx
const value1 = false;
const value2 = 4 < 2; //false
function check() {
    for(let i = 0; i < 10; i++) {
        //wasting time....
        console.log('😂'); //10 😂
    }
    return true;
}
```

## || (or)

- finds the first truthy value

```jsx
console.log(`or: ${value1 || value2 || check()}`); //or: true
```

## && (and)

- finds the first falsy value

```jsx
console.log(`and: ${value1 && value2 && check()}`); //and: false
```

- often used to compress long if-statement
    - nullableObject && nullableObject.something

    ```jsx
    if(nullableObject != null) {
         nullableObject.something;
    }
    ```

## ! (not)

```jsx
console.log(!value1); //true
```

# Equality `==` , `===`

😉 코딩시 검사할 때는 strict equality를 사용하는 게 좋다

```jsx
const stringFive = '5';
const numberFive = 5;
```

## == (loose equality)

- with type conversion

```jsx
console.log(stringFive == numberFive); //true
console.log(stringFive != numberFive); //false
```

## == (strict equality)

- no type conversion

```jsx
console.log(stringFive === numberFive); //false
console.log(stringFive !== numberFive); //true
```

## ⭐object equality by reference

```jsx
const ellie1 = {name: 'ellie'};
const ellie2 = {name: 'ellie'};
const ellie3 = ellie1;
console.log(ellie1 == ellie2); //false
console.log(ellie1 === ellie2); //false
console.log(ellie3 === ellie1); //true
```

✏ex. 0 vs. false vs. '' / null vs. undefined

```jsx
console.log(0 == false); //true
console.log(0 === false); //false
console.log('' == false); //true
console.log('' === false); //false
console.log(null == undefined); //true
console.log(null === undefined); //false
```

# conditional operators `if`, `Switch`

## if

- if, else if, else

```jsx
const myname = 'df';
if(myname ==='ellie') {
    console.log('Wellcom, Ellie!');
}else if(myname === 'coder') {
    console.log('You are amazing coder');
}else {
    console.log('unknown');
}
```

## Switch

- use for multiple if checks
- use for enum-like value check
- use for multiple type checks in TS

```jsx
const browser = 'IE';
switch (browser) {
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
    case 'firefox':
        console.log('love you!');
        break;
    default:
        console.log('same all!');
        break;     
}
```

# Ternary operator `condition ? value1: value2;`

😉 조건이 너무 많을 때는 가독성이 떨어지므로 지양하기

```jsx
console.log(myname === 'ellie' ? 'yes' : 'no');
```

# Loop `while`,  `do-while`,  `for`

## while

- while the condition is truthy, body code is execued

```jsx
let i = 3;
while(i > 0) {
    console.log(`while: ${i}`);
    i--;
}
```

## do-while

- body code is execued first, then check the condition

```jsx
do {
    console.log(`do-while: ${i}`);
    i--;
}while(i > 0);
```

## for

- for(begin; condition; step)

```jsx
for(i = 3; i > 0; i--) {
    console.log(`for: ${i}`);
}
for(let i = 3; i > 0; i = i -2) {
    //inline variable declaration
    console.log(`inline variable for: ${i}`);
}
```

➕

### nested loops

```jsx
for(let i = 0; i < 10; i++) {
    for(let j = 0; j < 10; j++) {
        console.log(`i: ${i}, j: ${j}`);
    }
}
```

### break, continue

😉 현업에서는 lable은 사용하지 않는다(continue와 break를 잘 이용하면 실행할 수 있기 때문)

```jsx
for(let i = 0; i <= 10; i++) {
    if(i ==0 || i % 2 !== 0) {
        continue;
    }
    console.log(i);
}

for(let i = 0; i <= 10; i++) {
    if(i > 8) {
        break;
    }
    console.log(i);
}
```
