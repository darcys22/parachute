from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

import json
import random

from unpacked import x1

class Game:
    def __init__(self, ready=None, rdm=False):

        self.ready = ready

        self.startx = 200
        self.starty = 200
        self.startz = 500
        self.windspeed = 30
        self.winddirection = 160
        self.paradirection = 90
        self.directions = x1
        self.results = {}
        # self.packed ="555555555555555555555555555555555555599555555555555555555555555555555555555555555555555555556aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa5555555555555555555555555555555555555555556aaaa0123456789abcdfb2aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa8"

        if rdm:
            self.startx = random.randint(1, 3000)
            self.starty = random.randint(1, 3000)
            self.startz = random.randint(1, 3000)
            self.windspeed= random.randint(1, 50)
            self.winddirection= random.randint(1, 360)

    def pack(self, obj):
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

    def get_startx(self):
        return self.startx
    def get_starty(self):
        return self.starty
    def get_startz(self):
        return self.startz
    def get_windspeed(self):
        return self.windspeed
    def get_winddirection(self):
        return self.winddirection
    def get_paradirection(self):
        return self.paradirection
    def get_directions(self):
        return self.directions
    def get_results(self):
        return self.results
    def set_directions(self,directions):
        self.directions = directions

    def get_input_to_algo(self):
        return [self.startx,self.starty,self.startz,self.paradirection,self.windspeed,self.winddirection]

    def launch(self):
        print("----Start----")
        print("Starting X: {} ".format(self.startx))
        print("Starting Y: {} ".format(self.starty))
        print("Starting Z: {} ".format(self.startz))
        print("Starting Windspeed: {} ".format(self.windspeed))
        print("Starting Wind Direction: {} ".format(self.winddirection))



        url = 'http://localhost:8080/?windSpeed={}&windDirection={}&height={}&startx={}&starty={}&d=\'{}\''.format(self.windspeed,self.winddirection,self.startz,self.startx,self.starty,self.pack(self.directions))

        driver = webdriver.Firefox()
        driver.get(url)


        try:
            element = WebDriverWait(driver, 250).until(
                EC.presence_of_element_located((By.ID, "results"))
            )
        finally:
            self.results= json.loads(driver.find_element_by_id("results").text)
            if(self.ready):
                self.ready.set()
            driver.quit()





