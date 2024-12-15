calib = []


def checkOperator(result, numbers) -> bool:
    if sum(numbers) == result:
        return True

    res = 1
    for val in numbers:
        res = val * res

    if res == result:
        return True

    return False


# with open("input.txt", "r") as file:
with open("example.txt", "r") as file:
    for line in file:
        result = int(line.split(": ")[0])
        numbers = list(map(int, line.split(": ")[1].split(" ")))
        if checkOperator(result, numbers):
            calib.append(result)


print(sum(calib))
