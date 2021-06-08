#include <cs50.h> //cs50에서 제공하는 문자열 관련 파일 (명령시에 -lcs50 으로 연결시켜줘야함) or make 명령어 사용!!
#include <stdio.h>

int main(void)
{
    string answer = get_string("what's your name?\n");
    printf("hello, %s\n", answer);
}
