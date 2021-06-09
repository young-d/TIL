# include <cs50.h>
# include <stdio.h>
int main(void)
{
    //int
    int age = get_int("What's your age?\n");
    int days = age * 365;
    printf("You are at least %i days old.\n", days);

    //float
    float price = get_float("What's the price?\n");
    printf("Your total is %.2f\n", price*1.0625);


    //홀수인지 짝수인지 알려주는 코드 짜기
    int n = get_int("n: ");
    if(n % 2 == 0)
    {
        printf("even\n");
    }
    else
    {
        printf("odd\n");
    }
}
