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
