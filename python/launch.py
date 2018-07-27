from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

import json

url = 'http://localhost:8080'

driver = webdriver.Firefox()
driver.get(url)


try:
    element = WebDriverWait(driver, 20).until(
        EC.presence_of_element_located((By.ID, "results"))
    )
finally:
    datastore = json.loads(driver.find_element_by_id("results").text)
    print(datastore)
    driver.quit()






# Open URL in new browser window
# import webbrowser
# webbrowser.open_new(url) # opens in default browser
