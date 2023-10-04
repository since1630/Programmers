n, k = map(int, input().split())
lst = [i for i in range(1,n+1)]
i = 0
new_lst = []
for _ in range(n):
    i += k - 1    # 하나를 제거할 때 마다 그에 맞게 lst의 갯수가 줄어들고 그에 따라 인덱스도 줄어들기 때문에 k-1
    if i >= len(lst):    # >= 에서 =까지 해줘야 인덱스 리셋이 정확하게 된다.
        i = i % len(lst)
    popped = lst.pop(i)
    new_lst.append(str(popped))

print('<',', '.join(new_lst),'>',sep='')