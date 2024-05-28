import time
import cv2
import numpy as np
import pyautogui
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager

# Function to perform image recognition and click on image
def find_and_click_image(image_path, threshold=0.5):
    # Find image
    screenshot = pyautogui.screenshot()
    screenshot = cv2.cvtColor(np.array(screenshot), cv2.COLOR_RGB2BGR)
    target_image = cv2.imread(image_path)
    if target_image is None:
        raise FileNotFoundError("The target image file was not found or could not be loaded.")
    result = cv2.matchTemplate(screenshot, target_image, cv2.TM_CCOEFF_NORMED)

    # Get coordinates
    min_val, max_val, min_loc, max_loc = cv2.minMaxLoc(result)
    if max_val >= threshold:
        match_location = max_loc
        match_height, match_width = target_image.shape[:2]
        match_center = (match_location[0] + match_width // 2, match_location[1] + match_height // 2)

        # Click center of image
        pyautogui.moveTo(match_center[0], match_center[1])
        pyautogui.click()
        return True
    return False

def type_string_with_special_char(string):
    for char in string:
        if char == "@":
            pyautogui.keyDown("ctrl")
            pyautogui.keyDown("alt")
            pyautogui.press("2")
            pyautogui.keyUp("ctrl")
            pyautogui.keyUp("alt")
        else:
            pyautogui.press(char)

chrome_options = webdriver.ChromeOptions()
chrome_options.add_argument("--start-maximized")
driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=chrome_options)
driver.get("https://itd-skp.sde.dk/")

time.sleep(1)

image_path = "C:/Users/houge/Documents/GitHub/SOP/login_with_images/images/login_button_image.jpg"
if find_and_click_image(image_path):
    # Feedback
    print("Image found and clicked")

    # Ensure page is loaded
    time.sleep(1)
    
    image_path = "C:/Users/houge/Documents/GitHub/SOP/login_with_images/images/login_username_text_field.jpg"
    if find_and_click_image(image_path):
        # Get username from textfile and write
        with open("C:/Users/houge/Documents/GitHub/SOP/login_with_images/login.txt") as file:
            username = file.readline().strip()
            type_string_with_special_char(username)

        # Feedback
        print("Image found and username written")

        image_path = "C:/Users/houge/Documents/GitHub/SOP/login_with_images/images/login_password_text_field.jpg"
        if find_and_click_image(image_path):
            # Get password from textfile and write
            with open("C:/Users/houge/Documents/GitHub/SOP/login_with_images/login.txt") as file:
                file.readline() # Skip first line
                password = file.readline().strip()
                pyautogui.typewrite(password)

            # Feedback
            print("Image found and password written")

            image_path = "C:/Users/houge/Documents/GitHub/SOP/login_with_images/images/login_button_confirm.jpg"
            if find_and_click_image(image_path):
                # Feedback
                print("Image found and clicked")
                
                # Ensure page is loaded
                time.sleep(1)

                image_path = "C:/Users/houge/Documents/GitHub/SOP/login_with_images/images/check_ind_min_placering.jpg"
                if find_and_click_image(image_path):
                    # Feedback
                    print("Image found and clicked")
                    
                    #Ensure page is loaded
                    time.sleep(1)
                    
                    image_path = "C:/Users/houge/Documents/GitHub/SOP/login_with_images/images/check_ind_zone_8.jpg"
                    if find_and_click_image(image_path):
                        # Feedback
                        print ("Image found and clicked")
                        
                        # Ensure page is loaded
                        time.sleep(2)
                        
                        image_path = "C:/Users/houge/Documents/GitHub/SOP/login_with_images/images/check_ind_confirm.jpg"
                        if find_and_click_image(image_path):
                            # Feedback
                            print("Image found and clicked")

                            time.sleep(30)
                        else:
                            # Feedback
                            print("Image not found")
                    else:
                        # Feedback
                        print("Image not found")
                else:
                    # Feedback
                    print("Image not found")
            else:
                # Feedback
                print("Image not found")
        else:
            # Feedback
            print("Image not found")
    else:
        # Feedback
        print("Image not found")
else:
    # Feedback
    print("Image not found")
    
print("press 'ctrl + c' to end program")

while True:
    time.sleep(1)