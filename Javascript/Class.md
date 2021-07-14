# 객체지향언어 (Class)
- *Object-oriented programming*
- *class: template*
- *object: instance of a class*
- *JavaScript classes*

    - *introduced in ES6*

- *syntactical sugar over prototype-based inheritance*

<br/>
<br/>

### *1. Class declarations*

```jsx
class Person {
    //constructor
    constructor(name, age) {
        //fields
        this.name = name;
        this.age = age;
    }

    //methods
    speak() {
        console.log(`${this.name}: hello~`);
    }
}

const yeong = new Person('yeong', 20);
console.log(yeong.name);  //yeong
console.log(yeong.age);  //20
```

### *2. Getter and Setter*

```jsx
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    //getter와 setter를 통해서 필드 값을 설정하는 것이 가능한데, 
    //이 때 필드명과 이름을 조금 다르게 해주는 이유는
    //생성자에서 필드를 초기화 할 때 
    //'this.age' -> getter 호출, 여기에다 '= age' -> setter 호출 을 하는데
    //setter 안에서 'this.age'라고 하면 여기에 value를 할당할 때 
    //메모리를 초기화 하는 것이 아니라  setter메소드를 다시 호출하게 된다
    //결론: 계속 setter를 호출하면 call stack이 넘치는 에러를 방지하기 위함이다.
    //주로 _를 붙여준다 (따라서 필드는 firstName, lastName, _age 세개이다)
    get age() {
        return this._age;
    }

    set age(value) {
        // if(value < 0) {
        //     throw Error('age can not be negative');
        // }
        this._age = value < 0 ? 0 : value;
    }
}

const user = new User('Steve', 'Job', -1);
console.log(user.age);  //0
```

### *3. Fields (public, private)*

- *Too soon! (너무 최근에 추가된 기능이라 많이 사용되고 있지는 않음 -> 최신 브라우저에서도 지원되지 않음)*

```jsx
class Experiment {
    publicField = 2;  //외부에서 접근 가능
    #privateFiled = 0;  //클래스 내부에서만 접근 가능 (외부에서는 읽을수도 없음)
}

const experiment = new Experiment();
console.log(experiment.publicField);  //2
console.log(experiment.privateField);  //undefined
```

### *4. Static properties and methods*

- *Too soon!*
- *static - Object에 상관없이 class 자체에 넣어두고 공유되는 멤버*

```jsx
class Article {
    static publisher = 'Dream Coding';
    constructor(articleNumber)  {
        this.articleNumber = articleNumber;
    }

    static printPublisher() {
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);

//클래스를 통해서 접근가능
console.log(Article.publisher);  //Dream Coding
Article.printPublisher();  //Dream Coding

//cf> 오브젝트로는 접근 불가능
console.log(article1.publisher);  //undefined
article2.printPublisher();  //is not a function
```

### *5. Inheritance*

- *a way for one class to extend another class.*
- *상속과 다형성 -> 코드의 재사용!*

```jsx
class Shape {
    constructor(width, heigth, color) {
        this.width = width;
        this.heigth = heigth;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color of`);
    }

    getArea() {
        return this. width * hethis.heigth;
    }
}

class Rectangle extends Shape {}
const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
class Triangle extends Shape {
    draw() {
        super.draw();
        console.log('🔺');
    }
    getArea() {
        return (this.width * this.heigth) / 2;
    }
}
```
