# def func(x, y):
#     return x * y, x + y

# res1, res2 = func(2, 8)
# print(res1, res2)

# def func(x):
#     def func2():
#         print(x)
    
#     return func2

# x = func(3)
# x()

# def func(*args, **kwargs):
#     pass

# def func(x, y):
#     print(x, y)

# pairs = [(1, 2), (3, 4)]
# for pair in pairs:
#     func(*pair)

# x = [1, 28, 21321, 423543, 5345435]
# print(x)
# print(*x)

def func(*args, **kwargs):
    print(*args)

func(1,2,3,4,5, one=0, two=0)


try:
    x = 7 / 0
    print(x)
except Exception as e:
    print(e)
finally:
    print("finally")

 
x = [1,2,3,5,7456,32,32,876,12]

mp = map(lambda i: i * 2, x)
print(list(mp))

filt = filter(lambda i: i % 2 == 0, x)
print(list(filt))