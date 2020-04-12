from flask import Flask, request, redirect, url_for, jsonify
from flask_mysqldb import MySQL

app = Flask(__name__)

app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'root'
app.config['MYSQL_DB'] = 'fridge_tracker'

mysql = MySQL(app)

def getJSON(cur):
    data = cur.fetchall()
    row_headers = [x[0] for x in cur.description]  # extract row headers
    json_data = []
    for result in data:
        json_data.append(dict(zip(row_headers, result)))

    cur.close()

    return jsonify(json_data)

@app.route('/')
def hello_world():
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM users")
    return getJSON(cur)

# Create user: POST: /api/users
# Find users: GET: /api/users
@app.route('/api/users', methods=['GET', 'POST'])
def users():
    if (request.method == 'GET'):
        cur = mysql.connection.cursor()
        cur.execute("SELECT * FROM users")
        return getJSON(cur)

    if (request.method == 'POST'):
        user = request.get_json()
        cur = mysql.connection.cursor()
        ins_st = '''INSERT INTO users (username, password) VALUES ('{}', '{}')'''.format(user['username'], user['password'])
        print(ins_st)
        cur.execute(ins_st)

        mysql.connection.commit()
        cur.close()
        return user

# Create ingredient: POST: /api/ingredients
# Get ingredients: GET: /api/ingredients
@app.route('/api/ingredients', methods=['GET', 'POST'])
def ingredients():
    if (request.method == 'GET'):
        cur = mysql.connection.cursor()
        cur.execute("SELECT * FROM ingredients")
        return getJSON(cur)
    if (request.method == 'POST'):
        ingredient = request.get_json()
        cur = mysql.connection.cursor()
        ins_st = '''INSERT INTO ingredients (name, expiration_time_days) VALUES ('{}', '{}')'''\
            .format(ingredient['name'], ingredient['expiration_time_days'])
        print(ins_st)
        cur.execute(ins_st)

        mysql.connection.commit()
        cur.close()
        return ingredient

# Update ingredient: PUT: /api/ingredients/:iid
# Delete ingredient: DELETE: /api/ingredients/:iid
@app.route('/api/ingredients/<iid>', methods=['PUT', 'DELETE'])
def ingredientsId(iid):
    if (request.method == 'DELETE'):
        cur = mysql.connection.cursor()
        ins_st = '''DELETE FROM ingredients WHERE ingredient_id={}'''.format(iid)
        print(ins_st)
        cur.execute(ins_st)
        data = cur.fetchall()

        mysql.connection.commit()
        cur.close()
        return jsonify(data)
    if (request.method == 'PUT'):
        ingredient = request.get_json()
        cur = mysql.connection.cursor()
        ins_st = '''UPDATE ingredients SET name='{}', expiration_time_days={} WHERE ingredient_id={}'''\
            .format(ingredient['name'], ingredient['expiration_time_days'], iid)
        print(ins_st)
        cur.execute(ins_st)
        data = cur.fetchall()

        mysql.connection.commit()
        cur.close()
        return jsonify(data)

# Add ingredient to fridge: POST: /api/users/:username/ingredients
# Get ingredients from fridge: GET: /api/users/:username/ingredients
@app.route('/api/users/<username>/ingredients', methods=['GET', 'POST'])
def fridge(username):
    if (request.method == 'GET'):
        cur = mysql.connection.cursor()
        cur.execute("SELECT * FROM user_ingredients WHERE username='{}'".format(username))
        return getJSON(cur)
    if (request.method == 'POST'):
        ingredient = request.get_json()
        cur = mysql.connection.cursor()
        ins_st = '''INSERT INTO user_ingredients (username, ingredient_id, quantity, expiration_date) 
            VALUES ('{}', {}, {}, '{}')'''\
            .format(username, ingredient['ingredient_id'], ingredient['quantity'], ingredient['expiration_date'])
        print(ins_st)
        cur.execute(ins_st)

        mysql.connection.commit()
        cur.close()
        return ingredient

# Update fridge ingredient: PUT: /api/users/:username/ingredients/:iid
# Delete fridge ingredient: DELETE: /api/users/:username/ingredients/:iid
@app.route('/api/users/<username>/ingredients/<ingredient_id>', methods=['PUT', 'DELETE'])
def fridgeId(username, ingredient_id):
    if (request.method == 'DELETE'):
        cur = mysql.connection.cursor()
        ins_st = '''DELETE FROM user_ingredients WHERE ingredient_id={} and username='{}' '''\
            .format(ingredient_id, username)
        print(ins_st)
        cur.execute(ins_st)
        data = cur.fetchall()

        mysql.connection.commit()
        cur.close()
        return jsonify(data)
    if (request.method == 'PUT'):
        ingredient = request.get_json()
        cur = mysql.connection.cursor()
        ins_st = '''UPDATE user_ingredients SET quantity={}, expiration_date='{}' 
            WHERE ingredient_id={} and username='{}' '''\
            .format(ingredient['quantity'], ingredient['expiration_date'], ingredient_id, username)
        print(ins_st)
        cur.execute(ins_st)
        data = cur.fetchall()

        mysql.connection.commit()
        cur.close()
        return jsonify(data)

# Create recipe: POST: /api/users/:username/recipes
# Get recipes: GET: /api/users/:username/recipes
@app.route('/api/users/<username>/recipes', methods=['GET', 'POST'])
def recipes(username):
    if (request.method == 'GET'):
        cur = mysql.connection.cursor()
        cur.execute("SELECT * FROM recipes WHERE user_id='{}'".format(username))
        return getJSON(cur)
    if (request.method == 'POST'):
        recipe = request.get_json()
        cur = mysql.connection.cursor()
        ins_st = '''INSERT INTO recipes (name, description, preparation_time, user_id) 
            VALUES ('{}', '{}', {}, '{}')'''\
            .format(recipe['name'], recipe['description'], recipe['preparation_time'], username)
        print(ins_st)
        cur.execute(ins_st)

        mysql.connection.commit()
        cur.close()
        return recipe

# Update recipe: PUT: /api/users/:username/recipes/:rid
# Delete recipe: DELETE: /api/users/:username/
@app.route('/api/users/<username>/recipes/<recipe_id>', methods=['PUT', 'DELETE'])
def recipesId(username, recipe_id):
    if (request.method == 'DELETE'):
        cur = mysql.connection.cursor()
        ins_st = '''DELETE FROM recipes WHERE recipe_id={} and user_id='{}' '''\
            .format(recipe_id, username)
        print(ins_st)
        cur.execute(ins_st)
        data = cur.fetchall()

        mysql.connection.commit()
        cur.close()
        return jsonify(data)
    if (request.method == 'PUT'):
        recipe = request.get_json()
        cur = mysql.connection.cursor()
        ins_st = '''UPDATE recipes SET name='{}', description='{}', preparation_time={} 
            WHERE recipe_id={} and user_id='{}' '''\
            .format(recipe['name'], recipe['description'], recipe['preparation_time'], recipe_id, username)
        print(ins_st)
        cur.execute(ins_st)
        data = cur.fetchall()

        mysql.connection.commit()
        cur.close()
        return jsonify(data)

# Add ingredient to recipe: POST: /api/recipes/:rid/ingredients
# Get recipe ingredients: GET: /api/recipes/:rid/ingredients
@app.route('/api/recipes/<recipe_id>/ingredients', methods=['GET', 'POST'])
def recipeIngredients(recipe_id):
    if (request.method == 'GET'):
        cur = mysql.connection.cursor()
        cur.execute("SELECT * FROM recipe_ingredients WHERE recipe_id={}".format(recipe_id))
        return getJSON(cur)
    if (request.method == 'POST'):
        ingredient = request.get_json()
        cur = mysql.connection.cursor()
        ins_st = '''INSERT INTO recipe_ingredients (ingredient_id, recipe_id, amount) 
            VALUES ({}, {}, {})'''\
            .format(ingredient['ingredient_id'], recipe_id, ingredient['amount'])
        print(ins_st)
        cur.execute(ins_st)

        mysql.connection.commit()
        cur.close()
        return ingredient

# Update recipe ingredient: PUT: /api/recipes/:rid/ingredients/:iid
# Delete recipe ingredient: DELETE: /api/recipes/:rid/ingredients/:iid
@app.route('/api/recipes/<recipe_id>/ingredients/<ingredient_id>', methods=['DELETE', 'PUT'])
def recipeIngredientsId(recipe_id, ingredient_id):
    if (request.method == 'DELETE'):
        cur = mysql.connection.cursor()
        ins_st = '''DELETE FROM recipe_ingredients WHERE recipe_id={} and ingredient_id={}'''\
            .format(recipe_id, ingredient_id)
        print(ins_st)
        cur.execute(ins_st)
        data = cur.fetchall()

        mysql.connection.commit()
        cur.close()
        return jsonify(data)
    if (request.method == 'PUT'):
        ingredient = request.get_json()
        cur = mysql.connection.cursor()
        ins_st = '''UPDATE recipe_ingredients SET amount={} WHERE recipe_id={} and ingredient_id={}'''\
            .format(ingredient['amount'], recipe_id, ingredient_id)
        print(ins_st)
        cur.execute(ins_st)
        data = cur.fetchall()

        mysql.connection.commit()
        cur.close()
        return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)