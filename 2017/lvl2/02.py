f = open ('test.txt', 'r')
array = []
sum = 0

for line in f:
    array.append([int(x) for x in line.split()])

for x in array:
    #print(x)
    sum+=max(x)-min(x)

print(sum)
f.close()
