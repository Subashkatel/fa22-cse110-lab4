# Explore - Devtools

1. The bug in this website is the code interprets the two numbers as a string instead of an integer (this can be seen when we use the watch feature), does when we do 5 + 3, the code will return 53 instead of 8.
2. Here, since the num1 and num2 is interpreted as a string. To fix it, i will use parseInt() which will convert a string to an int. Thus, the addition will perform as expected.