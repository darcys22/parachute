from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

import json
import random

# startx = 200
# starty = 200
# startz = 500
# windspeed = 30
# winddirection = 160
print("----Start----")
startx = random.randint(1, 3000)
print("Starting X: {} ".format(startx))
starty = random.randint(1, 3000)
print("Starting Y: {} ".format(starty))
startz = random.randint(1, 3000)
print("Starting Z: {} ".format(startz))
windspeed= random.randint(1, 50)
print("Starting Windspeed: {} ".format(windspeed))
winddirection= random.randint(1, 360)
print("Starting Wind Direction: {} ".format(winddirection))


url = 'http://localhost:8080/?windSpeed={}&windDirection={}&height={}&startx={}&starty={}'.format(windspeed,winddirection,startz,startx,starty)

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






# Open URL in new browser window
# import webbrowser
# webbrowser.open_new(url) # opens in default browser
