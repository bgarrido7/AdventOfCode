s = input()
sum=0
res = [int(x) for x in str(s)]  #place the input number into an array

if res[-1]==res[0]:
    sum=res[0]

for i in range(len(res)): 
    if i+1 < len(res):
        if res[i]==res[i+1] : 
            sum+=res[i]
    

print("sum = ",sum)
