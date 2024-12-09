f = open('input.txt', 'r')
stop=0

valid = 0
invalid = 0

listoflists = []
word = []
n_lines=0

for line in f:  
    n_lines+=1
    for word in line.split():
        listoflists.append(sorted(word))

    for i in range(len(listoflists)-1):
        
        for j in range(i+1, len(listoflists)):
            #print( listoflists[i], listoflists[j])
            if listoflists[i]==listoflists[j]: 
                
                invalid+=1
                check=1
                stop=1
                break
            else:
                continue
        #print("-----------------end------------------")
        if stop>0:
            break
        
    listoflists = []
    stop=0

print(n_lines - invalid)