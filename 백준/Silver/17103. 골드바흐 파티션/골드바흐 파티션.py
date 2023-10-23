# 골드바흐 파티션 풀이

## 골드바흐 수는 어떤 짝수를 두 소수의 합으로 나타낼 수 있는 수다. 즉, 어떤 짝수 - 소수 = 소수 다.
# 이 문제의 포인트는 1. 에라토스테네스의 체를 이용해 소수를 찾기 2. 소수를 찾을 때 리스트에 소수 담기 3. 리스트[짝수 - 소수] 는 소수인지 아닌지 판별

n = int(input())
primes = []
def era(n):
    lst = [True] * (n + 1)
    lst[0] , lst[1] = False, False

    for i in range(2, n + 1):
        if lst[i]:
            primes.append(i)
            for j in range(i + i, n + 1, i):
                lst[j] = False
    return lst

lst = era(1000000)

for _ in range(n):
    num = int(input())
    cnt = 0
    for prime in primes:
        if prime >= num:
            break
        if lst[num - prime] and prime <= num - prime:   # 만약 num = 8 라면 나올수 있는 식의 경우의 수는 8 - 5 = 3 , 8 - 3 = 5 이다. 하지만 3과 5가 나오든 5와 3이 나오든 3과5가 골드바흐 수이므로 2가지 경우의 수 중 1가지 케이스만 고려하면 된다. 
            cnt += 1
    print(cnt)
