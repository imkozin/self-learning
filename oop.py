# class Cat:
#     def __init__(self, name, age, is_happy):
#         self.name = name
#         self.age = age
#         self.is_happy = is_happy
        
#     def get_data(self):
#         print(self.name, 'age:', self.age, 'Happy:', self.is_happy)

# cat1 = Cat('Barsik', 3, True)
# cat1.get_data()

# cat1.name = 'Barsik'
# cat1.age = 3
# cat1.is_happy = True

# cat2 = Cat('Pushin', 2, False)
# cat2.get_data()
# cat2.name = 'Pushin'
# cat2.age = 2
# cat2.is_happy = False

# print(cat1.name)
# print(cat2.name)

class Building:
    def __init__(self, year = None, city = None):
        self.year = year
        self.city = city

    def get_info(self):
        print(self.city, self.year)

class School(Building):
    def __init__(self, year=None, city=None):
        super().__init__(year, city)


school = School(2000, 'Haifa')