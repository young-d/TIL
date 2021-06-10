#include <stdio.h>
#include <cs50.h>
#include <string.h>
#include <ctype.h>

int main(void)
{
    //대문자로 문자 출력하기
    string s = get_string("Before: ");
    printf("After: ");
    for (int i = 0; n = strlen(s); i < n; i++)
    {
        if (s[i] >= 'a' && s[i] <= 'z')
        {
            printf("%c", s[i] - 32);
        }
        else{
            printf("%c", s[i]);
        }
    }
    printf("\n");

    //ctype 라이브러리 사용
    string ctypeS = get_string("Before: ");
    printf("After: ");
    for (int i = 0; n = strlen(s); i < n; i++)
    {
        printf("%c", toupper(S[i]));
    }
    printf("\n");
}