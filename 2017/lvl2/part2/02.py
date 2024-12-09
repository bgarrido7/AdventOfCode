f = open ('input.txt', 'r')
array = []
sum=0
for line in f:
    array.append([int(x) for x in line.split()])


for x in array:

    for i in range(len(x)-1):
        for j in range(i+1, len(x)):
            if max(x[i], x[j]) % min(x[i], x[j]) == 0:
                #print(max(x[i], x[j]) / min(x[i], x[j]))
                sum+=max(x[i], x[j]) / min(x[i], x[j])
   

print(sum)
f.close()