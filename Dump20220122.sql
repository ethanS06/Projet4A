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
-- Table structure for table `niveau`
--

DROP TABLE IF EXISTS `niveau`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `niveau` (
  `id` int NOT NULL AUTO_INCREMENT,
  `niveau_difficulte` varchar(50) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` timestamp NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `niveau`
--

LOCK TABLES `niveau` WRITE;
/*!40000 ALTER TABLE `niveau` DISABLE KEYS */;
INSERT INTO `niveau` VALUES (1,'0','2019-06-01 00:32:07','2019-08-30 13:34:33'),(2,'1','2021-12-31 11:43:44','2021-12-31 10:44:02');
/*!40000 ALTER TABLE `niveau` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `phr_contexte`
--

DROP TABLE IF EXISTS `phr_contexte`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `phr_contexte` (
  `id` int NOT NULL AUTO_INCREMENT,
  `idverbe` int NOT NULL,
  `phrase1` mediumtext NOT NULL,
  `phrase2` mediumtext NOT NULL,
  `phrase3` mediumtext NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `idverbe` (`idverbe`),
  CONSTRAINT `phr_contexte_verbe` FOREIGN KEY (`idverbe`) REFERENCES `verbe` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `phr_contexte`
--

LOCK TABLES `phr_contexte` WRITE;
/*!40000 ALTER TABLE `phr_contexte` DISABLE KEYS */;
INSERT INTO `phr_contexte` VALUES (1,1,'was/were','been','etre','2019-06-01 00:32:07','2019-08-30 13:34:33'),(2,2,'have','had','had','2019-06-01 00:32:07','2019-08-30 13:34:33'),(3,3,'became','become','devenir','2022-01-06 13:31:50','2022-01-06 12:31:51'),(4,4,'came','come','venir','2022-01-06 13:33:16','2022-01-06 12:33:17'),(5,5,'got','got','obtenir','2022-01-16 14:43:50','2022-01-16 13:43:52');
/*!40000 ALTER TABLE `phr_contexte` ENABLE KEYS */;
UNLOCK TABLES;

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

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `login` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `email` varchar(2000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `password` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Unique_login` (`login`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'Example','email@example.com','password','2021-12-31 12:10:57','2021-12-31 11:11:00'),(2,'testloginpostman','testemailpostman','Test_Postman','2021-12-31 12:16:24','2021-12-31 11:16:25'),(3,'Example_SQL','example@sql.com','password_SQL','2022-01-01 20:06:49','2022-01-01 19:06:49'),(4,'testpostmancreer','testcreeremail','testcreerphp','2022-01-02 10:21:20','2022-01-02 09:21:20'),(17,'TestAjax','emailajax','passwordAJAX','2022-01-05 16:14:11','2022-01-05 15:14:11'),(21,'testajac','test','gtest','2022-01-06 13:59:04','2022-01-06 12:59:04'),(22,'testajac45','test45','gtest45','2022-01-06 14:13:09','2022-01-06 13:13:09');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_niveau_score`
--

DROP TABLE IF EXISTS `user_niveau_score`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_niveau_score` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_user` int NOT NULL,
  `id_niveau` int NOT NULL,
  `score` float NOT NULL DEFAULT '0',
  `created_at` datetime NOT NULL,
  `updated_at` timestamp NOT NULL,
  PRIMARY KEY (`id`),
  KEY `user_niveau_score_user` (`id_user`),
  KEY `user_niveau_score_niveau` (`id_niveau`),
  CONSTRAINT `user_niveau_score_niveau` FOREIGN KEY (`id_niveau`) REFERENCES `niveau` (`id`),
  CONSTRAINT `user_niveau_score_user` FOREIGN KEY (`id_user`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_niveau_score`
--

LOCK TABLES `user_niveau_score` WRITE;
/*!40000 ALTER TABLE `user_niveau_score` DISABLE KEYS */;
INSERT INTO `user_niveau_score` VALUES (1,1,1,0.54,'2021-12-31 14:10:21','2021-12-31 13:10:22'),(2,1,2,0.89,'2021-12-31 14:10:38','2021-12-31 13:10:39'),(3,2,1,0.12,'2021-12-31 14:10:55','2021-12-31 13:10:56'),(4,2,2,0.15,'2021-12-31 14:11:12','2021-12-31 13:11:13');
/*!40000 ALTER TABLE `user_niveau_score` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `verbe`
--

DROP TABLE IF EXISTS `verbe`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `verbe` (
  `id` int NOT NULL AUTO_INCREMENT,
  `infinitif` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `passe_simple` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `participe_passe` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `traduction` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `difficulte` int NOT NULL,
  `id_phrase_ctxt` int NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `Index 2` (`id_phrase_ctxt`),
  KEY `verbe_niveau` (`difficulte`),
  CONSTRAINT `verbe_niveau` FOREIGN KEY (`difficulte`) REFERENCES `niveau` (`id`),
  CONSTRAINT `verbe_phrase` FOREIGN KEY (`id_phrase_ctxt`) REFERENCES `phr_contexte` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `verbe`
--

LOCK TABLES `verbe` WRITE;
/*!40000 ALTER TABLE `verbe` DISABLE KEYS */;
INSERT INTO `verbe` VALUES (1,'be','was/were','been','etre',1,1,'2019-06-01 00:32:07','2019-08-30 13:34:33'),(2,'have','had','had','avoir',1,2,'2019-06-01 00:32:07','2019-08-30 13:34:33'),(3,'become','became','become','devenir',1,3,'2022-01-06 13:31:17','2022-01-06 12:31:18'),(4,'come','came','come','venir',1,4,'2022-01-06 13:32:56','2022-01-06 12:32:57'),(5,'get','got','got','obtenir',1,5,'2022-01-16 14:44:21','2022-01-16 13:44:21');
/*!40000 ALTER TABLE `verbe` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `winrate_user`
--

DROP TABLE IF EXISTS `winrate_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `winrate_user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_niveau` int NOT NULL,
  `id_user` int NOT NULL,
  `id_phrase` int NOT NULL,
  `winrate` float NOT NULL DEFAULT '0',
  `created_at` datetime NOT NULL,
  `updated_at` timestamp NOT NULL,
  PRIMARY KEY (`id`),
  KEY `win_usr_usr` (`id_user`),
  KEY `win_usr_niveau` (`id_niveau`),
  KEY `win_usr_phrase` (`id_phrase`),
  CONSTRAINT `win_usr_niveau` FOREIGN KEY (`id_niveau`) REFERENCES `niveau` (`id`),
  CONSTRAINT `win_usr_phrase` FOREIGN KEY (`id_phrase`) REFERENCES `phr_contexte` (`id`),
  CONSTRAINT `win_usr_usr` FOREIGN KEY (`id_user`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `winrate_user`
--

LOCK TABLES `winrate_user` WRITE;
/*!40000 ALTER TABLE `winrate_user` DISABLE KEYS */;
INSERT INTO `winrate_user` VALUES (1,1,1,1,0.45,'2021-12-31 16:37:00','2021-12-31 15:37:01'),(2,1,2,1,0.15,'2021-12-31 16:37:16','2021-12-31 15:37:17'),(3,2,1,2,0.151,'2021-12-31 16:37:36','2021-12-31 15:37:37');
/*!40000 ALTER TABLE `winrate_user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-01-22 23:04:46
