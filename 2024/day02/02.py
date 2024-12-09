levels = []
safe = 0

#with open('input.txt', 'r') as file:
with open('example.txt', 'r') as file:
    for report in file:
        levels = report.split()
        levels = list(map(int, levels))
        print((levels))


    
#print(safe)