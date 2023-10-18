n, s = map(int,input().split(' '))
inp = list(map(int,input().split(' ')))
lst = []

for i in inp:
    lst.append(abs(s-i))

def gcd(a,b):
    if b == 0:
        return a
    else:
        return gcd(b,a%b)
    
g = 0
for j in range(len(lst)-1):
    if j == 0:
        g = gcd(lst[0],lst[1])
    elif j >= 2:
        g = gcd(g,lst[j])

if len(lst) == 1:
    print(lst[0])
else:
    print(g)