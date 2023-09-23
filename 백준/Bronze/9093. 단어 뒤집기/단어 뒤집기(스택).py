# 스택으로 풀기
n = int(input())
for _ in range(n):
    lst = [] # 1. 빈 스택 만들기
    word = '' # 2. 문자를 누적 시킬 변수 만들기
    cmd = input()
    for i in cmd:
        if i != ' ':    # 3. 문자가 공백이 아니라면 스택에 담는다.  
            lst.append(i)
        else:   # 4. 만약 공백이 나왔다면 하나의 단어가 만들어진거기 때문에 스택에서 단어들을 전부 빼서 2번의 변수에 누적시킨다.
            while lst:
                word += lst.pop()
            word += ' ' # 5. 단어를 누적시켰으면 공백을 누적시켜 마무리 한다.
            
    # 6.여기까지 진행 된 경우 I ma yppah 로 될 것이고 현재 lst 안에 데이터 today 가 남아 있으므로 이 역시 빈 스택으로 만들어준다.
    while lst:
        word += lst.pop()
    word += ' '
    print(word)

# append -> O(1)
# pop -> O(1)
# 최악의 경우 O(N^2) -> for / while 중첩
