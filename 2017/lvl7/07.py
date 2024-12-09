import re

f = open("input.txt", 'r')
candidates = []
father = []

for content in f:
    child = []
    line = re.split(', |\n| ', content)

    if len(line) > 3:
        father.append(line[0])
        for i in range (3, len(line)-1):
            child.append(line[i])
        candidates.append(list(child))

#print father
not_awnser = []

for check in candidates:
    for test in check:
        if test in father:
            not_awnser.append(test)

#print not_awnser

for test in father:
    if test not in not_awnser:
        print test
