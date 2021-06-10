#include <cs50.h>
#include <stdio.h>
#include <string.h>

int main(void)
{
    string names[] = {"EMMA", "RODRIGO", "BRIAN", "DAVID"};
    string numbers[] = {"617–555–0100", "617–555–0101", "617–555–0102", "617–555–0103"};

    for (int i = 0; i < 4; i++)
    {
        //strcmp() : 문자열 비교 -> 같으면 0 반환 
        if (strcmp(names[i], "EMMA") == 0)
        {
            printf("Found %s\n", numbers[i]);
            return 0;
        }
    }
    printf("Not found\n");
    return 1;
}