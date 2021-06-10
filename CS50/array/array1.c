#include <stdio.h>
#include <cs50.h>

int main(void)
{
    //방법1
    //Scores
    int score1 = 72;
    int score2 = 72;
    int score3 = 33;

    //Print average
    printf("Average: %i\n", (score1 + score2 + score3) / 3);

    //방법2
    //Scores
    int scores[3];
    scores[0] = 72;
    scores[1] = 73;
    scores[2] = 74;

    //Print average
    printf("Average: %i\n", (scores[0] + scores[1] + scores[2]) / 3);
}