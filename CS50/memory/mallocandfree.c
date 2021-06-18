#include <stdlib.h>

void f(void)
{
    int *x = malloc(10 * sizeof(int));  //메모리 할당(malloc)
    x[10] = 0; // -> 버퍼 오버플로우 발생 (0~9 사이 인덱스 사용 필요)
    free(*x);  //메모리 누수 해결위해 할당 해제(free) 필요
}

int main(void)
{
    f();
    return 0;
}