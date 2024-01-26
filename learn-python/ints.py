def find_num():
    flat_num = int(input('Enter flat number: '))

    entrance_num = (flat_num - 1) // 20 + 1
    print(entrance_num)
    floor_num = (flat_num - 1) % 20 // 4 + 1
    print(floor_num)

# find_num()
    
def find_year():
    year = int(input('Enter a year: '))
    if year % 4 == 0 and year % 100 != 0:
        print('Year is leap')
    elif year % 400 == 0:
        print('Year is leap')
    else:
        print('Year is not leap')

# find_year()
        
def get_num():
    base = 7
    x = int(input('Enter a number: '))
    while x > 0:
        digit = x % base
        print(digit, end='')
        x //= base

get_num()