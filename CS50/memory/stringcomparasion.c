#include <stdio.h>
#include <cs50.h>

int main(void)
{
    char *s = "EMMA";
    printf("%p\n", s);  //포인터 s의 값 (메모리 주소)

    printf("%p\n", &s[0]); //"E"에 해당하는 메모리 주소
    printf("%p\n", &s[1]); //"M"에 해당하는 메모리 주소
    printf("%p\n", &s[2]); //"M"에 해당하는 메모리 주소
    printf("%p\n", &s[3]); //"A"에 해당하는 메모리 주소

    printf("%p\n", *s); //"E" 
    printf("%p\n", *(s+1)); //"M"
    printf("%p\n", *(s+2)); //"M"
    printf("%p\n", *(s+3)); //"A"

    //문자열 비교
    //1. 사용자로부터 s와 t 두 개의 문자열 입력받아 저장
    string s = get_string("s: ");
    string t = get_string("t: ");

    //2. 두 문자열을 비교 (각 문자들을 비교)
    if(s == t)
    {
        printf("Same\n");
    }
    else {
        printf("Different\n");  
    }
    //Different (s와 t의 주소가 다르기 때문)
}