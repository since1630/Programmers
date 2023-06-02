n = int(input())
result = n
cnt = 0
while True:
    cnt += 1

    s1 = n % 10 + n // 10 # 8
    s2 = n%10*10 + s1%10
    if result == s2:
        break
    n = s2
print(cnt)


## 수정 코드 ##
n = int(input())

cnt = 0
result = n
while True:
    cnt += 1
    mok = result // 10
    remain = result % 10
    sum = (mok + remain) % 10
    result = (remain * 10) + sum
    if result == n:
        break
print(cnt)
