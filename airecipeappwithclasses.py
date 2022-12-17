#write a recipe app in python that can create, read, update and delete recipes and uses recipe and user classes 

# Recipe App with Classes

# Recipe Class
class Recipe:
    def __init__(self, name, ingredients, instructions):
        self.name = name
        self.ingredients = ingredients
        self.instructions = instructions

# User Class
class User:
    def __init__(self, name):
        self.name = name
        self.recipes = {}

# App Functions 

# Create a Recipe
def create_recipe(user, name, ingredients, instructions):
    recipe = Recipe(name, ingredients, instructions)
    user.recipes[name] = recipe
    print(f"{name} has been created")

# Read a Recipe
def read_recipe(user, name):
    if name in user.recipes:
        recipe = user.recipes[name]
        print(f"{name} Recipe:")
        print(f"Ingredients: {recipe.ingredients}")
        print(f"Instructions: {recipe.instructions}")
    else:
        print(f"{name} does not exist")

# Update a Recipe
def update_recipe(user, name, ingredients, instructions):
    if name in user.recipes:
        recipe = user.recipes[name]
        recipe.ingredients = ingredients
        recipe.instructions = instructions
        print(f"{name} has been updated")
    else:
        print(f"{name} does not exist")

# Delete a Recipe
def delete_recipe(user, name):
    if name in user.recipes:
        del user.recipes[name]
        print(f"{name} has been deleted")
    else:
        print(f"{name} does not exist")

# Create a User
joe = User("Joe")

# Create a Recipe
create_recipe(joe, "Pizza", ["dough", "cheese", "tomato sauce"], ["Roll out the dough", "Add cheese and tomato sauce", "Bake in oven"])

# Read a Recipe
read_recipe(joe, "Pizza")

# Update a Recipe
update_recipe(joe, "Pizza", ["dough", "mozzarella", "tomato sauce", "oregano"], ["Roll out the dough", "Add mozzarella, tomato sauce and oregano", "Bake in oven"])

# Delete a Recipe
delete_recipe(joe, "Pizza")