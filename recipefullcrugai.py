from flask import Flask, request, flash, url_for, redirect, render_template
from flask_sqlalchemy import SQLAlchemy

# Define the Flask app
app = Flask(__name__)

# Configure the SQLAlchemy 
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///recipes.sqlite3'
app.config['SECRET_KEY'] = "random string"

# Create the SQLAlchemy object
db = SQLAlchemy(app)

# Define the User class
class User(db.Model):
    id = db.Column('user_id', db.Integer, primary_key=True)
    name = db.Column(db.String(100))
    email = db.Column(db.String(50))
    password = db.Column(db.String(50))

# Define the Recipe class
class Recipe(db.Model):
    id = db.Column('recipe_id', db.Integer, primary_key=True)
    title = db.Column(db.String(100))
    ingredients = db.Column(db.String(5000))
    instructions = db.Column(db.String(5000))
    user_id = db.Column(db.Integer, db.ForeignKey('user.user_id'))

# Create the routes
@app.route('/')
def home():
    return render_template('home.html')

@app.route('/recipes/list')
def list_recipes():
    return render_template('list_recipes.html', recipes = Recipe.query.all())

@app.route('/recipes/create', methods=['GET', 'POST'])
def create_recipe():
    if request.method == 'POST':
        if not request.form['title'] or not request.form['ingredients'] or not request.form['instructions']:
            flash('Please enter all the fields', 'error')
        else:
            recipe = Recipe(title=request.form['title'],
                            ingredients=request.form['ingredients'],
                            instructions=request.form['instructions'])
            
            db.session.add(recipe)
            db.session.commit()
            flash('Record was successfully added')
            return redirect(url_for('list_recipes'))
    return render_template('create_recipe.html')

@app.route('/recipes/<int:id>', methods=['GET', 'POST'])
def update_recipe(id):
    recipe = Recipe.query.get(id)
    if request.method == 'POST':
        if not request.form['title'] or not request.form['ingredients'] or not request.form['instructions']:
            flash('Please enter all the fields', 'error')
        else:
            recipe.title = request.form['title']
            recipe.ingredients = request.form['ingredients']
            recipe.instructions = request.form['instructions']
            
            db.session.commit()
            flash('Record was successfully updated')
            return redirect(url_for('list_recipes'))
    return render_template('update_recipe.html', recipe=recipe)

@app.route('/recipes/delete/<int:id>', methods=['POST','GET'])
def delete_recipe(id):
    recipe = Recipe.query.get(id)
    db.session.delete(recipe)
    db.session.commit()
    flash('Record was successfully deleted')
    return redirect(url_for('list_recipes'))

# Start the server
if __name__ == '__main__':
    db.create_all()
    app.run(debug=True)