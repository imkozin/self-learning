mn = {'hello', 43, 312}
# print(type(mn))

x = set()
# print(type(x))

s = {i for i in range(1, 10)}
# s.add('hello')
# s.remove(9)
# s.pop()
# s1 = s.copy()
# s.clear()
# print(min(s))
# print(max(s))
# print(sum(s))
# del s
# s.discard(43)

a = {1, 2, 3, 4}
b = {1, 5, 3, 4}
c = {2, 3}
d = frozenset(c)
# d.add(1000)
# print(d)

# res = a.union(b) # res = a | b
# res = a & b # only unique values 
# res = a.intersection(b)
# print(res)
# a.update(b)
# a |= b # the same as update
# print(a)

# res = a.difference(b)
# res = a ^ b # res = a.symmetric_difference(b)

# print(c.issubset(a)) # подмножество
# print(c.issuperset(b)) # надмножество
# print(res)


# Напишите программу, которая получает строку текста. Определите и выведите на экрна количество различных символов в строке.
def count_unique_chars():
    user_input = input('Enter a string of text: ')
    unique_chars = set(user_input)
    print(f'Number of unique characters: {len(unique_chars)}')
    print(f'Unique characters: {unique_chars}')

# count_unique_chars()

# II)
# Создать два множества на 20 элементов каждый, значения элементов - это целые случайные числа от 0 до 100.
# Вывести на экран:
# 1) Объединение множеств.
# 2) Разность множеств
# 3) Пересечение множеств.

# P.S. Так как множество состоит только из уникальных элементов, при генерации случайных чисел могут быть созданы одинаковые значения. Необходимо это учитывать.
import random

def generate_random():
    s1 = set()
    s2 = set()

    while len(s1) < 20:
        s1.add(random.randint(0, 100))

    while len(s2) < 20:
        s2.add(random.randint(0, 100))

    # 1) Объединение множеств.
    res = s1.union(s2)
    
    # 2) Разность множеств
    s = s1.difference(s2)

    # 3) Пересечение множеств.
    ult = s1.intersection(s2)

    print('s1: ', s1)
    print('s2: ', s2)
    print(res)
    print(s)
    print(ult)


# generate_random()

# III)
# Напишите программу для вывода количества уникальных символов каждого введенного слова без учета регистра.
def is_unique():
    user_input = input("enter a word: ")

    s = set(user_input.lower())
    print(f'Number of unique characters: {len(s)}')
    print(f'Unique characters: {s}')

is_unique()