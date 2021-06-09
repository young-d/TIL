# 🔹디렉토리

### 목록 확인 ( list )

$ `ls` 

$ `ls -al` : 상세보기

### 경로 이동 ( change directory )

$ `cd {directory}`

$ `cd ..` ****: 상위 디렉토리로 이동

### 삭제 ( remove )

$ `rm {directory}`

 
</br>
# 🔹파일

### 생성(또는 수정)

$ `vi {file}`  : 편집기 상태 실행(읽기+쓰기 모드)
$ `touch {file}` : 빈 파일만 생성
$ `cat > {file}` : vi 편집기 상태로 들어감, 문서 작성후 Ctrl+D로 빠져나옴

### 내용 보기(read only)

$ `cat {file}` : 파일 전체 내용
$ `head -n {file}` : 위에서부터 n줄 만큼만
$ `tail -n {file}` : 아래에서부터 n줄 만큼만(로그파일 볼 때 유용)
