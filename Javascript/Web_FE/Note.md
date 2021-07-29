[#window 객체](https://www.notion.so/JS-Web-FE-77d22bfb11a04319baa8c68d6504d58d)

[#DOM](https://www.notion.so/JS-Web-FE-77d22bfb11a04319baa8c68d6504d58d)

[#Event](https://www.notion.so/JS-Web-FE-77d22bfb11a04319baa8c68d6504d58d)

[#Networking](https://www.notion.so/JS-Web-FE-77d22bfb11a04319baa8c68d6504d58d)

[#Extra](https://www.notion.so/JS-Web-FE-77d22bfb11a04319baa8c68d6504d58d)

# # window Object

- Javascript 실행시 **가장 상위**에 존재하는 객체
    - 변수를 선언하거나 함수 선언시 window 객체안에 선언됨
- 표시된 웹 페이지의 정보에 **접근**하거나 **변경**을 할 수 있음
    - `window.location` : 현재 브라우저 창의 주소를 나타내는 객체
    - `window.location.href` : 브라우저 창에 입력된 주소, 변경 가능
    - `window.navigator` : 브라우저 자체에 대한 정보
    - `window.screen` : 디스플레이의 사이즈
    - **`window.document`** : 웹 페이지 문서의 HTML, CSS 등에 대한 접근 가능

<br>

# # **DOM(Document Object Model)**

- 컴퓨터가 문서를 잘 처리할 수 있도록 **문서의 구조**를 약속한 것
    - **Tree** 형태를 따름 : 족보나 가계도와 비슷함

## 1. Document 탐색

### 🔍 document object

- javascript에서 `document`로 접근 가능
- children에는 문서의 최상위 엘리먼트인 **html**이 존재

### 💎 Element API

- **자식, 부모 엘리먼트에 접근하는 방법**
    - `.children` : 해당 object의 자식 노드에 대한 배열
    - `.parentNode` : 부모 노드
    - `.firstElementChild` : 첫 자식 엘리먼트
    - `.lastElementChild` : 마지막 자식 엘리먼트
- **같은 레벨의 형제 엘리먼트에 접근하는 방법**
    - `.nextElementSibling`
    - `.previousElementSibling`

## 2. 단일 Element 선택

### 📑 Document API

- **DOM API를 활용해 문서에서 엘리먼트를 선택하는 방법**
    - `document.getElementBy~` : 단일 엘리먼트를 선택하는 메소드
    - `document.getElementsBy~` : 다중 엘리먼트를 선택하는 메소드
- **document.getElementById** 메소드
    - 인자로 HTML element 태그의 id를 전달하면 **해당 엘리먼트가 반환**됨

### 💎 Element API

- `.innerHTML` 속성 ****: ****엘리먼트 안의 HTML코드를 변경
- `.innerText` 속성 **[:](https://www.notion.so/JS-Web-FE-77d22bfb11a04319baa8c68d6504d58d)** 엘리먼트 안의 텍스트를 변경
- `.style` 속성 : css를 변경 가능
- `getAttribute` 메소드
    - element의 속성의 값을 얻어옴
    - 하나의 인자 : attribute **이름**을 받음
    - 직접 객체에 동기화되지 않는 속성에 대해서도 접근이 가능
- `setAttribute` 메소드
    - element의 속성의 값을 설정함
    - 두개의 인자 : attribute **이름**, 설정할 **속성의 값**을 받음
    - 직접 객체에 동기화되지 않는 속성에 대해서도 값 설정이 가능

## 3. ****다중 Element 선택****

### 📑 Document API

- `document.getElementsBy~` : 다중 엘리먼트를 선택하는 메소드. 배열형태로 값을 반환함
- `document.getElementsByTagName` ****메소드
    - 인자로 **HTML element 태그의 이름**을 전달하면 해당 엘리먼트들이 반환됨
- `document.getElementsClassName` 메소드
    - 인자로 **class의 이름**을 전달하면, 해당 class의 모든 엘리먼트가 배열로 반환됨
- `document.getElementsByName` 메소드
    - 인자로 **name**을 전달하면, 해당 name 속성을 가진 모든 엘리먼트가 배열로 반환됨.

### 💎 Element API

- `.value` 속성 : **input element에 입력된 값**은 .value를 통해 얻어올 수 있음
    - **getAttribute 메소드로는 받아올 수 없다**는 점 주의

## 4. ****CSS Selector를 이용한 Element 선택****

### 📑 **Document API**

- `document.querySelector` : css selector를 기반으로 엘리먼트를 선택
    - 조건에 부합하는 element가 여러개인 경우 첫 엘리먼트만 반환.
- `document.querySelectorAll` : css selector를 기반으로 만족하는 모든 엘리먼트를 선택

### 💄 **CSS Selector**

- `#` : name 기반으로 선택
- `.` : class 기반으로 선택
- `,` : 여러개의 셀렉터를 사용

## 5. ****Element 추가/삭제****

### 📑 **Document API**

- `document.createElement()` : 문자열 인자로 **element tag**를 입력하면 해당 엘리먼트가 **생성돼 반환**됨

### 💎 **Element API**

- `.appendChild(인자)` : **추가할 element**를 인자로 받아 호출된 element의 자식으로 인자를 추가함
- `.removeChild(인자)` : **삭제할 element**를 인자로 받아 호출된 element의 자식중에서 해당 element를 삭제
- `.insertBefore(인자1, 인자2)` : 인자1로 받은 element를 호출된 element의 자식중 **인자2의 이전에 추가**함
- `.cloneNode()` : 호출된 element를 **복사해서 반환**함

<br>

# # Event

## 1. Callback Function

- 조건을 등록해 두고 **그 조건을 만족**한 경우, **나중에 호출**되는 함수

### 🕒 **시간을 기반으로 콜백함수를 호출하는 명령**

- `setTimeout(function, time)`
    - **time 시간이 지난 경우** function 함수를 콜백하는 함수
    - time 은 **millisecond (1/1000초)** 단위
    - **timerId**를 반환함
- `clearTimeout(timerId)`
    - setTimeout 함수 호출의 결과로 반환된 **timerId**를 인자로 받아 **예약되어 있던 function호출을 취소**
        - 이미 function이 호출된 경우(시간이 지나 이벤트가 발생한 경우)에는 효과 없음
- `setInterval(function, time)`
    - **time 시간이 경과할 때마다** function 함수를 콜백하는 함수
    - **timerId**를 반환함
- `clearInterval(intervalId)`
    - setInterval 함수 호출의 결과로 반환된 **intervalId**를 인자로 받아 **주기적으로 호출되던** **function 호출을 취소**

## 2. HTML Tag 속성에 EventHandler 추가하기

### 🌏 **브라우저에서 발생하는 Event 종류**

- `form event` : HTML 문서의 form element에 변화가 생기거나 submit버튼을 누르는 경우 등의 상황에서 발생
- `window event` : 페이지가 모두 로드되었을 때 발생하는 onload event 등이 있음
- `mouse event` : 사용자가 마우스를 조작했을 때 발생
- `key event` : 사용자가 키보드를 조작했을 때 발생

### → **Event**

- `click` : mouse event로 HTML element를 마우스로 클릭한 경우 발생
- `change` : form event로 form 엘리먼트의 내용이 변경된 경우 발생
- `keydown` : key event로 key가 눌린 경우 발생

### 🗯 **HTML Tag의 속성으로 Event Handler 추가**

- Tag 의 속성에 event handler 코드를 추가
    - on**Event** 속성 사용 ( onclick, onchange, onkeydown, ... )

```jsx
<h1 onclick="console.log('clicked');">..</h1>
<input type="text" onchange="console.log('changed');" onkeydown="console.log('typed');">
```

## 3. JS에서 EventHandler 설정

### 👉 **EventHandler 설정**

- **property에 직접 Handler설정**
    - Element의 `"on"+"이벤트"` 의 속성에 메소드를 직접 지정

        ```jsx
        document.getElementById("form1").onsubmit = function eventHandler(){
        	  console.log("from property");
        	  return false; *// 브라우저의 submit 처리 비활성*
        }
        ```

- **addEventListner 메소드**
    - element의 `addEventListener(이벤트, 함수)` 메소드를 호출해, eventHandler **등록**
        - **여러개의 이벤트** 핸들러를 등록할 수 있음

        ```jsx
        document.getElementById("form1").addEventListener(
            "submit", 
            function eventHandler(){
                console.log("from addEventListener");
                return false;
            }
        );
        ```

- **removeEventListener 메소드**
    - element의 `removeEventListener(이벤트, 함수)` 메소드를 호출해, eventHandler **삭제**

### 👉 **Event 종류**

- `submit` : form 태그의 submit 이벤트
    - EventHandler에서 **return false** 시 브라우저 자체 기능 (페이지 이동) **비활성**
- `keydown` : 키를 누른 경우 발생하는 이벤트
    - EventHandler에서 **return false** 시 키 입력 **비활성**
    - 실제로는 **keydown** event -> **keypress** event -> **keyup** event 순으로 이벤트가 발생하며 **keypress event 발생시에 키가 입력**됨. keydown event 에서 return false를 한 경우 keypress event가 이어서 발생하지 않음.

<br>

# # Networking

## 1. **AJAX**

- 브라우저에서 페이지를 이동하지 않고 자바스크립트를 통해 HTTP Request를 보내고 받아 JS에서 처리할 수 있음
- 사용자에게 더 나은 사용 경험 제공, 대부분의 웹사이트에서 사용되고 있는 기술

### 📤 ****Request 보내기 (요청)****

1. AJAX를 위한 **객체 생성**

    `var req = new XMLHttpRequest();` : *HTTP 요청을 만들 수 있는 새로운 객체를 생성하는 명령*

2. 요청의 **방식**과 **URL** 설정

    `req.open("GET", "./data.txt");` : *http request method와 URL 설정*

3.  ****요청 **전송**

    `req.send();`

### 👌 **응답 확인**

- `req.response`에 저장됨
- **비동기 방식**으로 요청하기 때문에 send 메소드 호출 후, 바로 코드에서 접근하면 데이터가 비어 있음
- AJAX의 진행에 따라 호출되는 **callback함수를 활용**해야 함.

**브라우저 옵션**

`--disable-web-security` 옵션

- 브라우저의 **보안 정책을 우회**하기 위해 사용하는 옵션
- **same-origin-policy등을 비활성화** 함

### 📥 Response 받아서 처리하기 (응답)

- `readyState` 속성 : AJAX 요청에 따라 **0~4까지 변화**함

    ![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/9b96d669-5ef9-4e67-b55c-0b4a9fc55c89/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/9b96d669-5ef9-4e67-b55c-0b4a9fc55c89/Untitled.png)

- `onreadystatechange` 속성 : readyState가 변할 때마다 호출되는 **콜백 함수**

- `status` 속성 : HTTP response의 **응답 헤더**에 기록된 코드

    ![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b9b209f0-d779-49b6-af0a-d03c4d126575/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b9b209f0-d779-49b6-af0a-d03c4d126575/Untitled.png)

- **응답을 정상적으로 수신한 경우**
    - `readyState : 4`
    - `status : 200`

- **기타 callback function 활용 가능한 속성**
    - `onloadstart`
    - `onprogress`
    - `onabort`
    - `onerror`
    - `onload`
    - `ontimeout`
    - `onloadend`

## 2. JSON **(Javascript Object Notification)**

- 자바스크립트의 **객체**를 **문자열**로 표현하는 방법
    - 프로그램간에 전달하기 편리 (**서버 -> 브라우저**)

### 🙋‍♂️ **JSON API**

- `JSON.stringify(object)` : 인자로 받은 객체를 **JSON 문자열로 반환**함
- `JSON.parse(string)` : 인자로 받은 문자열을 **Javascript Object로 변경해 반환**함

```jsx
var original_obj = { pi:3.14, str:"string" };

var json_str = JSON.stringify( original_obj );
*// 반환 문자열 : {"pi":3.14,"str":"string"}*var parsed_obj = JSON.parse( json_str );

console.log( original_obj ); *// {pi: 3.14, str: "string"}*
console.log( parsed_obj ); *// {pi: 3.14, str: "string"}*
```

- undefined, function 은 변환되지 않음에 주의!

## 3. AJAX + JSON

- **AJAX**를 통해 JSON 데이터를 받아옴(요청)

    ```jsx
    var req = new XMLHttpRequest();

    req.onreadystatechange = function(){
        if( this.readyState == 4 ){
            *// ...*
    		}
    }

    req.open("GET", JSON_DATA_URL);
    req.send();
    ```

- `JSON.parse` API를 이용해 받아온 JSON 문자열 데이터를 **Javascript 객체로 변환**

    ```jsx
    req.onreadystatechange = function(){
        if( this.readyState == 4 ){
            data = JSON.parse(this.response);
            *//...*
    		}
    }
    ```

- 데이터를 처리하는 **Javascript 프로그램 실행** (HTML 문서에 **반영**)
    - 데이터가 여러개인 경우 (배열 형태로 값을 받은 경우) 반복문으로 각각의 데이터에 대해 처리

    ```jsx
    for( var i = 0 ; i < data.length ; i++ ){
        document.write(data[i].id, data[i].msg);
    }
    ```

<br>

# # Extra

## 1. ****script 위치에 따른 실행****

- 브라우저는 **HTML 문서**를 읽으면서 **script tag**를 실행함
    - HTML 문서 Element 파싱 보다 스크립트가 먼저 실행되면 접근되지 않음
    - 페이지의 **상단의 script** 에서 이후 파싱될 Element에 접근하고 싶다면 `onload` 등의 **eventhandler로 실행**되도록 해야 함
- `async`, `defer` 속성을 이용하면 **스크립트의 실행**과 **문서의 로딩**을 **동시**에 진행할 수 있음**(비 동기적)**

## 2. ****Chrome 디버거 활용****

### ⚠ **프로그램 오류의 종류**

- **Syntax Error** (문법적 오류)
    - 해당 구문이 실행되지 않아 **쉽게 발견 및 수정 가능**
- **Semantic Error** (논리적 오류)
    - **실행은 되지만** 의도한 결과가 도출되지 않는다.

### ⛏ **개발자 도구 Sources tab 활용**

- **Breakpoint**
    - 프로그램이 실행되는 도중 원하는 위치에서 멈추도록 할 수 있음
    - 멈추고 싶은 코드의 라인번호를 클릭해서 추가 가능
- **단계적 실행**
    - 한번 멈춘 프로그램은 step over, step into, step out 버튼을 통해 한단계씩 프로그램을 실행할 수 있음
    - resume 버튼을 통해 프로그램을 계속 진행할 수 있음 (다음에 breakpoint를 만나면 다시 중지)
- **Watch 창**
    - 조사식을 추가해 각 시점의 변수 상태를 조회 가능
- **Scope**
    - 실행중인 함수의 scope 정보 확인 가능
- **Console 창**
    - 디버깅 중에도 명령을 입력 가능
    - 변수의 값을 수정하거나 확인 가능

## 3. ****익명함수와 함수 즉시 호출****

### 🙄 **익명 함수의 필요성**

- Javascript 에서는 함수가 인자로 사용되거나 콜백 함수로 사용될 수 있기 때문에, **일회성으로 사용될 코드의 블럭을 함수로 정의**하는 경우가 많음. 즉, 이러한 함수의 경우 이름이 꼭 필요하지 않음.

### 👉 **익명함수의 정의**

- 함수의 **이름이 없이** 정의 가능
- **인자로 바로 전달** 가능

```jsx
setTimeout(
    function (){
        *//함수 내용*
		},3000 
);
```

### 👉 **익명함수의 정의와 호출**

- 익명함수 **정의 후 바로 호출**

```jsx
function (){
    *//함수 내용* 
}();
```

## 4. 예외 처리

### 🙄 **예외 처리의 필요성**

- 프로그램의 외부 요인으로 프로그램의 특정 파트가 정상적으로 동작하지 않을 수 있으나, 에러처리를 이용하면 프로그램이 정상적으로 실행될 수 있음

### 🏓 **Try, Catch, Finally 구문**

```jsx
try{
    *// 정상적으로 실행되는 경우 실행될 프로그램 작성
		// try 블록안에서 에러가 발생한 경우 catch 블록으로 이동함*
}catch(e){
    *// try 블록에서 에러가 발생한 경우
		// 에러를 인자 e로 받아 에러를 처리하는 코드를 작성*
}finally{
    *// try, catch구문이 실행되고 나서 실행될 코드(반드시 실행)*
}
```

- try 구문 안에서 호출한 함수 안에서 에러가 발생한 경우에도 catch로 이동해 프로그램이 실행됨.

### 🚫 **에러 발생시키기**

- `throw` 명령 사용 : return 구문과 비슷하게 에러를 나타낼 수 있는 인자를 사용
    - 문자열, 숫자, 객체 등 javascript object를 자유롭게 활용 가능

### ♻ **에러 처리 과정**

- throw 발생 시, **catch 구문을 찾아서 이동**하게 됨
    - 현재의 블록에서 catch, finally 구문이 없다면 **상위 블록, 상위 함수(호출된 함수)로 이동**
    - try, finally 구문만 존재시, **finally 구문은 실행**되고, **catch 될 수 있는 구문을 찾아 이동함**
    - **catch 구문을 찾으면 에러가 처리**되고 해당 try, catch 구문 이후 코드가 실행됨