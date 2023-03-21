#this function will create a licence key for jetbrains pycharm  2022.3.1


import random
import string
import time
import datetime as dt

def keygen():
    key = ""
    for i in range(0, 5):
        for j in range(0, 5):
            key += random.choice(string.ascii_uppercase + string.digits)
        key += "-"
    key = key[:-1]
    return key

def main():
    key = keygen()
    print(key)
    with open('key.txt', 'a') as f:
        f.write(key + '\n')
        f.close()
    print("Done")

if __name__ == "__main__":
    main()
    time.sleep(1)
    print("Your key will be generated in 5 seconds")
    time.sleep(5)
    main()
    time.sleep(1)
    print("Your key will be generated in 5 seconds")
    time.sleep(5)
    main()




