# word = 'Hello World!'
# count = 0
# for i in word:
#     if i == 'l':
#         print('yes')
#         count += 1
# print(count)

# word = 'Hello World!'
# found = None
# for i in word:
#     if i == 'l':
#         found = True
#         break
#     else:
#         found = False

# print(found)

nums = [1, 2, 3, 'Hello', True]
# nums.append(100)
# nums.append(False)
# nums.insert(4, 'World')
# nums.extend([8, 9, 0])
# nums.sort()
# nums.reverse()
# nums.pop(-1)
# nums.remove(False)
# nums.clear()

# for el in nums:
#     print(el)

# n = int(input('Enter length: '))
# user_list = []
# i = 0
# while i < n:
#     string = 'Enter an element #' + str(i + 1) + ": "
#     user_list.append(input(string))
#     i += 1
# print(user_list)

w = 'football, basketball, tennis'
# w.count('w')
# w.lower()
# w.capitalize()
# w.upper()
# print(w.find('l'))
hobby = w.split(', ')
# print(hobby)
# print(w)

for i in range(len(hobby)):
    hobby[i] = hobby[i].capitalize()

result = ", ".join(hobby)
# print(result)

word = 'football'
# print(word[4:])

lis = [1, 2, 3, 'Hello', True, 4.5]
print(lis[::-1])