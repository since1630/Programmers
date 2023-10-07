# 오큰수 공략
# 이건 입력값의 최대 크기가 1백만이므로 2중 반복문으로 해결할 수 없다. 
# 또한, 3 5 2 7 이라고 가정했을 때 5 와 2 는 모두 7을 바라보고 있으므로 2와 5를 순차적으로 해거해주는 스택 자료구조를 활용하는것이 좋아보인다.

# 1.인덱스를 담을 스택과 오큰수를 담을 스택을 준비한다.
# 2.오른쪽에 있는 애를 찾아야 하는데 만약 오른쪽애가 크다면 인덱스가 담긴 스택에서 pop을 해야한다.
# 3.pop을 했건 하지 않았건 결국 순회를 마친 현재 인덱스는 1번에서 준비한 스택에 저장 되어야 한다.
# 4.for문을 모두 마치고 나면 인덱스 리스트에 남아있는 원소들을 전부 pop하면서 pop 인덱스에 해당하는 ans를 -1로 변경한다.


n = int(input())
inp = list(map(int,input().split(' ')))

idx_lst = [0]
ans = [0]*n

for i in range(1,n):
    while idx_lst and inp[idx_lst[-1]] < inp[i]:
        ans[idx_lst.pop()] = inp[i]
    idx_lst.append(i)

while idx_lst:
    ans[idx_lst.pop()] = -1

print(' '.join(map(str,ans)))