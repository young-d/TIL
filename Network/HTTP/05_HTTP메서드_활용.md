# 1. 클라이언트에서 서버로 데이터 전송

## 1) 전달 방식 - 크게 2가지

> 데이터 전달 방식은 크게 2가지
> 

### (1) **쿼리 파라미터를 통한 데이터 전송**

- GET
- 주로 정렬 필터(검색어)

### (2) **메시지 바디를 통한 데이터 전송**

- POST, PUT, PATCH
- 회원가입, 상품주문, 리소스 등록, 리소스 변경

## 2) 4가지 상황

### (1) `정적 데이터` 조회

- 이미지, 정적 텍스트 문서
- 조회는 GET 사용
- 일반적으로 **쿼리 파라미터 없이** 리소스 경로만으로 단순하게 조회 가능

### (2) `동적 데이터` 조회

- 주로 검색, 게시판 목록에서 정렬/필터(검색어)
- 조회 조건을 줄여주는 **필터**, 조회 결과를 정렬하는 **정렬** 조건에 주로 사용
- 조회는 GET 사용
- GET은 **쿼리 파라미터** 사용해서 데이터 전달
    - GET 도 메시지 바디를 사용하는 경우가 있으나, 보통 사용하지 않는다 (지원하지 않는 서버가 많기 때문에)
- 서버에서는 쿼리 파라미터를 기반으로 정렬/필터해서 **결과를 동적으로 생성**

### (3) `HTML Form`을 통한 데이터 전송

- **GET, POST 만 지원**
- `method=”post”` (저장)
    - 회원 가입, 상품 주문, 데이터 변경
    - 웹 브라우저가 input 데이터를 **body**에 넣어서 요청 메세지 생성
        - form의 내용을 메세지 바디를 통해 전송
        - key=value, 쿼리 파라미터 형식
- `method=”get”` (조회)
    - 웹 브라우저가 input 데이터를 쿼리 파라미터로 붙여 요청 메세지 생성
        - `/members?username=kim&age=20` << URI
    - 단, GET은 조회시에만 사용하고 리소스 변경이 발생한다면 POST를 사용해야함
- **Content-Type**
    1. **application/x-www-form-urlencoded** (default)
        - 전송 데이터를 url encoding 처리
            - ex. abc김 → ab%EA%B9%80
    2. **multipart/form-data** (enctype=”multipart/form-data”)
        - 주로 파일 업로드 같은 binary 데이터 전송 시 사용
        - 이미지 (바이트 코드), 텍스트 등 `boundary = ----XXX`
        - 브라우저가 boundary를 랜덤으로 생성하여 적절히 구분하여 **여러 타입의 데이터를 서버로 전송**
        - 다른 종류의 여러 파일과 폼의 내용 함께 전송 가능(그래서 이름이 multipart)


### (4) `HTTP API`를 통한 데이터 전송

- 회원 가입, 상품 주문, 데이터 변경
- **HTML 메시지**를 만들어 전송한다.
- **서버 to 서버**
    - 백엔드 시스템 통신
- **앱 클라이언트**
    - 아이폰, 안드로이드
- **웹 클라이언트**
    - HTML에서 Form 전송 대신 **자바 스크립트를 통한 통신**에 사용(**AJAX**)
    - 예) React, Vuejs 같은 웹 클라이언트와 API 통신
- POST, PUT, PATCH: 메시지 바디를 통해 데이터 전송
- GET: 조회, 쿼리 파라미터로 데이터 전달
- Content-Type: **application/json**을 주로 사용 (사실상 표준이다.)
    - TEXT, XML, **JSON** 등등
    - XML은 여닫는 태그도 불편하고, 읽기도 쉽지 않은 반면 JSON은 읽기 쉽고 상대적으로 크기도 작기 때문에 요즘엔 대부분 JSON을 사용

# 2. HTTP API 설계 예시

> 대부분 **POST** 기반의 **컬렉션** 사용
> 

- HTTP API - 컬렉션
    - POST 기반 등록
    - 예) 회원 관리 API 제공
- HTTP API - 스토어
    - PUT 기반 등록
    - 예) 정적 컨텐츠 관리, 원격 파일 관리
- HTML FORM 사용
    - 웹 페이지 회원 관리
    - GET, POST만 지원

## (1) 회원 관리 시스템

### API 설계 - POST 기반 등록

- **회원** 목록 /members → GET
- **회원** 등록 /members → POST
- **회원** 조회 /members/{id} → GET
- **회원** 수정 /members/{id} → PATCH, PUT, POST
- **회원** 삭제 /members/{id} → DELETE

### POST - 신규 자원 등록 특징

- 클라이언트는 등록될 리소스의 URI를 모른다
- **서버가 새로 등록된 리소스 URI를 생성해준다**
    - HTTP/1.1 201 Created
    Location: /members/100
- 컬렉션(Collection)
    - 서버가 관리하는 리소스 디렉토리
    - 서버가 리소스의 URI를 생성하고 관리
    - 여기서 컬렉션은 /members

## (2) 파일 관리 시스템

### API 설계 - PUT 기반 등록

- 파일 목록 /files → GET
- 파일 조회 /files/{filename} → GET
- 파일 등록 /files/{filename} → PUT
- 파일 삭제 /files/{filename} → DELETE
- 파일 대량 등록 /files → POST

### PUT - 신규 자원 등록 특징

- 클라이언트가 리소스 URI를 알고 있어야 한다
    - 파일 등록 `/files/{filename}` → PUT
    - PUT /files/star.jpg
- **클라이언트가 직접 리소스의 URI를 지정**한다
- **스토어 (Store)**
    - **클라이언트가 관리**하는 **리소스 저장소**
    - 클라이언트가 리소스의 URI를 알고 관리
    - 여기서 스토어는 /files

### HTML FORM 사용

- HTML FORM은 GET, POST만 지원
- 제약이 있음
- 컨트롤 URI
    - GET, POST만 지원하므로 제약이 크다.
    - 이런 제약을 해결하기 위해 동사로 된 리소스 경로를 사용한다.
    - ex) POST 회원 등록 /new, 회원 수정 /edit, 회원 삭제 /delete가 컨트롤 URI 이다.
    - HTTP 메서드로 해결하기 애매한 경우 사용 (HTTP API 포함, API를 사용한다고 하더라도 애매한 경우가 생긴다)

### 정리

- 문서 (document)
    - 단일 개념 (파일 하나, 객체 인스턴스, 데이터베이스 row)
    - 예) /members/100, /files/star.jpg
- 컬렉션 (collection)
    - 서버가 관리하는 리소스 디렉터리
    - 서버가 리소스의 URI를 생성하고 관리
    - 예) /members
- 스토어 (store)
    - 클라이언트가 관리하는 자원 저장소
    - 클라이언트가 리소스의 URI를 알고 관리
    - 예) /files
- 컨트롤러(controller), 컨트롤 URI
    - 문서, 컬렉션, 스토어로 해결하기 어려운 추가 프로세스 실행
    - 동사를 직접 사용
    - 예) /members/{id}/delete

https://restfulapi.net/resource-naming
