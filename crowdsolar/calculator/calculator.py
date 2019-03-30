"""
INT
"""
import math
              # max. sun angle 
aroof = 20              # angle roof 
rooflenght = 10 
roofwidth = 5
l =1                    #length of one solarcell
w = 0.5                 #width of one solarcell
day = 95
lon = 51.5
de = -23.45 * math.cos(3.14/180*360*(day+10)/365)

x = math.asin(math.sin(lon/180*3.14)* math.sin(de/180*3.14)+ math.cos(lon/180*3.14)* math.cos(de/180*3.14))/3.14*180
print(x)
"""
MAIN
"""

if aroof > x:
    print('no calculator needed')
else:
    diff = x-aroof
    print('add '+ str(diff) +' ° for perfect alignment - note the shadow')
    d =(l* math.sin(diff* 3.14/180)*math.cos((aroof+x)* 3.14/180))/math.sin((aroof+x)* 3.14/180)
    print('distance between the modules (in m): '+ str(d))



nrooflenght = math.floor(rooflenght/ (l+d))
if ((rooflenght/ (l+d))-math.floor(rooflenght/ (l+d)))*rooflenght >l:
    nrooflenght= nrooflenght+1

nroofwidth = math.floor(roofwidth/ w)

print('nummer of solarcells in length: ' + str(nrooflenght))
print('nummer of solarcells in width: ' + str(nroofwidth))
totalnofs = nrooflenght * nroofwidth
print('total nummer of solarcells on this roof: '+ str(totalnofs))