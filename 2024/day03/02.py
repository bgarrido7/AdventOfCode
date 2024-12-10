multiply = 0

import re

# with open("input.txt", "r") as file:
with open("example.txt", "r") as file:
    for line in file:
        matches = re.findall(r"mul\((\d+),(\d+)\)", line)
        for match in matches:
            multiply += int(match[0]) * int(match[1])

print(multiply)
