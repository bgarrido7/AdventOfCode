f = open("input.txt", 'r')

steps = 0
i = 0
array = []

for line in f:
    array.append(int(line))

while i < len(array):
   
    steps+=1
    n = array[i]

    if n >= 3:
        array[i]-=1
    else:
        array[i]+=1

    i += n
        
#print(array)    
print(steps)