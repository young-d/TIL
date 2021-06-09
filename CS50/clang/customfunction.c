#include <stdio.h>
#include <cs50.h>

void cough(void); //c에서는 main 앞에서 cough를 알려주어야 한다
int get_positive_int(void);

int main(void)
{
    for (int i = 0; i < 3; i++)
    {
        cough();
    }

    int integer = get_positive_int();
    printf("%i\n", integer);
    
    //중첩 루프
    int n = get_positive_int();
    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < n; j++) 
        {
            printf("#");
        }
        printf("\n");
    }
}

void cough(void)
{
    printf("cough\n");
}

int get_positive_int(void)
{
    int n;
    do
    {
        n = get_int("Positive Integer: ");
    }
    while(n < 1);
    
    return n;
}




