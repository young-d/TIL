#include <stdio.h>
#include <cs50.h>

int main(void)
{
    string names[4];

    names[0] = "EMMA";
    names[1] = "RODRIGO";
    names[2] = "BRIAN";
    names[3] = "DAVID";

    //string 타입의 1차원 배열
    printf("%s\n", names[0]);
    //char 타입의 2차원 배열
    printf("%c%c%c%c\n", names[0][0], names[0][1], names[0][2], names[0][3]);
}

