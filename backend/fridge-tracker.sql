DROP DATABASE IF EXISTS fridge_tracker;
CREATE DATABASE IF NOT EXISTS fridge_tracker;
USE fridge_tracker;

CREATE TABLE IF NOT EXISTS users (
	username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    PRIMARY KEY (username)
);

CREATE TABLE IF NOT EXISTS ingredients (
	ingredient_id INT AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    expiration_time_days INT NOT NULL,
    PRIMARY KEY (ingredient_id)
);

CREATE TABLE IF NOT EXISTS user_ingredients (
	username VARCHAR(255) NOT NULL,
    ingredient_id INT NOT NULL,
    quantity INT NOT NULL,
    expiration_date DATE NOT NULL,
    PRIMARY KEY (username, ingredient_id),
    CONSTRAINT username_fk FOREIGN KEY (username) REFERENCES users (username)
		ON DELETE CASCADE
        ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS recipes (
	recipe_id INT AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    description VARCHAR(255),
    preparation_time INT,
    user_id VARCHAR(255) NOT NULL,
    PRIMARY KEY (recipe_id),
    CONSTRAINT user_fk FOREIGN KEY (user_id) REFERENCES users (username)
		ON DELETE CASCADE
        ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS recipe_ingredients (
	ingredient_id INT NOT NULL,
    recipe_id INT NOT NULL,
    amount INT NOT NULL,
    PRIMARY KEY (ingredient_id, recipe_id),
    CONSTRAINT ingredient_fk FOREIGN KEY (ingredient_id) REFERENCES ingredients (ingredient_id)
		ON DELETE CASCADE
        ON UPDATE CASCADE,
	CONSTRAINT recipe_fk FOREIGN KEY (recipe_id) REFERENCES recipes (recipe_id)
		ON DELETE CASCADE
        ON UPDATE CASCADE
);

INSERT INTO users (username, password) VALUES 
	('clairesaffitz', 'downwithbrad'),
	('bradleone', 'bradrocks23'),
	('mollybaz', 'password123'),
	('andybaraghani', 'andyspassword'),
	('stanleyliu', 'password'),
	('milesbarker', 'password1');

INSERT INTO ingredients (ingredient_id, name, expiration_time_days) VALUES
	(1, 'olive oil', 1095),
    (2, 'butter', 180),
    (3, 'pasta', 730),
    (4, 'parsley', 7),
    (5, 'lemon', 21),
    (6, 'red chili flakes', 730),
    (7, 'garlic', 21),
    (8, 'salt', 1825),
    (9, 'black pepper', 1095),
    (10, 'rice', 1460),
    (11, 'vegetable oil', 365),
    (12, 'peas', 7),
    (13, 'green onion', 7);
    
INSERT INTO user_ingredients (username, ingredient_id, quantity, expiration_date) VALUES
	('stanleyliu', 2, 4, '2020-04-22'),
    ('stanleyliu', 3, 2, '2022-02-02'),
    ('stanleyliu', 1, 100, '2025-01-01'),
    ('stanleyliu', 4, 1, '2020-04-20'),
    ('stanleyliu', 5, 2, '2020-04-30'),
    ('stanleyliu', 6, 100, '2022-02-02'),
    ('stanleyliu', 7, 5, '2022-04-27'),
    ('stanleyliu', 8, 100, '2026-02-03'),
    ('stanleyliu', 9, 100, '2025-12-31'),
    ('milesbarker', 1, 100, '2025-01-01'),
    ('milesbarker', 6, 100, '2022-02-02'),
    ('milesbarker', 7, 5, '2022-04-27'),
    ('milesbarker', 8, 100, '2026-02-03'),
    ('milesbarker', 9, 100, '2025-12-31'),
    ('clairesaffitz', 2, 4, '2020-04-22'),
    ('clairesaffitz', 3, 2, '2022-02-02'),
    ('clairesaffitz', 1, 100, '2025-01-01'),
    ('clairesaffitz', 4, 1, '2020-04-20'),
    ('clairesaffitz', 5, 2, '2020-04-30'),
    ('clairesaffitz', 6, 100, '2022-02-02'),
    ('clairesaffitz', 7, 5, '2022-04-27'),
    ('clairesaffitz', 8, 100, '2026-02-03'),
    ('clairesaffitz', 9, 100, '2025-12-31'),
    ('mollybaz', 10, 100, '2030-02-02'),
    ('mollybaz', 11, 100, '2021-02-04'),
    ('mollybaz', 12, 4, '2020-04-21'),
    ('mollybaz', 13, 4, '2020-04-21'),
    ('bradleone', 10, 100, '2030-02-02');

INSERT INTO recipes (recipe_id, name, description, preparation_time, user_id) VALUES
	(1, 'pasta aglio e olio', 'simple pasta dish', 20, 'stanleyliu'),
	(2, 'pasta aglio e olio', 'simple pasta dish', 20, 'clairesaffitz'),
    (3, 'butter pasta', 'butter and pasta', 10, 'stanleyliu'),
    (4, 'fried rice', 'basic fried rice', 25, 'mollybaz'),
    (5, 'white rice', 'just rice', 15, 'bradleone'),
    (6, 'white rice', 'just rice', 15, 'mollybaz');

INSERT INTO recipe_ingredients (ingredient_id, recipe_id, amount) VALUES
	(1, 1, 10), (3, 1, 1), (4, 1, 1), (5, 1, 1), (6, 1, 5), (7, 1, 3), (8, 1, 1), (9, 1, 1),
	(1, 2, 10), (3, 2, 1), (4, 2, 1), (5, 2, 1), (6, 2, 5), (7, 2, 3), (8, 2, 1), (9, 2, 1),
    (2, 3, 1), (3, 3, 1),
    (10, 4, 1), (11, 4, 10), (12, 4, 1), (13, 4, 1),
    (10, 5, 1),
    (10, 6, 1);
    
    
DELIMITER //
CREATE PROCEDURE makeable_recipes(input_username VARCHAR(255))
BEGIN
SELECT recipe_id, name, description, preparation_time FROM
	(SELECT num_ingredient_query.recipe_id, num_ingredient_query.name, num_ingredient_query.description, 
    num_ingredient_query.preparation_time, num_ingredients, num_ingredients_can_make FROM
		(SELECT recipe_id, name, description, preparation_time, COUNT(ingredient_id) as "num_ingredients" FROM 
			(SELECT u.username, u.recipe_id, u.name, u.description, u.preparation_time, u.ingredient_id, u.amount, user_ingredients.quantity, user_ingredients.quantity >= u.amount as "can_make" FROM
				(SELECT username, recipe_id, name, description, preparation_time, ingredient_id, amount FROM users NATURAL JOIN
						(SELECT * FROM recipes NATURAL JOIN recipe_ingredients WHERE user_id = input_username) AS user_recipe_ingredients
						WHERE username = input_username
						GROUP BY ingredient_id, username, recipe_id) AS u
				LEFT JOIN user_ingredients ON user_ingredients.ingredient_id = u.ingredient_id
			WHERE user_ingredients.username = u.username) AS results
		GROUP BY recipe_id) as num_ingredient_query
	JOIN
	(SELECT recipe_id, COUNT(can_make) as "num_ingredients_can_make" FROM
		(SELECT u.username, u.recipe_id, u.name, u.description, u.preparation_time, u.ingredient_id, u.amount, user_ingredients.quantity, user_ingredients.quantity >= u.amount as "can_make" FROM
			(SELECT username, recipe_id, name, description, preparation_time, ingredient_id, amount FROM users NATURAL JOIN
					(SELECT * FROM recipes NATURAL JOIN recipe_ingredients WHERE user_id = input_username) AS user_recipe_ingredients
					WHERE username = input_username
					GROUP BY ingredient_id, username, recipe_id) AS u
		LEFT JOIN user_ingredients ON user_ingredients.ingredient_id = u.ingredient_id
		WHERE user_ingredients.username = u.username) AS results
	WHERE can_make = 1
	GROUP BY recipe_id) as num_can_make_query
	ON num_ingredient_query.recipe_id = num_can_make_query.recipe_id) AS lastquery
WHERE num_ingredients_can_make = num_ingredients;
END
//

CREATE PROCEDURE recipes_ingredient_list(input_recipe_id INT)
BEGIN
SELECT ingredient_id, name, expiration_time_days FROM ingredients NATURAL JOIN recipe_ingredients
WHERE recipe_id = input_recipe_id;
END
//