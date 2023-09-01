import math

# a = [1, 3, 8]
# n = a
# n[1] = 'hello'
# print(n)
# print(a)

# b = 2
# c = b
# w = c
# c = 5
# print(b, c, w)

# Number = 0
# number = 1

# s1 = "he\'l\'lo"
# s2 = '''
# fsdfdsf
# fdsfdsf
# fsdfdsf
# '''
# s3 = ''
# print(s1)
# print(type(s2))
# print(id(s3))

# a = 5
# b = 2
# print(a * math.sin(b))

# c = True
# print(type(c))

# a = ' '
# print(bool(a))

# age = input('Your age ')
# print('Your year of birth ', 2023 - int(age))

# x = int(input('Enter a number: '))
# if x > 0:
#     print("Positive number")
# elif x == 0:
#     print('This is 0')
# else:
#     print("Negative number")

# a = True
# b = False

# if a:
#     if b:
#         print(1)
#     else:
#         print(2)
# else:
#     if b:
#         print(3)
#     else:
#         print(4)

# name = input('Enter your name ')
# if name:
#     print(name)
# else:
#     print('Invalid input')

# a= int(input("Enter a number "))
# if (10 < a) and (a < 20):
#     print(a)
# elif a > 10 and a < 100:
#     print(10, 100)

# a = int(input("Enter a number "))
# number = a if a < 20 else 100
# print(number)

# print('1 - Comedy')
# print('2 - Science Fiction')
# print('3 - Horror')
# genre = int(input('Which genre are you interested in? '))
# match genre:
#     case 1 | 2:
#         print('Back to the Future')
#     case 2:
#         print('Interstellar')
#     case 3:
#         print('Jaws')
#     case _:
#         print("dadada")

# x = r = 1
# while x < 10:
#     while r < 10:
#         print(x, '*', r, '=', x*r, end='|')
#         r += 1
#     print()
#     r = 1
#     x += 1

# num = int(input())
# sum = 0
# sum += num % 10
# num //= 10
# print(sum)
# print(num)

# sum of all numbers
# num = int(input())
# sum = 0
# while num:
#     sum += num % 10
#     num //= 10
# print(sum)

# for i in range(10, 1, -2): print(i)

# for x in range(1, 10):
#     for y in range(1, 10):
#         print(x, '*', y, '=', x*y, end='|')
#     print() 

# s = 'Hello'
# for i in enumerate(s, 1):
#     print(i)


# for i in range(1, 10):
#     if i == 7:
#         break
#     print(i)

# s = 'hello'
# for i in s:
#     if i == 'l':
#         continue
#     print(i)

nums = [3, 12, 25, 6]
# for i in nums:
#     print(i)

# def find_sum(list):
#     sum = 0
#     for num in list:
#         if num % 6 == 0:
#             sum += num
#     print(sum)

# find_sum(nums)

# Домашнее задание:
# I)
# Напишите программу, которая, получает на вход три числа. Выведите сумму наибольшего и наименьшего из трёх чисел.


def get_sum():
    n_max = max(21, 55, 72)
    n_min = min(21, 55, 72)
    sum = n_max + n_min
    print(sum)

# get_sum()
    

# II)
# Напишите программу, определяющую является ли введённый пользователем год високосным.

# If the year is evenly divisible by 4, go to step 2. Otherwise, go to step 5.
# If the year is evenly divisible by 100, go to step 3. Otherwise, go to step 4.
# If the year is evenly divisible by 400, go to step 4. Otherwise, go to step 5.
# The year is a leap year (it has 366 days).
# The year is not a leap year (it has 365 days).

def check_year():
    year = int(input("enter a year: "))
    if year % 4 == 0:
        print("This is a leap year")
    else:
        print('This is not a leap year')

#check_year()

# III)
# Напишите программу, которая запрашивает у пользователя месяц его рождения в формате от 1 до 12.
# Необходимо определить и вывести время года.
# Формат вывода (пользователь должен увидеть):
# Вы родились осенью
# или
# Вы родились летом
# или
# Вы родились зимой
# или
# Вы родились весной
# Для решения задания используйте конструкцию match/case.

def check_birth():
    month = int(input())
    match month:
        case 12 | 1 | 2 :
            print('You were born in winter')
        case 3 | 4 | 5 :
            print('You were born in spring')
        case 6 | 7 | 8 :
            print('You were born in summer')
        case 9 | 10 | 11 :
            print('You were born in autumn')
    
# check_birth()

# Напишите программу, которая, получает на вход 2 числа (большее и меньшее). Определить, кратно ли первое число второму. Вывести на экран сообщение об этом, а также остаток от деления, если первое число не кратно второму.

def two_nums():
    num1 = int(input())
    num2 = int(input())
    if num1 % num2 == 0:
        print('ok')
    else:
        print('not ok')

# two_nums()

# Домашнее задание:
# I)
# Напишите программу, которая, получает на вход целое положительное число с клавиатуры. Необходимо вывести все числа от 0 до N (N - Это введенное число), используя цикл while.
def all_nums():
    i = 0
    N = int(input())
    while i < N:
        i += 1
        print(i)

# all_nums()

# II)
# Напишите программу, которая получает на вход целое положительное число с клавиатуры. Необходимо, используя цикл while, вывести количество четных цифр в этом числе и их сумму.

def my_nums():
    num = int(input())
    num_even = 0
    sum_even = 0
    while num > 0:
        if num % 2 == 0:
            num_even += 1
            sum_even += num_even % 10
        num //= 10

    print("Количество четных цифр:", num_even)
    print("Сумма четных цифр:", sum_even)

# my_nums()
# III)
# У пользователя запрашиваются два положительных числа X и R, причем X<R. Необходимо, используя цикл while, вывести на экран все числа из промежутка от X до R и посчитать их количество. При подсчете сами числа X и R включаются в данный промежуток и подсчитываются.

def pos_nums():
    X = int(input())
    R = int(input())
    I = X
    num_count = 0
    while I <= R:
        print(I)
        num_count += 1
        I += 1

    print(f"В промежутке от X до R {num_count} числа")

# pos_nums()

# Пример:
# вход:
# 2
# 4
# Вывод:
# 2
# 3
# 4
# В промежутке от X до R 3 числа

# Домашнее задание:
# I)
# Напишите программу, которая запрашивает число и организовывает следующий вывод:
# Введенное число: X, число меньше на 5: X-5, число большее на 12.5: X+12.5

def five():
    X = int(input())
    print(f'Введенное число: {X}, число меньше на 5: {X-5}, число большее на 12.5: {X+12.5}')

#five()
# II)
# Напишите программу, которая:
# 1)	Запрашивает у пользователя его имя и сохраняет введенное значение в переменную my_name;
# 2)	Запрашивает у пользователя год рождения и сохраняет в переменную year_of_birth;
# 3)	Вычисляет возраст и сохраняет его в переменную с именем age;
# 4)	Выводит на экран тип переменных my_name, year_of_birth, age;
# 5)	Выводит сообщение "Hello my name is: my_name, My age: age".

def user_data():
    my_name = input()
    year_of_birth = int(input())

    age = 2023 - year_of_birth
    print(f"Выводит на экран тип переменных {type(my_name)}, {type(year_of_birth)}, {type(age)}")
    print(f"Hello my name is: {my_name}, My age: {age}")

user_data()

# III)
# Напишите программу, которая, получает на вход число, обозначающее количество минут, которые прошли с начала дня. Необходимо, на основании этого числа, организовать вывод в формате ЧЧ:ММ, которое показывает, сколько времени прошло с начала дня в часах и минутах.



# Домашнее задание:
# I)
# Напишите программу, вычисляющую сумму всех четных чисел от 0 до N (включительно). 
# N - целое число, введенное пользователем.
# Для решения используйте цикл for.



# II)
# Напишите программу, которая выводит числа от 1 до T, где T - это введенное пользователем целое число, которое больше или равно 35.
# Если при выводе будут встречаться числа: 7, 13, 21, 29, то их нужно пропустить.

# Для решения используйте цикл for, условную конструкцию if-elif-else и оператор continue.
# III)
# На вход поступает число N (пользователь вводит его с клавиатуры), используя цикл for необходимо организовать вывод от 1 до N (включительно).
# Если число является четным, то выводим его квадрат (число в степени 2).
# Если число нечетное, то выводим его куб (число в степени 3).

# Пример:
# вход:
# 4
# вывод:
# 1 в степени 3 = 1
# 2 в степени 2 = 4
# 3 в степени 3 = 27
# 4 в степени 2 = 16

