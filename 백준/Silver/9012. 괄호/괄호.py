n = int(input())

for _ in range(n):
    lst = []
    cmd = input()
    for word in cmd :
        if word == '(':
            lst.append(word)
        elif word == ')':
            if lst:
                lst.pop()
            else:
                lst.append(word)
                # print('NO')
                break
    # print(lst)
    if lst:
        print('NO')
    else:
        print('YES')
