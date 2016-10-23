#Write a program that prints out the numbers 1 to 100 (inclusive).
#If the number is divisible by 3, print Crackle instead of the number. 
#If it's divisible by 5, print Pop. If it's divisible by both 3 and 5, print CracklePop. 


#loop through integers 1-100
for num in range(1,101):
	#calculate remainder to idenitfy integers evenly divisible by both 3 & 5
	if num % 3 == 0 and num % 5 == 0:
		print "CracklePop"
	#calculate remainder to idenitfy integers evenly divisible by 5
	elif num % 5 == 0:
		print "Pop"
	#calculate remainder to idenitfy integers evenly divisible by 3
	elif num % 3 == 0:
		print "Crackle"
	#print all other integers
	else:
		print num

