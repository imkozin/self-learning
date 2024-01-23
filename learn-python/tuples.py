x = (12,)

# I)
# Напишите программу, которая создает кортеж на 15 элементов, заполненный квадратами целых чисел от 1 до 15. В качестве результата работы выведите все элементы кортежа в порядке убывания.

def create_tuple():
    lst = []
    for i in range(1, 16):
        lst.append(i)

    res = tuple(sorted(lst, reverse=True))

    print(res)

# create_tuple()
# II)
# Имеется кортеж списков:
letters = (['a', 'b'], ['c', 'd'], ['e', 'f'], ['g', 'h'])
# Напишите программу, которая добавляет символ '!' в начало каждого списка.
def add_excl():
    for lst in letters:
        lst.insert(0, '!')
    print(letters)

# add_excl()
# III)
# Напишите программу, которая создает кортеж из 10 элементов, заполненный натуральными числами, введенными с клавиатуры. На его основе создайте кортеж, в котором будут сначала все элементы, отсортированные в порядке убывания чисел, а затем - в порядке возрастания. Полученный кортеж (в нем должно быть 20 элементов) выведите на экран.

def new_tuple():
    user_input = input('Enter 10 numbers: ')
    nums = [int(i) for i in user_input.split()]

    x = tuple(sorted(nums, reverse=True))
    y = tuple(sorted(nums))

    res = x + y

    print(res)

new_tuple()
