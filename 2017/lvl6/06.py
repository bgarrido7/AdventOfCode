f = open("input.txt", 'r')

res=0

array = []
check = []

for line in f:
    for x in line.split():
        array.append(int(x))

while array not in check:

    check.append(list(array))

    res+=1
    m=max(array)
    i = array.index(m)

    #print(array)
    #print "i->", i,"max->", m
    array[i] = 0
    
    index = i+1
    for j in range(m):
        if index >= len(array):
            index=0
        array[index] += 1
        index+=1

print(res)