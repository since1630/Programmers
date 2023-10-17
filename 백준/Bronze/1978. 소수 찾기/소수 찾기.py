import math
n = int(input())
inp = list(map(int,input().split(' ')))
cnt = 0

def prime(n):
    if n == 1:
        return False
    for i in range(2,int(math.sqrt(n)+1)):
        if n % i == 0:
            return False
    return True

for j in inp:
    cnt += prime(j)

print(cnt)