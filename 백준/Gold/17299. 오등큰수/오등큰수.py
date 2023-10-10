# 오등큰수 풀이 전략
# 수열안의 한 원소 바로 옆의 수가 더 큰지 작은지를 비교하는 오큰수와 달리 원소가 출력되는 횟수를 가지고 비교하는 문제다.
# 오큰수 문제와 다른점은 횟수를 담아줄 코드를 추가로 작성해야 한다는 것이다.
# 풀이과정 
# 1.A 수열의 원소별 횟수를 담아줄 빈 리스트를 만든 뒤 A 수열을 순회하면서 방금 만들었던 빈 리스트[원소] 의 값을 누적 시킨다.
# 2.횟수를 누적한 결과는 [0,3,2,1,1,0,0,0] 이 된다. -> 1번 인덱스는 횟수가 3번, 2번 인덱스는 횟수가 2번 이런식이다.
# 3.그 뒤는 오큰수의 풀이 과정과 동일하다.

n = int(input())
A = list(map(int,input().split(' ')))

f = [0] * 1000001
idx_lst = [0]
ans = [0]*n

# 횟수 누적 부분
for i in A:
    if f[i]:
        f[i] += 1
    else:
        f[i] = 1


for j in range(1,n):
    while idx_lst and f[A[idx_lst[-1]]] < f[A[j]]:
        ans[idx_lst.pop()] = A[j]
    idx_lst.append(j)
while idx_lst:
    ans[idx_lst.pop()] = -1

print(' '.join(map(str,ans)))


