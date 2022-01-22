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

-- Dump completed on 2022-01-22 19:33:41
