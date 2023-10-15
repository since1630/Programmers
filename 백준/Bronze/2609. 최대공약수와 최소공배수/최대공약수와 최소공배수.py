a, b = map(int,input().split(' '))

def gcd(a,b):
    if b == 0:
        return a
    else:
        return gcd(b,a%b)

g = gcd(a,b)
print(g)
print((a*b) // g)