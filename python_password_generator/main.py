import json

from classes import *
import data_models
from data_models import *

site = input("Enter the site of the login: ")

username = input("Enter a username for login: ")

length = input("Enter the length of your password for login: ")
length_int = int(length)
password = generate_password(length_int)

login = Login(site, username, password)

file_path = "python_password_generator/password.json"

try:
    with open(file_path, "r") as file:
        data = json.load(file)
        if isinstance(data, dict):
            if "logins" not in data:
                data["logins"] = []
            data["logins"].append(login.to_dict())
        elif isinstance(data, list):
            data.append(login.to_dict())
        else:
            data = [login.to_dict()]
except FileNotFoundError:
    data = [login.to_dict()]


with open(file_path, "w") as file:
    json.dump(data, file, indent=4)
    
print(f"Data has been written to file: {file_path}")