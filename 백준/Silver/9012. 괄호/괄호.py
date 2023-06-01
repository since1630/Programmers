## 스택을 만든다. 입력값을 하나씩 확인하는데 만약 그 입력값이 ')' 이고 동시에 스택이 비어있지 않다면 스택을 pop한다. 그렇지 않다면 확인한 입력값을 스택에 담는다.
## 하나의 조건으로 10번 코드라인을 작성해야 한다. 왜냐면 만약 입력값이 )) 일 경우, 첫 ) 이 들어가면 9번 코드라인을 통과하게 되고 고스란히 스택에 담긴다. 
## 이렇게 되면 두 번째 입력값인 ) 이 확인되고 9번째 코드 라인 때문에 스택이 pop 되어 결국 스택이 빈 값으로 존재한다.

n = int(input())

for _ in range(n):
    stack = []
    str = input()
    for word in str:
        if stack and word == ")":
            if word not in stack:
                stack.pop()
        else:
            stack.append(word)
    if stack:
        print("NO")
    else:
        print("YES")
        
