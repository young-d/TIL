#include <cs50.h>
#include <stdio.h>
#include <unistd.h>

int main(void)
{
    //사용자에게 x값 받기
    float x = get_float("x: ");

    //사용자에게 y값 받기
    float y = get_float("y: ");

    //나눗셈 후 출력 (소수점50자리까지)
    printf("x/y = %.50f\n", x / y); 


    //정수 오버플로우
    for (int i = 0; ; i *= 2)
    {
        printf("%i\n", i);
        sleep(1);  //unistd.h  //10억을 넘긴 후에는 0으로 계속 출력됨
    }
}
