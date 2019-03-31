"""
INT
"""

costpm = 333.33 # cost per module in €
n = 18 #nummer of modules
cfi = 1000 #costs for instalation
np = 230 #norminal power

sh = 1600 # Sunny Hours / Year
flh = 0.5 #Proportion of full load hours
pp = 0.3 # Power Price per kWh

"""
calculation
"""
cost = n * costpm +cfi #costs
av = sh * np *n * flh /1000 #average output of the panels kWh
sm = av * pp

ym = 100 #Yearly Maintanance in €
of = 0.05 #Our Fee
ir =0.5 #Investors Return
ic = 0.05 #Insurance Cost
ps =  (sm -ym) - sm* (1-(of+ir+ic)) # Annual Power Savings for Landloard

print(cost)
print(av)
print(sm)
print(ps)

n = 20
for i in range(1, n+1):
 ire =i * ir *sm  #Investors Return in €
 print(i)
 print(ire) 
