-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 19, 2024 at 09:10 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `systemvote`
--

-- --------------------------------------------------------

--
-- Table structure for table `candidate`
--

CREATE TABLE `candidate` (
  `id_candidate` int(11) NOT NULL,
  `id_candidate_random` double NOT NULL,
  `id_events` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `Picture_face` text NOT NULL,
  `plans` text NOT NULL,
  `picture_catre` text NOT NULL,
  `Counting` int(11) DEFAULT NULL,
  `state_acc` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `events`
--

CREATE TABLE `events` (
  `id_events` int(11) NOT NULL,
  `id_events_random` double NOT NULL,
  `eventsname` varchar(255) NOT NULL,
  `dateStart` varchar(255) NOT NULL,
  `dateEnd` varchar(255) NOT NULL,
  `location` varchar(255) NOT NULL,
  `descr` text NOT NULL,
  `event_org` varchar(255) NOT NULL,
  `instruction` text NOT NULL,
  `img_back` text NOT NULL,
  `id_user` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `events`
--

INSERT INTO `events` (`id_events`, `id_events_random`, `eventsname`, `dateStart`, `dateEnd`, `location`, `descr`, `event_org`, `instruction`, `img_back`, `id_user`) VALUES
(44, 57587881023423, 'UNIVERSITE AMAR TELIDJI LAGHOUAT', '2023-06-15', '2023-06-25', 'LAGOUAT', 'We would like to express our heartfelt gratitude to Allah Almighty for granting us the\r\nstrength, courage, and determination to complete this work, especially in the face of the\r\nchallenges we encountered', 'Chellama Laardj', 'We would like to express our heartfelt gratitude to Allah Almighty for granting us the\r\nstrength, courage, and determination to complete this work, especially in the face of the\r\nchallenges we encountered', 'Vote_wallpaper.jpg', 45);

-- --------------------------------------------------------

--
-- Table structure for table `polls`
--

CREATE TABLE `polls` (
  `id_poll` int(11) NOT NULL,
  `id_polls_random` double NOT NULL,
  `id_follow` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `id_posts` int(11) NOT NULL,
  `id_posts_random` double NOT NULL,
  `post_title` varchar(255) NOT NULL,
  `post_contents` text NOT NULL,
  `id_follow` int(11) NOT NULL,
  `imgFile` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `sugg`
--

CREATE TABLE `sugg` (
  `id_sugg` int(11) NOT NULL,
  `id_polls` int(11) NOT NULL,
  `sugg_contents` varchar(255) NOT NULL,
  `porcentage` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id_users` int(11) NOT NULL,
  `id_users_random` double DEFAULT NULL,
  `firstname` varchar(255) NOT NULL,
  `lasrname` varchar(255) NOT NULL,
  `country` varchar(255) NOT NULL,
  `state` varchar(255) NOT NULL,
  `dateB` varchar(255) NOT NULL,
  `id_number` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `imgFile` varchar(255) NOT NULL,
  `sexe` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id_users`, `id_users_random`, `firstname`, `lasrname`, `country`, `state`, `dateB`, `id_number`, `username`, `password`, `imgFile`, `sexe`) VALUES
(42, 29822893601681, 'Chamsou', 'Mekahal', 'Algeria', 'laghouat', '2002-01-08', 89091212, 'chamsoumekahal4064', '12345678910', 'P_h.png', 'Male'),
(43, 43418875067556, 'Lakas', 'Mohamed', 'Algeria', 'Lagouat', '2001-01-30', 121122, 'lakasmohamed5020', '12345678910', 'P_h.png', 'Male'),
(45, 32959519568975, 'Youcef', 'Boudia', 'Algeria', 'laghouat', '2000-02-22', 222, 'youcefboudia7144', '12345678910', 'P_h.png', 'Male'),
(46, 86596981285099, 'LAZHARI', 'KORRBA', 'Algeria', 'laghouat', '2002-02-22', 1212321312, 'lazharikorrba6000', '1234567890', '96.png', 'Male'),
(47, NULL, '', '', '', '', '', 0, '', '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `voter`
--

CREATE TABLE `voter` (
  `id_Voter` int(11) NOT NULL,
  `id_voter_random` double NOT NULL,
  `id_events` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `Picture_face` text NOT NULL,
  `plans` text NOT NULL,
  `picture_catre` text NOT NULL,
  `state_acc` tinyint(1) DEFAULT NULL,
  `firstname` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `time` varchar(255) NOT NULL,
  `address` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `voter`
--

INSERT INTO `voter` (`id_Voter`, `id_voter_random`, `id_events`, `id_user`, `Picture_face`, `plans`, `picture_catre`, `state_acc`, `firstname`, `lastname`, `time`, `address`) VALUES
(12, 4977916368180, 44, 42, 'voting (1).png', 'i test', 'exa si 19-20 .png', 0, 'Chamsou', 'Mekahal', '2023', 'address');

-- --------------------------------------------------------

--
-- Table structure for table `voter_sugg`
--

CREATE TABLE `voter_sugg` (
  `id_v_s` int(11) NOT NULL,
  `id_voter` int(11) NOT NULL,
  `id_sugg` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `candidate`
--
ALTER TABLE `candidate`
  ADD PRIMARY KEY (`id_candidate`),
  ADD KEY `id_events` (`id_events`,`id_user`),
  ADD KEY `id_user` (`id_user`);

--
-- Indexes for table `events`
--
ALTER TABLE `events`
  ADD PRIMARY KEY (`id_events`),
  ADD KEY `id_user` (`id_user`);

--
-- Indexes for table `polls`
--
ALTER TABLE `polls`
  ADD PRIMARY KEY (`id_poll`),
  ADD KEY `id_follow` (`id_follow`);

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id_posts`),
  ADD KEY `id_follow` (`id_follow`);

--
-- Indexes for table `sugg`
--
ALTER TABLE `sugg`
  ADD PRIMARY KEY (`id_sugg`),
  ADD KEY `id_polls` (`id_polls`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id_users`);

--
-- Indexes for table `voter`
--
ALTER TABLE `voter`
  ADD PRIMARY KEY (`id_Voter`),
  ADD KEY `id_events` (`id_events`,`id_user`),
  ADD KEY `id_user` (`id_user`);

--
-- Indexes for table `voter_sugg`
--
ALTER TABLE `voter_sugg`
  ADD PRIMARY KEY (`id_v_s`),
  ADD KEY `id_voter` (`id_voter`,`id_sugg`),
  ADD KEY `id_sugg` (`id_sugg`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `candidate`
--
ALTER TABLE `candidate`
  MODIFY `id_candidate` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `events`
--
ALTER TABLE `events`
  MODIFY `id_events` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;

--
-- AUTO_INCREMENT for table `polls`
--
ALTER TABLE `polls`
  MODIFY `id_poll` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `id_posts` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `sugg`
--
ALTER TABLE `sugg`
  MODIFY `id_sugg` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id_users` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;

--
-- AUTO_INCREMENT for table `voter`
--
ALTER TABLE `voter`
  MODIFY `id_Voter` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `voter_sugg`
--
ALTER TABLE `voter_sugg`
  MODIFY `id_v_s` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `candidate`
--
ALTER TABLE `candidate`
  ADD CONSTRAINT `candidate_ibfk_1` FOREIGN KEY (`id_events`) REFERENCES `events` (`id_events`),
  ADD CONSTRAINT `candidate_ibfk_2` FOREIGN KEY (`id_user`) REFERENCES `users` (`id_users`);

--
-- Constraints for table `events`
--
ALTER TABLE `events`
  ADD CONSTRAINT `events_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `users` (`id_users`);

--
-- Constraints for table `polls`
--
ALTER TABLE `polls`
  ADD CONSTRAINT `polls_ibfk_1` FOREIGN KEY (`id_poll`) REFERENCES `candidate` (`id_candidate`);

--
-- Constraints for table `posts`
--
ALTER TABLE `posts`
  ADD CONSTRAINT `posts_ibfk_1` FOREIGN KEY (`id_follow`) REFERENCES `candidate` (`id_candidate`);

--
-- Constraints for table `sugg`
--
ALTER TABLE `sugg`
  ADD CONSTRAINT `sugg_ibfk_1` FOREIGN KEY (`id_polls`) REFERENCES `polls` (`id_poll`);

--
-- Constraints for table `voter`
--
ALTER TABLE `voter`
  ADD CONSTRAINT `voter_ibfk_1` FOREIGN KEY (`id_events`) REFERENCES `events` (`id_events`),
  ADD CONSTRAINT `voter_ibfk_2` FOREIGN KEY (`id_user`) REFERENCES `users` (`id_users`);

--
-- Constraints for table `voter_sugg`
--
ALTER TABLE `voter_sugg`
  ADD CONSTRAINT `voter_sugg_ibfk_1` FOREIGN KEY (`id_sugg`) REFERENCES `sugg` (`id_sugg`),
  ADD CONSTRAINT `voter_sugg_ibfk_2` FOREIGN KEY (`id_voter`) REFERENCES `voter` (`id_Voter`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
