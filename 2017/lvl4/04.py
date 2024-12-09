f = open('input.txt', 'r')

n_words = 0
check=0
valid = 0
invalid = 0
not_valid=0
word = []

for line in f:  
    
    for word in line.split():
        n_words += 1
        if (word in line) and (line.count(word) > 1):
            check+=1
        
    if check > 1:
        invalid+=1
        not_valid=1

    if not_valid == 0:
        valid += 1

    check=0
    n_words=0
    not_valid=0

print "valid =", valid, "\t not valid =", invalid
            
    