b = 10

def my_f():
    b = 111
    print(b)

    def in_f():
        global b # nonlocal b
        b = 333
        print(b)

    in_f()
    print(b)

print(b)
my_f()
print(b)