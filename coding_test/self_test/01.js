class Argument {
    constructor(faker, bread) {
        this.faker = faker;
        this.bread = bread;
    }

    // get faker() {
    //     return this._faker;
    // }

    // set faker(person) {
    //     this._faker = person;
    // }

    // get bread() {
    //     return this._bread;
    // }

    // set bread(person) {
    //     this._bread = person;
    // }
}

function findPerson() {
    const talker = ['A', 'B', 'C']; 
    let arg = new Argument([], []);
    for(faker of talker) {
        if(faker === 'A') {
            arg.faker = ['A'];
            arg.bread = ['B'];
            if(checkFacker(arg) === true) break;
        }else if(faker === 'B') {
            arg.faker = ['B', 'C'];
            arg.bread = ['A'];
            if(checkFacker(arg) === true) break;
        }else {
            arg.faker = ['C', 'B'];
            arg.bread = ['A'];
            if(checkFacker(arg) === true) break;
        }
    }
    return `거짓말 한 사람: ${arg.faker[0]}, 빵 먹은 사람: ${arg.bread[0]}`;
}

function checkFacker(arg) {
    if(arg.faker.length === 1) {
        return true;
    }else {
        return false;
    }
}

console.log(findPerson());