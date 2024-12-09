f = open("input.txt", 'r')

steps = 0
i = 0
array = []

for line in f:
    array.append(int(line))

while(True):
    #print "i->", i, "array->", array[i]
    steps+=1
    if array[i] == 0:
        array[i]+=1
        

    else:
        n = array[i]
        array[i]+=1
        i += n
        if i == len(array) :
            break

    
print(steps)