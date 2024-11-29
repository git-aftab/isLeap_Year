# Write a function to find whether the entered year is a leap year or not

year = int(input("Enter the year:"))

'''if (type(year)!= int):
    print("please Enter a valid year or Number")'''
    
if (year % 4 == 0):
    print(f"{year} is a leap year!")
elif(year % 100 == 0 ):
    print(f"{year} is not a leap year!")
elif(year % 400 == 0):
    print(f"{year} is a leap year!")
else:
    print(f"{year} is not a leap year!")