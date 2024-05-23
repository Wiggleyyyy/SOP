class Login:
    def __init__(self, site, username, password):
        self.site = site
        self.username = username
        self.password = password
        
    def to_dict(self):
        return {
            "site": self.site,
            "username": self.username,
            "password": self.password
        }