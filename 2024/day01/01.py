left = []
right = []

with open('input.txt', 'r') as file:
#with open('example.txt', 'r') as file:
    for line in file:
        left.append(int(line.split()[0]))
        right.append(int(line.split()[1]))

left.sort()
right.sort()

total = 0
for i in range(len(right)):
    total += right[i] - left[i]
    
print(total)