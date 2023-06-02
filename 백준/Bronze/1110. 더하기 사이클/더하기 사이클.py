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