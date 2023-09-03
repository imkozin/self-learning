# data = input("Enter text: ")

# file = open('data/text.txt', 'w')
# file.write(data)

# file.close()

# file = open('data/text.txt', 'r')
# print(file.read())

# for line in file:
#     print(line)


# file.close()

# try:
#     x = int(input('Enter a number: '))
#     x += 5
#     print(x)
# except ValueError:
#     print("Input not valid")

# x = 0
# while x == 0:
#     try:
#         x = int(input('Enter a number: '))
#         x += 5
#         print(x)
#     except ValueError:
#         print("Input not valid")
#     finally:
#         print('Finally!')

# try:
#     file = open('data/data.txt', 'r')
#     file.read()
#     file.close()
# except FileNotFoundError:
#     print('File not found')

# try:
#     with open('data/text.txt', 'r', encoding='utf-8') as file:
#         print(file.read())
# except FileNotFoundError:
#     print('File not found')


import datetime as d
import sys, os, platform
from math import sqrt as s

# print(platform.system())
# print(sys.path)
# print(os.name)
print(s(25))

print(d.datetime.now().time().minute)