# Pi[0] = 0,
# j = 0, i = 0
# if a[i] == a[j]:
#       Pi[i] = j+1, i++, j++
#        else: // a[i] != a[j]
#        if j == 0 , then Pi[i] = 0, i++
#        else:  // j > 0
#            j = Pi[j - 1]

t = 'lilila'

p = [0] * len(t) #  fill the whole line with null, according to length of given string p = [0][0][0][0][0][0]

# start the counter to find coincides inside the string
j = 0
i = 1

while i < len(t): # cannot be longer then len of string
    if t[j] == t[i]: # if the 1st elements coincide 
        p[i] = j + 1 # index of P for [1][2] etc
        i += 1  # both counter go to next element
        j += 1 # if j == m, string found
    else: # t[j] != t[i] --> elements don't coincide --> # i == n, string not found
        if j == 0: # j stays, 
            p[i] = 0 # [0][0]...
            i += 1 # i counter goes to the next element
            # check again if t[j] == t[i] ...
        else: # j > 0 counter++ goes to the last same element(s)
            j = p[j-1] 
            # go one step back to the former index of 't' = index[Pi] # if it was [3] then goes to [2] etc) to check again if t[j] == t[i] ...

print(p) # [0, 0, 1, 2, 3, 0] max length of suffix is 3

a = 'lililoth lililath'
m = len(t)
n = len(a)

i = 0
j = 0
while i < n:
    if a[i] == t[j]:
        i += 1
        j += 1
        if j == m:
            print('String found')
            break
    else:
        if j > 0:
            j = p[j-1]
        else:
            i += 1
if i == n:
    print('String not found')