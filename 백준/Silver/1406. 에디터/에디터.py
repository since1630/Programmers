import sys
left_lst = list(sys.stdin.readline().strip())
n = int(sys.stdin.readline())
right_lst = []
for _ in range(n):
    cmd = sys.stdin.readline().strip().split()
    if ' ' in cmd:
        cmd = cmd.split(' ')
    if cmd[0] == "L" and left_lst:
        word = left_lst.pop()
        right_lst.append(word)
    elif cmd[0] == "D" and right_lst:
        word = right_lst.pop()
        left_lst.append(word)
    elif cmd[0] == "B" and left_lst:
        left_lst.pop()
    elif cmd[0] == "P":
        left_lst.append(cmd[1])

while right_lst:
    right = right_lst.pop()
    left_lst.append(right)
ans = ''.join(left_lst)
print(ans)