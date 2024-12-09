left = []
right = []

with open('input.txt', 'r') as file:
#with open('example.txt', 'r') as file:
    for line in file:
        left.append(int(line.split()[0]))
        right.append(int(line.split()[1]))

total = 0
for i in range(len(right)):
    num = left[i]
    times = right.count(num)
    total += num * times 
    
print(total)