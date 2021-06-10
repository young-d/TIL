#include <cs50.h>
#include <stdio.h>

int main(void)
{
    // numbers 배열 정의 및 값 입력
    int numbers[] = {4, 8, 15, 16, 23, 42};

    // 값 50 검색
    for (int i = 0; i < 6; i++)
    {
        if (numbers[i] == 50)
        {
            printf("Found\n");
            return 0;  //성공 시 0 반환
        }
    }
    printf("Not found\n");
    return 1;  //실패 시 1 반환
}