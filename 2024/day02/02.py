safe = 0

def isSorted(array) -> bool:
    return sorted(array) == array or sorted(array, reverse=True) == array
  
def isDiffer(array) -> bool:    
    for i in range(len(array)-1):
        differ = abs(array[i] - array[i+1]) 
        if(differ>3 or differ<1):
            return False
    return True
       
def secondChance(array) -> bool:
    for i in range(len(array)):
        temp=array.copy()
        temp.pop(i)
        if isSorted(temp) and isDiffer(temp):
            return True
    return False
        
with open('input.txt', 'r') as file:
#with open('example.txt', 'r') as file:
    for report in file:
        levels = list(map(int, report.split()))
    
        if isSorted(levels) and isDiffer(levels):
           safe+=1
        elif secondChance(levels):
            safe+=1
            
print(safe)