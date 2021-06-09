#include <stdio.h>
#include <cs50.h>

int main(void)
{
    int counter = 0;
    counter = counter + 1;
    // int counter += 1;
    // int counter++;

    //# condition1
    int x = 0;
    int y = 0;
    if (x < y)
    {
        printf("x is less than y\n");
    }
    else 
    {
        printf("x is not less than y\n");
    }

    //# condition2
    if (x < y)
    {
        printf("x is less than y\n");
    }
    else if (x > y)
    {
        printf("x is greater than y\n");
    }
    else 
    {
        printf("x is equal to y\n");
    }

    //# loop1 _infinity loop
    while (true)
    {
        printf("hello, world\n");
    }

    //# loop2 _counter loop
    int i = 0;
    while (i < 50)
    {
        printf("hello, world\n");
        i = i + 1;
    }

    for (int i = 0; i < 50; i = i + 1) 
    {
        printf("hello, world\n");
    }
}
