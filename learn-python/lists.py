from copy import deepcopy

lang = ['python', 'java', 'c++']
num = [10, 2, 3]
num.sort()

# lang.extend(num)
# lang.insert(1, 'pascal')
# lang.remove('c++')

# lang.pop(1)

# del lang[0]

# lang.clear()

# print(lang.index('c++'))
# print(lang.count('c++'))

# lang_copy = lang.copy()
lang_copy = deepcopy(lang)
# print(lang_copy)
lang.reverse()

# print(num)
# print(lang)



# I)
# Написать программу, создающую список из введенной пользователем строки цифр (без пробелов). Вывести все элементы строки, которые имеют нечетные индексы.

def get_odds():
    nums = input("Enter numbers: ")
    lst = list(nums)
    res = []
    for i in range(len(lst)):
        if i % 2 != 0:  # Заменяем условие на нечетные индексы
            res.append(lst[i])

    print(res)

# get_odds()

# II)
# Напишите программу, которая получает на вход натуральное число. Создать и вывести список, заполненный квадратами четных чисел, делящихся на 5, от 1 до введенного числа.
    
def get_sqr(num):
    res = [i**2 for i in range(1, num) if i % 2 == 0 and i % 5 == 0]
    print(res)

# get_sqr(100)
    
# III)
# Написать программу, определяющую является ли введенный номер билета - "счастливым".
# Билет называют «счастливым», если в его номере сумма первых трех цифр равна сумме последних трех.
# Номер билета может быть от 000000 до 999999.
def is_lucky(num):
    n = list(str(num))
    if len(n) != 6 or not all(char.isdigit() for char in n):
        print('Некорректный номер билета')
        return

    first = n[:3]
    second = n[3:6]
    fres = sum(int(i) for i in first)
    sres = sum(int(i) for i in second)

    if fres == sres:
        print('Билет счастливый')
    else:
        print('Билет несчастливый')

# is_lucky(123006)

# I)
# Напишите программу, которая из введенной пользователем строки создаст список. Удалить из этого списка все буквы ‘a’, ‘e’, ‘u’. Строка вводится на английском и символы для удаления так же на английском языке.
def check_str():
    user_input = input('Enter a string: ')
    if not user_input.isascii():
        print('User input contains wrong characters')
        return

    res = []

    for char in user_input:
        if char not in ['a', 'e', 'u']:
            res.append(char) 

    print(res)

# check_str()
# II)
# Напишите программу, которая создаст список на 10 элементов, заполненный целыми числами, введенными с клавиатуры. Удалите все элементы, которые меньше 5 и найдите среднее арифметическое всех оставшихся элементов.

def check_num():
    user_input = input('Enter at least 10 numbers separated by spaces: ')
    nums = [int(num) for num in user_input]
    print(nums)

    if len(nums) < 10:
        print('List is too short')
        return
    
    filtered_nums = [num for num in nums if num >= 5]

    if not filtered_nums:
        print('There are no numbers greater than or equal to 5.')
        return

    average = sum(filtered_nums) / len(filtered_nums)

    print(f'The average of numbers greater than or equal to 5 is: {average}')

# check_num()
# III)
# Напишите программу, которая создаст список на 10 элементов, заполненный целыми числами (положительными и отрицательными), введенными с клавиатуры. Отсортировать список в порядке убывания модулей чисел и вывести его на экран. Также найти произведение элементов кратных 3, имеющих четный индекс.
    
def check_nums():
    user_input = input('Enter 10 numbers: ')
    nums = [int(num) for num in user_input.split()]

    nums.sort(key=abs)

    res = [num for i, num in enumerate(nums) if i % 2 != 0 and num % 3 == 0]
    print(res)

check_nums()

