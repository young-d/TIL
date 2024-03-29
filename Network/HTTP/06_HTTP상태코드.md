# 6. HTTP 상태코드

# # **HTTP 상태 코드**

> 클라이언트가 보낸 요청의 처리 상태를 응답에서 알려주는 기능
> 
- 1xx (Informational) : 요청이 수신되어 **처리중** → 거의 사용하지 않음
- 2xx (Successful) : 요청 **정상** 처리
- 3xx (Redirection) : 요청을 완료하려면 **추가 행동이 필요**
- 4xx (Client Error) : **클라이언트 오류**, 잘못된 문법 등으로 서버가 요청을 수행할 수 없음
- 5xx (Server Error) : **서버 오류**, 서버가 정상 요청을 처리하지 못함

### **만약 모르는 상태코드가 나타나면?**

- 클라이언트가 인식할 수 없는 상태코드를 서버가 반환하면?
- 클라이언트는 상위 상태코드로 해석해서 처리한다! (200대, 300대, ...)
- 미래에 새로운 상태코드가 추가되어도 클라이언트를 변경하지 않아도 됨.
- ex.
    - 299 ??? → `2xx` (Successful)
    - 451 ??? → `4xx` (Client Error)
    - 500 ??? → `5xx` (Server Error)

# # **2xx - 성공**

### `200` OK

- 요청 성공

### `201` Created

- 요청 성공, **새로운 리소스 생성**됨
- 생성된 리소스는 응답의 Location 헤더 필드로 식별한다,

### `202` Accepted

- 요청이 접수되었으나 처리가 완료되지 않았음
- ex. 요청 접수 후 1시간 뒤에 배치 프로세스가 요청을 처리함

### `204` No Content

- **서버가 요청을 성공적으로 수행**했지만, **응답 페이로드 본문에 보낼 데이터가 없음**
- ex. 웹 문서 에디터에서 저장버튼 → 저장을 수시로 해야하기 때문
    - save 버튼의 결과(응답)로 아무 내용이 없어도 된다.
    - save 버튼을 눌러도 같은 화면을 유지해야 한다.
    - 결과 내용이 없어도 204 메세지(2xx)만으로 성공을 인식할 수 있다.

# # **3xx - 리다이렉션**

- **요청을 완료하기 위해 유저 에이전트의 추가 조치 필요 → 요청을 다시 돌려버림**
    - 유저 에이전트: 클라이언트 프로그램 (주로 웹 브라우저)
- 웹 브라우저는 **3xx 응답**의 결과에 **Location 헤더**가 있으면, **Location 위치로 자동 이동** === **리다이렉트**

| 300 | Multiple Choices |
| --- | --- |
| 301 | Moved Permanently |
| 302 | Found |
| 303 | See Other |
| 304 | Not Modified |
| 307 | Temporary Redirect |
| 309 | Permanent Redirect |

## **리다이렉션의 이해**

> 자동 리다이렉트 흐름
> 

예를 들어, 이전에 `/event` 라는 uri에서 이벤트를 진행했다면, 이전의 유저들이 /event라는 uri에 접근을 다시 할 수 있기 때문에 접근 하게 된다면, `301 Moved Permanently` (영원히 이동되었음) 이라는 **상태 코드**와 **헤더**에 `Location: /new-event`  를 싣는다. 이렇게 되면 **클라이언트(웹브라우저)에서 자동 리다이렉트**를 시켜준다. → 너무 빠르게 일어나서 사용자는 거의 인식 못할 정도

> **종류**
> 

---

### 1. **영구 리다이렉션 `301`, `308` -** 특정 리소스의 URI가 영구적으로 이동

- 리소스의 URI가 영구적으로 이동
    - ex. `/members` → `/users`
- 원래의 URL를 사용 X, 검색 엔진 등에서도 변경 인지
- **301 Moved Permanently**
    - 리다이렉트시 요청 메서드가 GET으로 변함
    - 본문(메세지)이 제거될 수 있음 (~~MAY~~)
- **308 Permanent Redirect**
    - 301과 기능은 같음
    - 리다이렉트시 요청 메서드(GET으로 변하지 않음)와 본문(메세지) 유지

### 2. **일시적인 리다이렉션 `302`, `307`, `303` -** 일시적인 변경

- 리소스의 URI가 일시적으로 변경
    - ex. 주문 완료 후 주문 내역 화면으로 이동
- 따라서 검색 엔진 등에서 URL을 변경하면 안됨 (나중에 변경 전 url로 들어올 수도 있으니까)
- **302 Found**
    - 리다이렉트시 요청 메서드가 GET으로 변함
    - 본문이 제거될 수 있음(~~MAY- 명확하지 않음. 하지만 대부분 GET으로 바꿈~~)
- **307 Temporary Redirect**
    - 302와 기능은 같음
    - 리다이렉트시 요청 메서드와 본문 유지(요청 메서드를 변경하면 안된다. **MUST NOT**)
- **303 See Other**
    - 302와 기능은 같음
    - 리다이렉트시 요청 메서드가 GET으로 변경
- **PRG : `P`ost/ `R`edirect /`G`et**
    - <PRG 사용 전>
        - POST로 주문후에 웹 브라우저를 새로고침하면?
        - 새로고침 하면 다시 요청(POST) → 중복 주문이 될 수 있다.
    - <PRG 사용 시>
        - POST로 주문후에 새로 고침으로 인한 중복 주문 방지
        - POST로 주문후에 주문 결과 화면을 GET 메서드로 리다이렉트
        - 새로고침해도 결과 화면을 GET으로 조회
        - 중복 주문 대신에 결과 화면만 GET으로 다시 요청
    
    → 주문에서 예를 든다면, 
    
    - 주문을 POST 요청으로 생성 한 뒤
    - 302 Found 상태 코드를 줘서 바로 클라이언트에서 자동 리다이렉션(URL이 이미 POST → GET으로 리다이렉트)하게 만든다.
    - 그 후에 다시 GET 요청이 오면 200을 응답한다
    - 그러면 새로고침 해도 GET으로 다시 요청이 들어가기 때문에 중복 주문이 방지된다 (결과화면만 조회)
- **정리 - 그래서 뭘 써야하나?**
    - `302` Found → GET으로 변할 수 있음(MAY)
    - `307` Temporary Redirect → 메서드가 변하면 안됨
    - `303` See Other → 메서드가 GET으로 변경
- **역사**
    - 처음 302 스펙의 의도는 HTTP 메서드를 유지하는 것
    - 그런데 웹 브라우저들이 대부분 GET으로 바꾸어버림 (일부는 다르게 동작)
    - 그래서 모호한 302를 대신하는 명확한 307, 303이 등장함 (301 대응으로 308도 등장)
- **현실**
    - 307, 303을 권장하지만 현실적으로 이미 많은 애플리케이션 라이브러리들이 302를 기본값으로 사용
    - 자동 리다이렉션시에 GET으로 변해도 되면 그냥 302를 사용해도 큰 문제 없음

### 3. **특수 리다이렉션 `300`, `304`**

- 300 Multiple Choices: 안쓴다..
- **304 Not Modified**
    - 캐시를 목적으로 사용 → 결과 대신 캐시를 사용
    - 클라이언트에게 리소스가 수정되지 않았음을 알려준다. 따라서 클라이언트는 로컬PC에 저장된 캐시를 재사용 (캐시로 리다이렉트 한다)
    - 304 응답은 응답에 메시지 바디를 포함하면 안된다 (로컬 캐시를 사용해야 하므로)
    - 조건부 GET, HEAD 요청시 사용

# # **4xx - Client Error**

- 클라이언트의 요청에 잘못된 문법등으로 서버가 요청을 수행할 수 없음
- **오류의 원인이 클라이언트**에 있음
- 중요! 클라이언트가 이미 잘못된 요청, 데이터를 보내고 있기 때문에 똑같은 재시도가 실패함 → 요청을 수정해야만 정상 복구 가능
    - cf. 500대 오류는 클라이언트 요청에 문제가 있는게 아니기 때문에 요청 자체는 수정 불필요 (똑같은 요청에 대해 성공 가능성이 있음)

### **`400` Bad Request**

> 클라이언트가 **잘못된 요청**을 해서 서버가 요청을 처리할 수 없음
> 
- 요청 구문, 메시지 등등 오류
- 클라이언트는 요청 내용을 다시 검토하고, 수정해서 보내야함
- ex. 요청 파라미터가 잘못되거나, API 스펙이 맞지 않을 때
    - → 백엔드 개발자가 validation을 통해 400으로 명확하게 보내줘야한다

### **`401` Unauthorized**

> 클라이언트가 해당 리소스에 대한 **인증이 필요**함
> 
- 인증 (Authentication) 되지 않음
- 401 오류 발생시 응답에 `WWW-Authenticate` 헤더와 함께 인증 방법을 설명
- 참고
    - **인증**(Authentication): 본인이 누구인지 확인
        - 단순히 로그인 가능 여부를 확인
    - **인가**(Authorization) : 권한 부여
        - 로그인한 사용자에 대한 권한 레벨 → Admin처럼 특정 리소스에 접근할 수 있는 권한
        - 인증이 있어야 인가가 있음
    - cf. 오류 메시지가 Unauthorized(인가) 이지만 인증에 대한 오류라는 점에서 이름이 아쉬움

### **`403` Forbidden**

> 서버가 요청을 이해했지만 **승인을 거부**함
> 
- 주로 인증 자격 증명은 있지만, 접근 권한이 불충분한 경우
- ex. 어드민 레벨이 아닌 사용자가 로그인은 했지만, 어드민 등급의 리소스에 접근하는 경우

### **`404` Not Found**

> 요청 리소스를 **찾을 수 없음**
> 
- 요청 리소스가 서버에 없음 (없는 리소스를 요청한 것이기 때문에 클라이언트 오류)
- 또는 클라이언트가 권한이 부족한 리소스에 접근할 때 해당 리소스를 숨기고 싶을 때

# # **5xx - Server Error**

- 서버 문제로 오류 발생
- 서버에 문제가 있기 때문에 **재시도 하면 성공할 수도 있음**

### **`500` Internal Server Error**

> **서버 오류**
> 
- 서버 내부 문제로 오류 발생, 대부분의 오류가 여기 해당
- 백엔드에서 애매하면 500 오류

### **`503` Service Unavailable**

> **서비스 이용 불가**
> 
- 서버가 일시적인 과부하 또는 예정된 작업으로 잠시 요청을 처리할 수 없음
- Retry-After 헤더 필드로 얼마뒤에 복구되는지 보낼 수도 있음
- 하지만 거의 볼 일이 없음
