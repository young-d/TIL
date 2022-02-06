# 1. URI (Uniform Resource Identifier)

## (1) URI, URL, URN

> URI는 로케이터(**l**ocator), 이름(**n**ame) 또는 둘 다 추가로 분류될 수 있다.

- `Uniform` : 리소스 식별하는 통일된 방식
- `Resource` : 자원, URI로 식별할 수 있는 **모든 것** (제한없음)
- `Identifier` : 다른 항목과 구분하는데 필요한 정보
- URI는 가장 큰 개념. 그 안에 Locator, Name이 있다.
    - **URL** : Locator (리소스가 있는 위치를 지정) - 통상적으로 주소창에 넣는 형태
    - **URN** : Name (리소스에 이름을 부여)
        - 위치는 변할 수 있지만, 이름은 변하지 않는다.  (변하지 않는게 좋은게 아님)
        - URN 이름만으로 실제 리소스를 찾을 수 있는 방법이 보편화되지 않음

### 🌟 결론: URI와 URL은 비슷한 의미이다.

## (2) URL 분석

`https://www.google.com/search?q=hello&hl=ko`

→ 주소창에 검색 시 해당하는 resource를 보여줌

## (3) URL 전체 문법

- `scheme://[userinfo@]host[:port][/path][?query][#fragment]`

### scheme `https`

- 주로 프로토콜 사용
- **프로토콜** : 어떤 방식으로 자원에 접근할 것인가 하는 약속 규칙
    - 예) http, https, ftp 등
- http는 80포트, https는 443 포트를 주로 사용, 포트는 생략 가능
- https는 http에 보안 추가 (HTTP Secure)

### userinfo

- URL에 사용자 정보를 포함해서 인증
- 거의 사용하지 않음

### host `www.google.com`

- 호스트명
- **도메인 명** 또는 **IP 주소**를 직접 사용 가능

### port `443`

- **접속 포트**
- 일반적으로 생략
    - 생략시 http는 **80**, https는 **443**

### path `/search`

- **리소스 경로**(path)
- 계층적 구조

### query `q=hello&hl=ko`

- **key=value** 형태
- **?**로 시작, **&(앰퍼샌드)**로 추가 가능
- 웹서버에 제공하는 파라미터, 문자 형태 → query parameter, query string 등으로 불림

### fragment

- fragment
- html 내부 북마크 등에 사용
- **서버에 전송하는 정보 아님**

# 2. 웹 브라우저 요청 흐름

1. 웹브라우저가 **DNS를 조회** (브라우저 캐시, hosts 파일 먼저 참조)
2. **IP와 port 정보**를 찾아냄
3. **HTTP 요청 메시지** 생성 (by. 웹 브라우저)
    - `GET` `/search?q=hello&hl=ko` `HTTP/1.1`
    `Host: www.google.com`
4. **SOCKET 라이브러리를 통해 전달**
    - A : TCP/IP 연결(IP, PORT) → SYN, SYN ACK, ACK
    - B : 데이터 전달
5. **TCP/IP 패킷 생성**
    - 전송 데이터를 출발지 IP, PORT / 목적지 IP, PORT로 감싼다.
    - HTTP 메시지 포함
    
6. 호스트(ex. google) 서버에서 **HTTP 응답메시지** 생성 → 똑같이 **응답 패킷** 만들어 전달

7. 클라이언트 브라우저에서 **HTTP 렌더링**
