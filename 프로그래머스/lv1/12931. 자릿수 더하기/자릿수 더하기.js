function solution(n)
{
    let sum = 0;
for (val of n + '') {
  sum += +val;
}
    return sum;
}