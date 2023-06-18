# 1. Формирование таблицы смещений происходит с конца строки

# 543210
# данные
# 542216 
# начинается с предпоследнего символа
# --> 22 для повторяющихся символов 'н'
# 6 --> если символ не встречался в строке, то соответствует кол-ву символов в образе и этим номером определяется длина строки 

# 43210
# зорро
# 43113
# 3 --> смещение определяется ранее встреченным символом

# 543210
# данные* --> условное обозначение * все остальные символы
# 5422166 --> смещения

# для всех остальных символов/смещений, которые не входят в образ, смещение определяется тоже 6 в данном случае

# 543210
# даные*
# 542166 

# 2. поиск образа в строке

# большие метеоданные
# данные

# согласно алгоритму начинаем поиск с последнего символа в образе и сравниваем его с соответствующим символом в строке
# 'и' не совпадает с 'е', а также не встречается среди предыдущих символов образа
# делаем следующее смещение на 6 символов и снова сравниваем последние символы 


# большие метеоданные
# ______данные
# е = е, 
# делаем ещё смещение на один символ влево ы != т 
# если несовпадение не для последнего символа, а для любого другого, то следует брать символ из образа
# в данном случае символ буквы и смещение = 1, смещаем образ на 1
# большие метеоданные
# _______данные

# последние символы снова не совпадают о != е, а также не встречается среди предыдущих символов образа, делаем смещение снова на 6 символов
# большие метеоданные
# _____________данные

# образы совпали

# самый медленный вариант использования алгоритма, если строка состоит из n кол-ва одинаковых символов "ааааааа"
# образ состоит из одинаковых символов кроме одной буквы, например ",бааааааа"

# самый быстрый вариант, если символы в образе не совпадают с символами в строке
# "ааааааа" и "ббббббб"

t = 'data'

# Этап 1: формирование таблицы смещений

S = set()  # уникальные символы в образе
M = len(t) # число символов в образе
d = {}     # словарь смещений

# в интервале от предпоследнего символа до 1
# -1 не включается в интервал, поэтому включительно 
# -1 по убыванию
for i in range(M-2, -1, -1): # итерации с предпоследнего символа
    if t[i] not in S:        # если символ еще не добавлен в таблицу
        d[t[i]] = M-i-1      # добавляем в словарь как key и прописываем текущее смещение
        S.add(t[i])          # добавляем в set как уникальный

if t[M-1] not in S: # отдельно формируем смещения для последнего символа
    d[t[M-1]] = M # указываем смещение равное длине образа

d['*'] = M # смещения для прочих символов

print(d)

# Этап 2: поиск образа в строке
a = 'big meteodata'
N = len(a)

if N >= M: # запускается поиск
    i = M-1 # счётчик проверяемого символа в строке

    while(i < N):
        k = 0 # охватывает все предыдущие символы
        j = 0 # счётчик проверяемого символа в образе
        flBreak = False
        for j in range(M-1, -1, -1): # сравниваем попарно с конца
            if a[i-k] != t[j]: # i-k предыдущие символы относительно i
                if j == M-1:
                    off = d[a[i]] if d.get(a[i], False) else d['*'] # смещение, если не равен последний символ образа
                else:
                    off = d[t[j]]   # смещение, если не равен не последний символ образа

                i += off    # смещение счетчика строки
                flBreak = True  # если несовпадение символа, то flBreak = True
                break

            k += 1          # смещение для сравниваемого символа в строке

        if not flBreak:          # если дошли до начала образа, значит, все его символы совпали
            print(f"образ найден по индексу {i-k+1}")
            break
    else:
        print("образ не найден")
else:
    print("образ не найден")
