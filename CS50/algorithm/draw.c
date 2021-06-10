#include <cs50.h>
#include <stdio.h>

void draw(int h);

int main(void)
{
    // 사용자로부터 피라미드의 높이를 입력 받아 저장
    int height = get_int("Height: ");

    // 피라미드 그리기
    draw(height);
}

void draw(int h)
{
    // 높이가 h인 피라미드 그리기
    for (int i = 1; i <= h; i++)
    {
        for (int j = 1; j <= i; j++)
        {
            printf("#");
        }
        printf("\n");
    }
}