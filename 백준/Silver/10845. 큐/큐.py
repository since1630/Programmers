import sys
from collections import deque

queue = deque()
n = int(sys.stdin.readline())

for _ in range(n):
    cmd = sys.stdin.readline().strip()
    if ' ' in cmd:
        cmd = cmd.split(' ')
        if cmd[0] == 'push':
            queue.append(cmd[1])
    if cmd == 'pop':
        if len(queue) == 0 : 
            print(-1)
        else:
            pop = queue.popleft()
            print(pop)
    if cmd == 'size':
        count = len(queue)
        print(count)
    if cmd == 'empty':
        if len(queue) == 0 :
            print(1)
        else:
            print(0)
    if cmd == 'front':
        if len(queue) != 0 :
            print(queue[0])
        else:
            print(-1)
    if cmd == 'back':
        if len(queue) != 0 :
            print(queue[-1])
        else:
            print(-1)
    

