#include <cs50.h>
#include <ctype.h>
#include <stdio.h>
#include <string.h>

int main(void)
{
    //메모리 주소 복사
    string s1 = get_string("s: ");
    string t1 = s1; //s(메모리 주소) 할당

    t1[0] = toupper(t1[0]);  //e -> E로 바꿔도 메모리상에 값이 없으므로 반영x

    printf("s1: %s\n", s1);  //emma
    printf("t1: %s\n", t1);  //emma (동일한 값 출력)


    //메모리 할당 함수 사용해 실제 메모리상에서 복사
    char *s2 = get_string("s2: ");
    char *t2 = malloc(strlen(s2) + 1);  //malloc : 정해진 크기만큼 메모리 할당

    for (int i = 0, n = strlen(s2); i < n + 1; i++)
    {
        t2[i] = s2[i];  //메모리상에 값 할당
    }

    t2[0] = toupper(t2[0]); //실제 값이 있으므로 e -> E로 재할당됨

    printf("s2: %s\n", s2); //emma
    printf("t2: %s\n", t2); //Emma (다르게 출력)
}