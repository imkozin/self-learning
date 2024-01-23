# d = {
#     1: 'one',
#     2: 'two'
# }

# lst = [[1, 2], [3, 4]]
# s = ('ab', 'cd')
# d1 = dict(lst)
# d2 = dict(s)
# print(d1)
# print(d2)

# d = {i: i** 2 for i in range(1, 10)}

# s = 'hello world'
# d = {i: s.count(i) for i in set(s)}

# s1 = [1, 2, 3, 4]
# s2 = ['one', 'two', 'three', 'four']
# d = dict(zip(s1, s2))

# d = dict.fromkeys(['a', 'b', 'c', 'd'], 1000)

# d = {
#     'name': 'John',
#     'age': 17,
#     'city': 'New York'
# }
# if 'name' in d:
#     print(d['name'])

# d['name'] = 'Ivan'
# print(d)

# I)
# Создать Русско-Английский словарь, который содержит 10 слов с переводом. В качестве ключа используются русские слова.
# Например:
# "кот" : "cat"
# "мышь" : "mouse"
# "собака" : "dog"
# "животные": "animals"
# Остальное дополнить самостоятельно

# Пользователь вводит русское слово, необходимо найти в словаре его перевод и вывести на экран. Вывод должен иметь вид:

# Слово ХХХХХХ переводится как: YYYYYY.

def find_word():
    my_dict = {
        "кот" : "cat",
        "мышь" : "mouse",
        "собака" : "dog",
        "животные": "animals",
        "город": "city"
    }

    user_input = input('Enter a word: ')
    if user_input in my_dict:
        print(f'Слово {user_input} переводится как: {my_dict[user_input]}.')
    else:
        print('Такого слова нет в словаре.')

# find_word()
# II)
# Создать словарь, в котором в качестве ключа содержится номер студенческого билета
# (номер билета трехзначный т.е. от 0 до 999),
# а в качестве значения содержится строка с именем и фамилией.
# Заполняется словарь вводом с клавиатуры, номер билета генерируется случайно,
# но проверяется, чтобы он не использовался в словаре.
# Заполнить словарь 10 элементами
import random
students = dict()

def create_student():

    while len(students) < 10:
        name = input('Enter student name: ')
        key = random.randint(100, 999)

        if key not in students:
            students[key] = name
            print(students)
        else:
            key = random.randint(100, 999)
            students[key] = name
            print(students)

create_student()
