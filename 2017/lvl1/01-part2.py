s = input()
sum = 0
res = [int(x) for x in str(s)]  #place the input number into an array


jump = int(len(res) / 2)

for i in range(len(res)): 
   
    if i+jump < len(res):
        if res[i]==res[i+jump] : 
            sum+=res[i]
    else :
        new_jump = (jump+i)-len(res)
        if res[i]==res[new_jump] :
            sum+=res[i]


print("sum = ",sum)

