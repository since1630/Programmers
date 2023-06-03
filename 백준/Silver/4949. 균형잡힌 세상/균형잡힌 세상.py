while True:
    stack = []  
    cmd = input()
    if cmd == '.':
        break
    for word in cmd:
        if word == '(' or word == '[':
            stack.append(word)
        elif word == ')':
            if stack and stack[-1] == '(':
                stack.pop()
            else:
                print('no')
                break
        elif word == ']':
            if stack and stack[-1] == '[':
                stack.pop()
            else:
                print('no')
                break
    else:
        if stack:
            print("no")
        else:
            print("yes")
        