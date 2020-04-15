CREATE DATABASE  IF NOT EXISTS `fridge_tracker` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `fridge_tracker`;
-- MySQL dump 10.13  Distrib 8.0.19, for macos10.15 (x86_64)
--
-- Host: localhost    Database: fridge_tracker
-- ------------------------------------------------------
-- Server version	8.0.19

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `favorite_recipes`
--

DROP TABLE IF EXISTS `favorite_recipes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `favorite_recipes` (
  `recipe_id` int NOT NULL,
  `user_id` varchar(255) NOT NULL,
  PRIMARY KEY (`recipe_id`,`user_id`),
  KEY `userid_fk` (`user_id`),
  CONSTRAINT `recipeid_fk` FOREIGN KEY (`recipe_id`) REFERENCES `recipes` (`recipe_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `userid_fk` FOREIGN KEY (`user_id`) REFERENCES `recipes` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `favorite_recipes`
--

LOCK TABLES `favorite_recipes` WRITE;
/*!40000 ALTER TABLE `favorite_recipes` DISABLE KEYS */;
INSERT INTO `favorite_recipes` VALUES (2,'clairesaffitz'),(4,'mollybaz'),(3,'stanleyliu');
/*!40000 ALTER TABLE `favorite_recipes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ingredients`
--

DROP TABLE IF EXISTS `ingredients`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ingredients` (
  `ingredient_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `expiration_time_days` int NOT NULL,
  PRIMARY KEY (`ingredient_id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ingredients`
--

LOCK TABLES `ingredients` WRITE;
/*!40000 ALTER TABLE `ingredients` DISABLE KEYS */;
INSERT INTO `ingredients` VALUES (1,'olive oil',1095),(2,'butter',180),(3,'pasta',730),(4,'parsley',7),(5,'lemon',21),(6,'red chili flakes',730),(7,'garlic',21),(8,'salt',1825),(9,'black pepper',1095),(10,'rice',1460),(11,'vegetable oil',365),(12,'peas',7),(13,'green onion',7);
/*!40000 ALTER TABLE `ingredients` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `recipe_ingredients`
--

DROP TABLE IF EXISTS `recipe_ingredients`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `recipe_ingredients` (
  `ingredient_id` int NOT NULL,
  `recipe_id` int NOT NULL,
  `amount` int NOT NULL,
  PRIMARY KEY (`ingredient_id`,`recipe_id`),
  KEY `recipe_fk` (`recipe_id`),
  CONSTRAINT `ingredient_fk` FOREIGN KEY (`ingredient_id`) REFERENCES `ingredients` (`ingredient_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `recipe_fk` FOREIGN KEY (`recipe_id`) REFERENCES `recipes` (`recipe_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `recipe_ingredients`
--

LOCK TABLES `recipe_ingredients` WRITE;
/*!40000 ALTER TABLE `recipe_ingredients` DISABLE KEYS */;
INSERT INTO `recipe_ingredients` VALUES (1,1,10),(1,2,10),(2,3,1),(3,1,1),(3,2,1),(3,3,1),(4,1,1),(4,2,1),(5,1,1),(5,2,1),(6,1,5),(6,2,5),(7,1,3),(7,2,3),(8,1,1),(8,2,1),(9,1,1),(9,2,1),(10,4,1),(10,5,1),(10,6,1),(11,4,10),(12,4,1),(13,4,1);
/*!40000 ALTER TABLE `recipe_ingredients` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `recipes`
--

DROP TABLE IF EXISTS `recipes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `recipes` (
  `recipe_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `preparation_time` int DEFAULT NULL,
  `user_id` varchar(255) NOT NULL,
  PRIMARY KEY (`recipe_id`),
  KEY `user_fk` (`user_id`),
  CONSTRAINT `user_fk` FOREIGN KEY (`user_id`) REFERENCES `users` (`username`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `recipes`
--

LOCK TABLES `recipes` WRITE;
/*!40000 ALTER TABLE `recipes` DISABLE KEYS */;
INSERT INTO `recipes` VALUES (1,'pasta aglio e olio','simple pasta dish',20,'stanleyliu'),(2,'pasta aglio e olio','simple pasta dish',20,'clairesaffitz'),(3,'butter pasta','butter and pasta',10,'stanleyliu'),(4,'fried rice','basic fried rice',25,'mollybaz'),(5,'white rice','just rice',15,'bradleone'),(6,'white rice','just rice',15,'mollybaz');
/*!40000 ALTER TABLE `recipes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_ingredients`
--

DROP TABLE IF EXISTS `user_ingredients`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_ingredients` (
  `username` varchar(255) NOT NULL,
  `ingredient_id` int NOT NULL,
  `quantity` int NOT NULL,
  `expiration_date` date NOT NULL,
  PRIMARY KEY (`username`,`ingredient_id`),
  KEY `ingredientid_fk` (`ingredient_id`),
  CONSTRAINT `ingredientid_fk` FOREIGN KEY (`ingredient_id`) REFERENCES `ingredients` (`ingredient_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `username_fk` FOREIGN KEY (`username`) REFERENCES `users` (`username`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_ingredients`
--

LOCK TABLES `user_ingredients` WRITE;
/*!40000 ALTER TABLE `user_ingredients` DISABLE KEYS */;
INSERT INTO `user_ingredients` VALUES ('bradleone',10,100,'2030-02-02'),('clairesaffitz',1,100,'2025-01-01'),('clairesaffitz',2,4,'2020-04-22'),('clairesaffitz',3,2,'2022-02-02'),('clairesaffitz',4,1,'2020-04-20'),('clairesaffitz',5,2,'2020-04-30'),('clairesaffitz',6,100,'2022-02-02'),('clairesaffitz',7,5,'2022-04-27'),('clairesaffitz',8,100,'2026-02-03'),('clairesaffitz',9,100,'2025-12-31'),('milesbarker',1,100,'2025-01-01'),('milesbarker',6,100,'2022-02-02'),('milesbarker',7,5,'2022-04-27'),('milesbarker',8,100,'2026-02-03'),('milesbarker',9,100,'2025-12-31'),('mollybaz',10,100,'2030-02-02'),('mollybaz',11,100,'2021-02-04'),('mollybaz',12,4,'2020-04-21'),('mollybaz',13,4,'2020-04-21'),('stanleyliu',1,100,'2025-01-01'),('stanleyliu',2,4,'2020-04-22'),('stanleyliu',3,2,'2022-02-02'),('stanleyliu',4,1,'2020-04-20'),('stanleyliu',5,2,'2020-04-30'),('stanleyliu',6,100,'2022-02-02'),('stanleyliu',7,5,'2022-04-27'),('stanleyliu',8,100,'2026-02-03'),('stanleyliu',9,100,'2025-12-31');
/*!40000 ALTER TABLE `user_ingredients` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES ('andybaraghani','andyspassword'),('bradleone','bradrocks23'),('clairesaffitz','downwithbrad'),('gordonramsay','whereisthelambsauce'),('milesbarker','password1'),('mollybaz','password123'),('stanleyliu','password');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'fridge_tracker'
--
/*!50003 DROP PROCEDURE IF EXISTS `makeable_recipes` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `makeable_recipes`(input_username VARCHAR(255))
BEGIN
SELECT * FROM recipes
WHERE recipe_id IN
(SELECT recipe_id FROM
	(SELECT num_ingredient_query.recipe_id, num_ingredients, num_ingredients_can_make FROM
		(SELECT recipe_id, COUNT(ingredient_id) as "num_ingredients" FROM 
			(SELECT u.username, u.recipe_id, u.name, u.description, u.preparation_time, u.ingredient_id, u.amount, user_ingredients.quantity, user_ingredients.quantity >= u.amount as "can_make" FROM
				(SELECT username, recipe_id, name, description, preparation_time, ingredient_id, amount FROM users NATURAL JOIN
						(SELECT * FROM recipes NATURAL JOIN recipe_ingredients WHERE user_id = input_username) AS user_recipe_ingredients
						WHERE username = input_username
						GROUP BY ingredient_id, username, recipe_id) AS u
				LEFT JOIN user_ingredients ON user_ingredients.ingredient_id = u.ingredient_id
			WHERE user_ingredients.username = u.username
			UNION
			SELECT u.username, u.recipe_id, u.name, u.description, u.preparation_time, u.ingredient_id, u.amount, 0 as "quantity", 0 as "can_make" FROM
				(SELECT username, recipe_id, name, description, preparation_time, ingredient_id, amount FROM users NATURAL JOIN
						(SELECT * FROM recipes NATURAL JOIN recipe_ingredients WHERE user_id = input_username) AS user_recipe_ingredients
						WHERE username = input_username
						GROUP BY ingredient_id, username, recipe_id) AS u
			WHERE u.ingredient_id NOT IN (SELECT ingredient_id FROM user_ingredients WHERE username = input_username)) AS results
		GROUP BY recipe_id) as num_ingredient_query
	JOIN
	(SELECT recipe_id, SUM(can_make) as "num_ingredients_can_make" FROM
		(SELECT u.username, u.recipe_id, u.name, u.description, u.preparation_time, u.ingredient_id, u.amount, user_ingredients.quantity, user_ingredients.quantity >= u.amount as "can_make" FROM
			(SELECT username, recipe_id, name, description, preparation_time, ingredient_id, amount FROM users NATURAL JOIN
					(SELECT * FROM recipes NATURAL JOIN recipe_ingredients WHERE user_id = input_username) AS user_recipe_ingredients
					WHERE username = input_username
					GROUP BY ingredient_id, username, recipe_id) AS u
			LEFT JOIN user_ingredients ON user_ingredients.ingredient_id = u.ingredient_id
		WHERE user_ingredients.username = u.username
		UNION
		SELECT u.username, u.recipe_id, u.name, u.description, u.preparation_time, u.ingredient_id, u.amount, 0 as "quantity", 0 as "can_make" FROM
			(SELECT username, recipe_id, name, description, preparation_time, ingredient_id, amount FROM users NATURAL JOIN
					(SELECT * FROM recipes NATURAL JOIN recipe_ingredients WHERE user_id = input_username) AS user_recipe_ingredients
					WHERE username = input_username
					GROUP BY ingredient_id, username, recipe_id) AS u
		WHERE u.ingredient_id NOT IN (SELECT ingredient_id FROM user_ingredients WHERE username = input_username)) AS results
	GROUP BY recipe_id) as num_can_make_query
	ON num_ingredient_query.recipe_id = num_can_make_query.recipe_id) AS lastquery
WHERE num_ingredients_can_make = num_ingredients);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `recipes_ingredient_list` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `recipes_ingredient_list`(input_recipe_id INT)
BEGIN
SELECT ingredients.name, recipe_ingredients.ingredient_id, recipe_ingredients.recipe_id, recipe_ingredients.amount FROM ingredients NATURAL JOIN recipe_ingredients
WHERE recipe_id = input_recipe_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-04-14 22:28:31
