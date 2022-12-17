
#import necessary modules
import json
from datetime import datetime

#define the Recipe class
class Recipe:
    #initialize the recipe
    def __init__(self, title, ingredients, instructions):
        self.title = title
        self.ingredients = ingredients
        self.instructions = instructions
        self.created_at = datetime.now()
    
    #create a recipe
    def create(self):
        data = {
            'title': self.title,
            'ingredients': self.ingredients,
            'instructions': self.instructions,
            'created_at': str(self.created_at)
        }
        #open the recipes.json file and write the recipe
        with open('recipes.json', 'w') as f:
            json.dump(data, f)
    
    #read a recipe
    def read(self):
        #open the recipes.json file and read the recipe
        with open('recipes.json', 'r') as f:
            data = json.load(f)
            #return the recipe
            return data
    
    #update a recipe
    def update(self, new_title, new_ingredients, new_instructions):
        #open the recipes.json file and read the recipe
        with open('recipes.json', 'r') as f:
            data = json.load(f)
            #update the recipe
            data['title'] = new_title
            data['ingredients'] = new_ingredients
            data['instructions'] = new_instructions
            #write the updated recipe
            with open('recipes.json', 'w') as f:
                json.dump(data, f)
    
    #delete a recipe
    def delete(self):
        #open the recipes.json file and delete the recipe
        with open('recipes.json', 'w') as f:
            data = {}
            json.dump(data, f)