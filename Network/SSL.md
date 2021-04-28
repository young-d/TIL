## ◻ SSL과 https

- SSL과 https는 모두 프로토콜의 한 종류이다.
- http와 https의 차이는 보안적인 측면에 있다.
- https로 시작하는 웹사이트는 SSL이라는 인증서를 사용하고 있는 것이다.
<br/>
<br/>

## 📜 SSL 인증서

- 클라이언트가 해당 URL로 접속한 경우 서버는 클라이언트에게 인증서를 전송한다.
- 클라이언트는 전달 받은 인증서를 검토한 후에 다음 절차를 수행한다.
- 결론적으로 클라이언트가 서버로 부터 전달받은 인증서가 신뢰할 수 있는 것인지를 검토하는 과정을 한번 거친다는 점에서 정보 교환의 보안이 강화되는 효과가 있다.
<br/>
<br/>
## 🔌 DB connection에서 SSL 설정

데이터베이스를 연결하려면 다음과 같은 url을 설정해야  한다.

$ ```jdbc:mysql://{Host}/{DB}```

이 때 SSL 인증서를 사용하는 서버와 connection을 하려면 추가적으로 보내야하는 파라미터가 있다.
- ``` verifyServerCertificate=false``` : 인증서를 검증
(개인 인증서일 경우 대부분 false로 설정)
- ``` useSSL=true``` : 인증서 연결 활성화
(SSL을 지원하지 않는 서버에 연결할 경우 false로 설정)
<br/>
<br/>

## 👀 서버가 SSL을 지원하는지 알아보기

$ ```show variables like '%ssl%';```

-> 활성화된 상태라면 have_openssl  이 YES 로 나온다.

<br/>
<br/>

## 💡 결론

SSL 연결이 활성화 되어있는 서버와 접속할 때 DB connection URL은
```jdbc:mysql://{Host}/{DB}?verifyServerCertificate=false&useSSL=true```
