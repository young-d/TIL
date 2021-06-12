문자열을 저장하기 위해 CS50 라이브러리에 포함된 string 자료형을 사용하였었습니다.

아래와 같이 s에 “EMMA”라는 값을 저장한다고 생각해 봅시다.

```
string s = “EMMA”;
```

문자열은 결국 **문자의 배열**이고, s[0], s[1], s[2], … 와 같이 하나의 문자가 배열의 한 부분을 나타냅니다.

가장 마지막의 **\0**은 0으로 이루어진 바이트로, **문자열의 끝**을 표시하는 약속입니다.

![https://cs50.harvard.edu/x/2020/notes/4/s_array.png](https://cs50.harvard.edu/x/2020/notes/4/s_array.png)

여기서 **변수 s**는 결국 이러한 **문자열을 가리키는 포인터**가 됩니다.

더 상세히는 문자열의 가장 첫번째 문자, 즉 주소 0x123에 있는 s[0]를 가리키게 됩니다.

![https://cs50.harvard.edu/x/2020/notes/4/s_pointer.png](https://cs50.harvard.edu/x/2020/notes/4/s_pointer.png)

실제 CS50 라이브러리를 보면 string 자료형은 아래와 같이 정의되어 있습니다.

```
typedef char *string
```

여기서 typedef는 새로운 자료형을, char *은 문자에 대한 포인터를, string은 자료형의 이름을 의미합니다.

따라서 아래 두 코드는 동일하게 동작할 것입니다.

1. string 자료형을 이용하여 “EMMA” 출력

    ```
    #include <cs50.h>#include <stdio.h>int main(void)
    {
        string s = "EMMA";
        printf("%s\n", s);
    }
    ```

2. char 포인터를 이용하여 “EMMA” 출력

    ```
    #include <stdio.h>int main(void)
    {
        char *s = "EMMA";
        printf("%s\n", s);
    }
    ```

2번 코드의 char *s에서 s라는 변수는 문자에 대한 포인터가 되고, “EMMA”라는 문자열의 가장 첫 번째 값을 저장하기 때문이죠.
