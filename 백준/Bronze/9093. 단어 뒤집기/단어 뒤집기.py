n = int(input())
for _ in range(n):
    word = ''
    cmd = input().split(' ')
    for i in cmd:
        word += i[::-1] + ' '
    print(word)