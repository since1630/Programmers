inp = input()

lst = []
num = 0

for i in range(len(inp)):
    if inp[i] == '(':
        lst.append(i+1)
    elif inp[i] == ')' and lst:
        # print('i:',i)
        if i+1 - lst[-1] == 1:
            lst.pop()
            num += len(lst)
        elif i+1 - lst[-1] > 1:
            lst.pop()
            num += 1
        else:
            lst.pop()
        # print('num: ',num)
    # print(lst)
    
print(num)