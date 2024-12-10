multiply = 0

# with open("input.txt", "r") as file:
with open("example.txt", "r") as file:
    for line in file:
        for mul in line.split("mul("):
            for l in mul.split(")"):
                num = l.split(",")
                if len(num) == 2 and num[0].isnumeric() and num[1].isnumeric():
                    multiply += int(num[0]) * int(num[1])


print(multiply)
