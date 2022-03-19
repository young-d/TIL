// 변수는 하나의 값을 저장하기 위한 수단이다.
var userId = 1;
var userName = 'Lee';
/* */

// 객체나 배열 같은 자료구조를 사용하면 여러 개의 값을 하나로 그룹화해서 하나의 값처럼 사용할 수 있다.
var user = { id: 1, name: 'Lee' };

var users = [
  { id: 1, name: 'Lee' },
  { id: 2, name: 'Kim' } 
]; 
/* */

// 변수 선언(변수 선언문) - var
var score; // -> 자동으로 undefined 가 할당된다.
/* */

// 호이스팅
console.log(score); // undefined (reference error 아님)
/* */

var score; // -> 호이스팅으로 console.log 보다 먼저 평가되기 때문에 undefined로 메모리 들어가 있는 상태로 console.log가 실행된다.
/* */

var score; // 변수 선언
score = 80; // 값의 할당
/* */

var score = 80; // 변수 선언과 값의 할당
/* */

console.log(score); // undefined (by. 호이스팅)

var score; // 1. 변수 선언
score = 80; // 2. 값의 할당

console.log(score); // 80
/* */

console.log(score); // undefined

score = 80; // 값의 할당
var score; // 변수 선언

console.log(score); // 80 (어차피 선언부가 먼저 평가된 뒤 재할당이 이루어지므로)
/* */

var score = 80; // 변수 선언과 값의 할당
score = 90; // 값의 재할당
/* */

/* 
가비지 컬렉터 관련 
WeakRef -> MDN 참조
*/

var person, $elem, _name, first_name, val1; // 가독성 나쁘므로 권장하진 않음
/* */

var 이름, 한자, 일어, 등; // 바람직하지 않으므로 권장하지 않음(쓰기 어려워서?)
/* */

var first-name; // SyntaxError: Unexpected token - (하이픈 때문)
var 1st; // SyntaxError: Invalid or unexpected token (숫자로 시작하기 때문)
var this; // SyntaxError: Unexpected token this (예약어이기 때문)

/* 표기법 - 대소문자 구분 */
var firstname; 
var firstName; // 카멜
var FIRSTNAME; 
/* */

var x = 3; // NG. x 변수가 의미하는 바를 알 수 없다.
var score = 100; // OK. score 변수는 점수를 의미한다. (의미있는 네이밍)
/* */

/* 경과시간. 단위는 날짜이다 */
var d; // NG

var ElapsedTimeInDays; // OK
/* */

var firstName; // 카멜 케이스
var first_name // 스네이크 케이스
var FirstName; // 파스칼 케이스
var strFirstName; // type + identifier (헝가리안 케이스)
var $elem = document.getElementById('myId'); // DOM 노드 (헝가리안 케이스)
var observable$ = fromEvent(document, 'click'); // RxJS 옵저버블 (헝가리안 케이스)
