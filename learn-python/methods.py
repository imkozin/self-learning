s = 'hEllO WoRld'

print(s.capitalize())
print(s.title())
print(s.swapcase())

my_str = 'fhgfhgfh'
print(my_str.isalpha())

s = input()
result = ''

for i in range(len(s)):
    if i % 2 != 0:
        result += s[i]
print(result)

