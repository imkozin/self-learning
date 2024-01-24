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

d = {
    'name': 'John',
    'age': 17,
    'city': 'New York'
}

# d1 = {
#     1: 'one',
#     2: 'two'
# }
# l = d.pop('age')
# a = d.popitem()
# d.clear()
# d.get('age')
# d_copy = d.copy()
# d.setdefault(78, 'hello')
# d.update(d1)
# for i in d.keys():
#     print(i)

# for i in d.values():
#     print(i)

# for i in d.items():
#     print(i)

# print(dict(sorted(d.items())))
# if 'name' in d:
#     print(d['name'])

# d['name'] = 'Ivan'
# print(list(d.keys()))

tel = {
    'Ivanov Ivan': {
        'phone': 123456789,
        'city': 'Moscow'
    },
    'Petrov Petr': {
        'phone': 987654321,
        'city': 'St. Petersburg'
    }
}

# print(tel['Petrov Petr']['city'])

for i in tel.keys():
    for x,y in tel[i].items():
        print(x, y)
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

my_dict = {
    "кот" : "cat",
    "мышь" : "mouse",
    "собака" : "dog",
    "животные": "animals",
    "город": "city"
}

def find_word():

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
            print('check')
            key = random.randint(100, 999)
            students[key] = name
            print(students)

# create_student()
            
# I)
# Создайте русско-английский словарь, который содержит 10 слов с переводом. На основе этого словаря, сделайте так, чтобы пользователь мог добавить 5 слов с переводом, вводом с клавиатуры. То есть, при запуске программы, она запрашивала бы сначала русское слово, а затем перевод и добавляла этот элемент в словарь.
def create_dict():

    while len(my_dict) < 10:
        rus_word = input('Enter word in Ru: ')
        eng_word = input('Enter word in En: ')

        new_word = {
            rus_word: eng_word
        }

        my_dict.update(new_word)

    print(my_dict)

# create_dict()

# II)
# Используя словарь из 1 задания, необходимо с помощью методов keys() и values() выбрать и вывести ключи, длина которых меньше 6 символов. После чего, вывести все значения ключей, длина которых больше 5 символов.

def read_dict():
    # for key in my_dict.keys():
    #     if len(key) < 6:
    #         print('Key with length less than 6:', key)
    #     elif len(key) > 5:
    #         value = my_dict[key]
    #         print('Value for key with length more than 5:', value)
    for key, value in zip(my_dict.keys(), my_dict.values()):
        if len(key) < 6:
            print('Key with length less than 6:', key)
        if len(value) > 5:
            print('Value with length more than 5:', value)

read_dict()