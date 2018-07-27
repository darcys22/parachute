from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

import json
import random

from unpacked import x1

def pack(obj):
    mainbytesArray = []
    if (len(obj) % 2):
        obj.append([False,False])
    byte = 0
    for i in range(0,len(obj)):
        if (i%2 ==0 and i>0):
            mainbytesArray.append(format(byte,'x'));
            byte = 0;

        byte = byte << 2;
        if(obj[i][0] and obj[i][1]):
            byte += 3
        if(obj[i][0] and not(obj[i][1])):
            byte += 2;
        if(not(obj[i][0]) and obj[i][1]):
            byte += 1;
    mainbytesArray.append(format(byte,'x'));
    return ''.join(mainbytesArray)

# packed ="555555555555555555555555555555555555599555555555555555555555555555555555555555555555555555556aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa5555555555555555555555555555555555555555556aaaa0123456789abcdfb2aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa8"

startx = 200
starty = 200
startz = 500
windspeed = 30
winddirection = 160

# startx = random.randint(1, 3000)
# starty = random.randint(1, 3000)
# startz = random.randint(1, 3000)
# windspeed= random.randint(1, 50)
# winddirection= random.randint(1, 360)

print("----Start----")
print("Starting X: {} ".format(startx))
print("Starting Y: {} ".format(starty))
print("Starting Z: {} ".format(startz))
print("Starting Windspeed: {} ".format(windspeed))
print("Starting Wind Direction: {} ".format(winddirection))



url = 'http://localhost:8080/?windSpeed={}&windDirection={}&height={}&startx={}&starty={}&d=\'{}\''.format(windspeed,winddirection,startz,startx,starty,pack(x1))

driver = webdriver.Firefox()
driver.get(url)


try:
    element = WebDriverWait(driver, 250).until(
        EC.presence_of_element_located((By.ID, "results"))
    )
finally:
    datastore = json.loads(driver.find_element_by_id("results").text)
    print(datastore)
    driver.quit()





