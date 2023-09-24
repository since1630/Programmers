n = int(input())
inp_lst = []
for _ in range(n):
    inp_lst.append(int(input()))
pmlst = []
num_lst = []
idx = 1
for i in inp_lst:
    for j in range(idx, i+1):
        num_lst.append(j)   # 1. 1,2,3,4 형태로 리스트에 담긴다.
        idx += 1
        pmlst.append('+')
    if num_lst[-1] == i: # 2. 1,2,3,4 중에서 마지막 숫자인 4와 처음 입력한 값(4)과 일치하면 pop을 한다. 
        num_lst.pop()
        pmlst.append('-')
    else:   # 3. 만약 idx = 5 , i = 3 이고 pmlst에 1,2,3,4 까지 담겨 있다면 NO를 출력한다.
        print("NO")
        pmlst = []
        break
if pmlst:
    for word in pmlst:
        print(word)