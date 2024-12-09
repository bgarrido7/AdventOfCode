import sys

n = input()
i = 1

if n==i:    #in center
    print(0)
    sys.exit()

def get_num(start, finish, n_lines):
    for x in range(start, finish, -1):     
        if x==n:
            middle = start - n_lines #number align with 1
            step = abs(n - middle)
            print(step + n_lines)
            sys.exit()

while(1):
    i+=2
    row = i*i
    
    #corners
    if (row == n) or (n==row-i-1) or (n==row-(i-1)*2) or (n==row-(i-1)*3):   
        print(i-1)  
        sys.exit()

    elif row > n: 
        end = row-i+1
        lines = (i-1)/2

        #botom line
        get_num(row, end, lines)

        #left line
        get_num(end, end-i+1, lines)

        #top line
        get_num(end-i+1, row-i*2-2, lines)
        
         #right line
        get_num(row-i*2-2, row-i*3, lines)
