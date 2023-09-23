n = int(input())

for _ in range(n):
    stack = []
    str = input()
    for word in str:
        if (len(stack) != 0 and word == ")"):
            if (word not in stack):
                stack.pop()
        else:
            stack.append(word)
    if (len(stack) == 0):
        print("YES")
    else:
        print("NO")