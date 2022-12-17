import datetime

class Inventory: 
    def __init__(self, name, quantity, price, date_added=datetime.date.today()): 
        self.name = name 
        self.quantity = quantity 
        self.price = price 
        self.date_added = date_added
    
    def add_inventory(self, quantity): 
        self.quantity += quantity 

    def remove_inventory(self, quantity): 
        self.quantity -= quantity
    
    def get_inventory(self): 
        return self.name, self.quantity, self.price, self.date_added
    
    def update_price(self, new_price): 
        self.price = new_price

inventory_list = []

def add_to_inventory(name, quantity, price):
    new_inventory = Inventory(name, quantity, price)
    inventory_list.append(new_inventory)

def remove_from_inventory(name, quantity): 
    for inventory in inventory_list:
        if inventory.name == name:
            inventory.remove_inventory(quantity)

def get_inventory():
    for inventory in inventory_list:
        print(inventory.get_inventory())

def update_price(name, new_price): 
    for inventory in inventory_list:
        if inventory.name == name:
            inventory.update_price(new_price)
