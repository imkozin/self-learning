# inmutable 
data = (1, 2, 3, 4, True, 'Hello', 5.5)
# data = 9,
# data[0] = 5 - NO


# for el in data:
#     print(el)

# print(data)
# print(len(data))
nums = [6,7,8,9]
new_data = tuple(nums)
word = tuple('Hello')
# print(new_data)
# print(word)

country = {
   'code' : 'IL',
   'name' : 'Israel',
   'population' : 9.5,
    }

# country.pop('name')
# country.popitem()
# print(country.get('name'))
country['code'] = None

# country = dict(code='RU', name='Russia')
# for key, val in country.items():
#     print(key, ' - ', val)

# print(country)

person = {
    'user_1' : {
        'fname' : 'John',
        'lname' : 'Doe',
        'age' : 45,
        'address' : ('New York', '5th Avenue'),
        'grades' : {'math': 'A', 'physics' : 'F'}
    },
    'user_2' : {

    }
}

print(person['user_1']['grades']['physics'])

set_data = {5, 7, 8, 6, 4, 7}
set_data.add(34)
set_data.update(['32', True, 5, 6])
set_data.remove(34)
set_data.pop()
print(set_data) 

nums = [5, 9, 8, 3, 2]

def find_min(lis):
    min_num = lis[0]
    for i in lis:
        if i < min_num:
            min_num = i
    print(min_num)

find_min(nums)

func = lambda x, y: x * y

