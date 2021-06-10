#include <cs50.h>
#include <stdio.h>

//1.배열 크기 지정하는 방식
const int N = 3;
//2.사용자 함수 사용하는 방식
float average(int length, int array[]);

int main(void)
{
    // 1. 점수 배열 선언 및 값 저장
    int scores[N];
    scores[0] = 72;
    scores[1] = 73;
    scores[2] = 33;

    // 2-1.사용자로부터 점수의 갯수 입력
    int n = get_int("Scores:  ");

    // 2-2.점수 배열 선언 및 사용자로부터 값 입력
    int scores[n];
    for (int i = 0; i < n; i++)
    {
        scores[i] = get_int("Score %i: ", i + 1);
    }

    // 평균 점수 출력
    printf("Average: %i\n", (scores[0] + scores[1] + scores[2]) / N);
}

//평균을 계산하는 함수
float average(int length, int array[])
{
    int sum = 0;
    for (int i = 0; i < length; i++)
    {
        sum += array[i];
    }
    return (float) sum / (float) length;
}