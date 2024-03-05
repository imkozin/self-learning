def factorial(n: int):
    assert n >= 0, 'Факториал отрицательного не определен'
    if n <= 1:
        return 1
    return factorial(n-1) * n

# # Print factorial for numbers from 0 to 10
# for i in range(11):
#     print(f"Factorial of {i} is {factorial(i)}")


print(factorial(6))


def gcd(a: int, b: int):
    if a == b:
        return a
    elif a > b:
        return gcd(a - b, b)
    else:
        return gcd(a, b - a)
    
print(gcd(20, 10))


def euclide(a,b):
    # if b == 0:
    #     return a
    # else:
    #     return euclide(b, a%b)
    
    return a if b == 0 else gcd(b, a%b)


print(euclide(10, 20))

def pow(a: float, n: int):
    if n == 0:
        return 1
    elif n % 2 == 1:
        return pow(a, n - 1) * a
    else:
        return pow(a ** 2, n // 2)

    
print(pow(2, 100))

def hanoi(n, source, destination, auxiliary):
    if n == 1:
        print(f"Move disk from {source} to {destination}")
        return
    hanoi(n - 1, source, auxiliary, destination)
    print(f"Move disk from {source} to {destination}")
    hanoi(n - 1, auxiliary, destination, source)

# Example usage:
n = 4  # Number of disks
source = "A"
destination = "C"
auxiliary = "B"
hanoi(n, source, destination, auxiliary)
