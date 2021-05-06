1. ec2 인스턴스 생성 (보안그룹설정)

    ![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/5382bab7-ddcb-4427-82f2-114a499cb893/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/5382bab7-ddcb-4427-82f2-114a499cb893/Untitled.png)
---
2. pem키 ppk로 변환(PuTTY)

    ec2-user@(퍼블릭IP DNS) → SSH>Auth open NewKeyPair.ppkec2 
---
3. 접속 성공!

    +리눅스에서 접속 시

    `$ sudo ssh -i <<pem키 경로>> ec2-user@<<퍼블릭 DNS>>`
---
4. 터미널에서 작업

❗ 충돌나거나 설치시 에러나는 경우 

 **기존 파일 삭제**
`$rm -rf ./node_modules
 $rm package-lock.json
 $rm yarn.ock`

**캐시 리셋**
`$npm cache clean`
---
🥎 **yarn 설치**

`$curl -sL https://dl.yarnpkg.com/rpm/yarn.repo -o /etc/yum.repos.d/yarn.repo`

또는

`$curl -o- -L https://yarnpkg.com/install.sh | bash`

🏀 **nodejs & npm 설치**

`$sudo yum install -y gcc-c++ make`
`$curl -sL https://rpm.nodesource.com/setup_14.x | sudo -E bash` 

`$sudo yum install -y nodejs` (ec2 Linux에 설치)

🏐 버전 확인

`$npm -v 
 $node -v`

🏈 웹서버 배포 -by 깃

`$ git clone ~~https://github.com/hoontae24/node-simple-server(깃헙주소)~~`

`$ cd~~node-simple-server(프로젝트폴더)~~`

`$ npm install` (모듈 설치)

`$ npm run build` (프로젝트 빌드)

`$ npm start` (서버 실행)

🏉**NGINX**

`$ sudo amazon-linux-extras install nginx1` (AWS에서 제공하는 nginx)

`$ nginx -v` (버전확인)  

`$ sudo service nginx start` (실행)

→ 퍼블릭 DNS로 접속해보기

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/717daa95-f729-4a5e-83d5-f91fa38784ff/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/717daa95-f729-4a5e-83d5-f91fa38784ff/Untitled.png)

`$ sudo service stop nginx` (중단 명령어니까 참고)

`$ sudo vi /etc/nginx/conf.d/default.conf`(절대경로: /etc/nginx/nginx.conf 에 default.conf파일 생성)

→ 내용 입력

```basic
server {
	listen 80;
	server_name 13.125.208.8; //퍼블릭 IP
	
	location / {
		proxy_pass 127.0.0.1:3000; //80으로 접근시 로컬 3000으로 돌리기
	}
}
```

→ 저장 (리눅스명령어 `:wq`)

`$ nginx -s reload` (nginx 리로드)

→ 포트없이 퍼블릭IP/DNS 로 접근가능!

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/115e95af-6182-4ffe-8eb1-657c66e51f7a/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/115e95af-6182-4ffe-8eb1-657c66e51f7a/Untitled.png)
