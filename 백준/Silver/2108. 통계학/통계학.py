import math
import sys

n = int(sys.stdin.readline())
dict = {}
lst = []
for _ in range(n):
    lst.append(int(sys.stdin.readline()))

lst.sort()

for i in lst:
    if i in dict:
        dict[i] += 1
    else:
        dict[i] = 1

# 1.산술 평균
print(round(sum(lst)/n))

# 2.중앙값
print(lst[n // 2])

# 3.최빈값
dict_max = max(dict.values())
count = 0
for k,v in dict.items():
    if (v == dict_max):
        count += 1
    if (count > 1):
        print(k)
        break
if (count == 1):
    print(max(dict,key=dict.get))

# 4.범위 출력
print(max(lst) - min(lst))

