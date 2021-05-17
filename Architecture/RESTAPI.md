## Rest API

- 배경
- 개념

- 조건
- 원칙 - HTTP API  와 차이점
- 

    ### **자원의 식별**

    요청 내에 기술된 개별 자원을 식별할 수 있어야 한다. 웹 기반의 REST 시스템에서의 [URI](https://ko.wikipedia.org/wiki/URI)의 사용을 예로 들 수 있다. 자원 그 자체는 클라이언트가 받는 문서와는 개념적으로 분리되어 있다. 예를 들어, 서버는 데이터베이스 내부의 자료를 직접 전송하는 대신, 데이터베이스 레코드를 HTML, XML이나 JSON 등의 형식으로 전송한다.

    ### **메시지를 통한 리소스의 조작**

    클라이언트가 어떤 자원을 지칭하는 메시지와 특정 메타데이터만 가지고 있다면 이것으로 서버 상의 해당 자원을 변경·삭제할 수 있는 충분한 정보를 가지고 있는 것이다.

    ### **자기서술적 메시지**

    각 메시지는 자신을 어떻게 처리해야 하는지에 대한 충분한 정보를 포함해야 한다. 예를 들어 MIME type과 같은 인터넷 미디어 타입을 전달한다면, 그 메시지에는 어떤 파서를 이용해야 하는지에 대한 정보도 포함해야 한다. 미디어 타입만 가지고도, 클라이언트는 어떻게 그 내용을 처리해야할 지 알 수 있어야 한다. 메시지를 이해하기 위해 그 내용까지 살펴봐야 한다면, 그 메시지는 자기서술적이 아니다. 예를 들어, 단순히 "application/xml"이라는 미디어 타입은, 실제 내용을 다운로드 받지 않으면 그 메시지만 가지고는 무엇을 해야할지에 대해 충분히 알려주지 못한다.

    ### **애플리케이션의 상태에 대한 엔진으로서 하이퍼미디어**

    만약에 클라이언트가 관련된 리소스에 접근하기를 원한다면, 리턴되는 지시자에서 구별될 수 있어야 한다. 충분한 콘텍스트 속에서의 URI를 제공해주는 하이퍼텍스트 링크의 예를 들 수 있겠다.

- SOAP

## HTTP Request Method

HTTP 요청 메서드는 안정성, 캐시가능, 멱등성 

### Get

- FIND all → /resources
- FIND one by id → /resources/:id

### Post

- CREATE resource → /resources

### Delete

- DELETE → /resources

### Put

- UPDATE all of resource → /resources

### Patch

- UPDATE a part of resource → /resources

## HTTP Response Status Code

- 200~
- 400~
- 500~

## Resource 분류



## 🏸 파라미터 받는 방법

1. Request를 통해 받는 방법

```java
    @RestController
    class TempController {
    	
        @GetMapping("/temp")
        String temp(HttpServletRequest request) {
        	String a = request.getParameter("a");
            String b = request.getParameter("b");
            
            return "none";
        }
    }
```
<br/>
<br/>

2. Map으로 받는 방법

```java
    @RestController
    class TempController {
    
    	@GetMapping("/temp")
        String temp(@RequestParam Map<String, String> param) {
        	String a = param.get("a");
        	String b = param.get("b");
        
        	return "none";
    	}
    }
```
<br/>
<br/>

3. @RequestParam을 통해 직접 매칭하는 방법

```java
    @RequestController
    class TempController {
    
    	@GetMapping("/temp")
        String temp(@RequestParam("a") String a, @RequestParam("b") int b) {
        	
            return "none";
        }
    }
```

- HTTP 요청 파라미터를 전달받을 때 사용되고 name에 해당하는 값을 입력
- Parameter 타입을 int로 지정하면 자동으로 변환

<br/>
<br/>

4. Model Class로 받는 방법

```java
    @RestController
    class TempController {
    
    	@GetMapping("/temp")
    	String temp(Abc abc, Model model) {
    		//Model 스캔 시작
        	Map<String, Object> map = model.asMap();
        	for(String key : map.keySet()) {
        		System.out.println(key + " : " + map.get(key).toString());
        	}
        	//Model 스캔 종료
        
        	return "none";
    	}
    }
```

- View에 전달할 모델 데이터를 설정할 때 사용
- 데이터의 양이 많은 경우 유용

<br/>
<br/>

5. @PathVariable로 받는 방법

```java
    @RestController
    class TempController {
    	
        @GetMapping("/temp/{a}/{b}")
        String temp(@PathVariable("a") String a, @PathVariable("b") int b) {
        	
            return "none";
        }
    }
```

- path에서 Parameter를 받는 규칙

<br/>
<br/>

6. Model Class + @PathVariable 조합으로 받는 방법

```java
    @RestController
    class TempController {
    	@GetMapping("/temp/{a}/{b}")
        String temp(Abc abc) {
        	System.out.println(abc.getA());
            System.out.println(abc.getB());
            return "none";
        }
        
        @Data @ToString @Getter @Setter
        static class Abc {
        	String a;
            int b;
        }
    }
```
