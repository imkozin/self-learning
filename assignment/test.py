# 1. Написать функцию, которая принимает на вход список целых чисел и возвращает новый список, содержащий только уникальные элементы из исходного списка.

def remove_duplicates(arr):
    res = []
    [res.append(i) for i in arr if i not in res]
    return res

print(remove_duplicates([1, 3, 5, 6, 3, 5, 6, 1]))

# 2. Написать функцию, которая принимает на вход два целых числа (минимум и максимум) и возвращает список всех простых чисел в заданном диапазоне.
def create_array(n1, n2):
    if n1 == n2:
        return n1
    
    res = []
    while (n1 < n2+1):
        res.append(n1)
        n1 += 1

    return res

print(create_array(1, 6))
print(create_array(-1, 2))

# 3. Создать класс Point, который представляет собой точку в двумерном пространстве. Класс должен иметь методы для инициализации координат точки, вычисления расстояния до другой точки, а также для получения и изменения координат.
import math

class Point:
    def __init__(self, x=0, y=0):
        self.x = x
        self.y = y

    def get_x(self):
        return self.x

    def get_y(self):
        return self.y

    def set_x(self, x):
        self.x = x

    def set_y(self, y):
        self.y = y

    def distance_to(self, other_point):
        dx = self.x - other_point.get_x()
        dy = self.y - other_point.get_y()
        distance = math.sqrt(dx ** 2 + dy ** 2)
        return distance

point1 = Point(3, 4)
point2 = Point(6, 8)

print("Координаты точки 1:", point1.get_x(), ",", point1.get_y())
print("Координаты точки 2:", point2.get_x(), ",", point2.get_y())

distance = point1.distance_to(point2)
print("Расстояние между точками:", distance)


# 4. Написать программу, которая сортирует список строк по длине, сначала по возрастанию, а затем по убыванию.
def sorting_strings(arr):
    for i in range(len(arr)):
        for j in range(i+1, len(arr)):
            if len(arr[i]) > len(arr[j]):
                arr[i], arr[j] = arr[j], arr[i]

    res = []
    for s in arr:
        res.append(s)
    print("Список строк по возрастанию длины: ", res)

    rev = []
    for s in reversed(arr):
        rev.append(s)
    print("Список строк по убыванию длины: ", rev)

print(sorting_strings(['Hi', 'World', 'I', 'love', 'Python']))