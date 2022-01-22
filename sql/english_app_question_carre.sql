-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: localhost    Database: english_app
-- ------------------------------------------------------
-- Server version	8.0.27

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
-- Table structure for table `question_carre`
--

DROP TABLE IF EXISTS `question_carre`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `question_carre` (
  `id` int NOT NULL AUTO_INCREMENT,
  `question` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `solution` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `id_verbe` int NOT NULL,
  `id_niveau` int NOT NULL,
  `id_forme` int NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` timestamp NOT NULL,
  PRIMARY KEY (`id`),
  KEY `question_carre` (`id_verbe`),
  KEY `question_carre_niveau` (`id_niveau`),
  CONSTRAINT `question_carre` FOREIGN KEY (`id_verbe`) REFERENCES `verbe` (`id`),
  CONSTRAINT `question_carre_niveau` FOREIGN KEY (`id_niveau`) REFERENCES `niveau` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `question_carre`
--

LOCK TABLES `question_carre` WRITE;
/*!40000 ALTER TABLE `question_carre` DISABLE KEYS */;
INSERT INTO `question_carre` VALUES (1,'test q1','been',1,1,3,'2021-12-31 14:08:15','2021-12-31 13:08:16'),(2,'test q2','have',2,1,1,'2021-12-31 14:08:52','2021-12-31 13:08:53'),(3,'test q3','become',3,1,1,'2022-01-09 15:32:23','2022-01-09 14:32:24'),(4,'test q4','became',3,1,2,'2022-01-09 15:32:48','2022-01-09 14:32:49'),(5,'test q5','come',4,1,1,'2022-01-09 15:33:11','2022-01-09 14:33:12'),(6,'test q6','come',4,1,3,'2022-01-11 18:35:51','2022-01-11 17:35:52'),(7,'test q7','have',2,1,1,'2022-01-11 18:36:27','2022-01-11 17:36:28'),(8,'test q8','was/were',1,1,2,'2022-01-11 18:36:33','2022-01-11 17:36:32'),(9,'test q9','be',1,1,1,'2022-01-11 18:37:13','2022-01-11 17:37:14'),(10,'test q10','became',3,1,2,'2022-01-11 18:37:42','2022-01-11 17:37:43'),(11,'test q11','came',4,1,2,'2022-01-11 18:38:38','2022-01-11 17:38:38');
/*!40000 ALTER TABLE `question_carre` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-01-22 19:33:40
