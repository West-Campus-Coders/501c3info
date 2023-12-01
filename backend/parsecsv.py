import os.path 
import csv

with open(os.path.dirname(__file__) + "/../index_2023.csv", "r") as file:
    reader = csv.reader(file, delimiter=",")
    for row in reader:
        print(row)
