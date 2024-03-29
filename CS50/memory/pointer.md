포인터를 기반으로 해서 앞으로 배울 다양한 데이터 구조를 정의하고 사용할 수 있습니다.

![https://cs50.harvard.edu/x/2020/notes/4/pointing.png](https://cs50.harvard.edu/x/2020/notes/4/pointing.png)

하지만 아래 그림과 같이 실제로 p의 값, 즉 n의 주소값을 생각하지 않고, 추상적으로 단지 **p가 n을 가리키고 있다는 것**만 생각해도 됩니다.

![https://cs50.harvard.edu/x/2020/notes/4/p.png](https://cs50.harvard.edu/x/2020/notes/4/p.png)

실제 컴퓨터 메모리에서 변수 p는 아래와 같이 저장될 수 있습니다.

따라서 첫 번째 printf문과 같이 포인터 p의 값, 즉 변수 **n의 주소를 출력**하거나, 두 번째 printft문과 같이 포인터 **p가 가리키는 변수의 값**, 즉 변수 n의 값을 출력할 수도 있습니다.

int *p 에서 p앞의 *는 이 변수가 포인터라는 의미이고, int 는 이 포인터가 int 타입의 변수를 가리킨다는 의미입니다.

그리고 ***p**라는 **포인터 변수**에 &n 이라는 값, 즉 **변수 n의 주소**를 저장합니다.

위 코드를 보면 정수형 변수 n에는 50이라는 값이 저장되어 있습니다.

```
#include <stdio.h>int main(void)
{
   int n = 50;
   int *p = &n;
   printf("%p\n", p);
   printf("%i\n", *p);
}
```

이 연산자를 이용해서 **포인터 역할을 하는 변수**를 선언할 수도 있습니다.

지난 강의에서 배웠던 ‘*’ 연산자는 어떤 메모리 주소에 있는 값을 받아오게 해줍니다.
