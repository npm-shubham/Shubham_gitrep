# MILESTONE PROJECT MONTH 1


## ***Question 1***

*/Creation of database and tables./*
Welcome to the MySQL monitor.  Commands end with ; or \g.
Your MySQL connection id is 21
Server version: 8.0.36 MySQL Community Server - GPL

Copyright (c) 2000, 2024, Oracle and/or its affiliates.

Oracle is a registered trademark of Oracle Corporation and/or its
affiliates. Other names may be trademarks of their respective
owners.

Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

mysql> show databases;
+--------------------+
| Database           |
+--------------------+
| information_schema |
| mysql              |
| performance_schema |
| sakila             |
| sys                |
| world              |
+--------------------+
6 rows in set (0.06 sec)

mysql> create database Hospital_management_system;
Query OK, 1 row affected (0.05 sec)

mysql> use database Hospital_management_system;
ERROR 1049 (42000): Unknown database 'database'
mysql> use Hospital_management_system;
Database changed
mysql> create table users (
    -> userid INT PRIMARY KEY AUTO_INCREMENT,
    -> username VARCHAR(255) NOT NULL;
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near '' at line 3
mysql> create table users (
    -> userid INT PRIMARY KEY AUTO_INCREMENT,
    -> username VARCHAR(255) NOT NULL,
    -> usertype VARCHAR(50) NOT NULL,
    -> UNIQUE (username),
    -> );
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near ')' at line 6
mysql> create table users (
    -> userid INT PRIMARY KEY AUTO_INCREMENT,
    -> username VARCHAR(255) NOT NULL,
    -> usertype VARCHAR(50) NOT NULL,
    -> password VARCHAR(255) NOT NULL,
    -> UNIQUE (username)
    -> );
Query OK, 0 rows affected (0.16 sec)

mysql> show table
    -> ;
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near '' at line 1
mysql> view table
    -> ;
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'view table' at line 1
mysql> show tables;
+--------------------------------------+
| Tables_in_hospital_management_system |
+--------------------------------------+
| users                                |
+--------------------------------------+
1 row in set (0.07 sec)

mysql> create table Patients (
    -> patientid INT PRIMARY KEY AUTO_INCREMENT,
    -> userid INT NOT NULL,
    -> name VARCHAR(255) NOT NULL,
    -> dob DATE NOT NULL,
    -> gender VARCHAR(10) NOT NULL,
    -> contactno VARCHAR(10),
    -> FOREIGN KEY (userid) REFERENCES users(userid)
    -> );
Query OK, 0 rows affected (0.13 sec)

mysql> show tables;
+--------------------------------------+
| Tables_in_hospital_management_system |
+--------------------------------------+
| patients                             |
| users                                |
+--------------------------------------+
2 rows in set (0.00 sec)

mysql> CREATE TABLE diagnosis (
    -> diagnosisid INT PRIMARY KEY AUTO_INCREMENT,
    -> patientid INT NOT NULL,
    -> diagnosisdate DATE NOT NULL,
    -> diagnosisdetails TEXT,
    -> FOREIGN KEY (patientid) REFERENCES patients(patientid)
    -> );
Query OK, 0 rows affected (0.12 sec)

mysql> create table bill (
    -> billid INT PRIMARY KEY AUTO_INCREMENT,
    -> patientid INT NOT NULL,
    -> billamount DECIMAL(10,2) NOT NULL,
    -> checkoutdate DATE NOT NULL,
    -> FOREIGN KEY (patientid) REFERENCES patients(patientid)
    -> );
Query OK, 0 rows affected (0.12 sec)

mysql> create table insurance(
    -> insuranceid INT PRIMARY KEY AUTO_INCREMENT,
    -> patientid INT NOT NULL,
    -> insurancelimit DECIMAL(10,2) NOT NULL,
    -> expirydate DATE NOT NULL,
    -> FOREIGN KEY (patientid) REFERENCES patients(patientid));
Query OK, 0 rows affected (0.13 sec)

mysql> show tables;
+--------------------------------------+
| Tables_in_hospital_management_system |
+--------------------------------------+
| bill                                 |
| diagnosis                            |
| insurance                            |
| patients                             |
| users                                |
+--------------------------------------+
5 rows in set (0.00 sec)

mysql> show databases;
+----------------------------+
| Database                   |
+----------------------------+
| hospital_management_system |
| information_schema         |
| mysql                      |
| performance_schema         |
| sakila                     |
| sys                        |
| world                      |
+----------------------------+
7 rows in set (0.05 sec)

mysql> use hospital_management_system;
Database changed
mysql> show tables;
+--------------------------------------+
| Tables_in_hospital_management_system |
+--------------------------------------+
| bill                                 |
| diagnosis                            |
| insurance                            |
| patients                             |
| users                                |
+--------------------------------------+
5 rows in set (0.00 sec)

mysql> desc users;
+----------+--------------+------+-----+---------+----------------+
| Field    | Type         | Null | Key | Default | Extra          |
+----------+--------------+------+-----+---------+----------------+
| userid   | int          | NO   | PRI | NULL    | auto_increment |
| username | varchar(255) | NO   | UNI | NULL    |                |
| usertype | varchar(50)  | NO   |     | NULL    |                |
| password | varchar(255) | YES  |     | NULL    |                |
+----------+--------------+------+-----+---------+----------------+
4 rows in set (0.00 sec)

mysql> INSERT INTO users (username, password, usertype) VALUES ('AdminGod', 'Passcode', 'Admin');
Query OK, 1 row affected (0.06 sec)

mysql> select * from users;
+--------+----------+----------+----------+
| userid | username | usertype | password |
+--------+----------+----------+----------+
|      1 | AdminGod | Admin    | Passcode |
+--------+----------+----------+----------+
1 row in set (0.00 sec)

mysql> INSERT INTO users (username, password, usertype) VALUES
    -> ('Shubham', 'Unlock', 'Doctor'),
    -> ('Bhusanm', 'Access', 'Doctor'),
    -> ('Nikita', 'Enter', 'Nurse'),
    -> ('Hema', 'boldhead', 'receptionist'),
    -> ('Aditya', 'heythere', 'Wardboy'),
    -> ('Yash', 'beingdumb', 'CleanerHead'),
    -> ('John', 'theDon', 'Nurse');
Query OK, 7 rows affected (0.05 sec)
Records: 7  Duplicates: 0  Warnings: 0

mysql> select * from users;
+--------+----------+--------------+-----------+
| userid | username | usertype     | password  |
+--------+----------+--------------+-----------+
|      1 | AdminGod | Admin        | Passcode  |
|      2 | Shubham  | Doctor       | Unlock    |
|      3 | Bhusanm  | Doctor       | Access    |
|      4 | Nikita   | Nurse        | Enter     |
|      5 | Hema     | receptionist | boldhead  |
|      6 | Aditya   | Wardboy      | heythere  |
|      7 | Yash     | CleanerHead  | beingdumb |
|      8 | John     | Nurse        | theDon    |
+--------+----------+--------------+-----------+
8 rows in set (0.00 sec)

mysql> select * from patients;
Empty set (0.05 sec)

mysql> desc patients;
+-----------+--------------+------+-----+---------+----------------+
| Field     | Type         | Null | Key | Default | Extra          |
+-----------+--------------+------+-----+---------+----------------+
| patientid | int          | NO   | PRI | NULL    | auto_increment |
| userid    | int          | NO   | MUL | NULL    |                |
| name      | varchar(255) | NO   |     | NULL    |                |
| dob       | date         | NO   |     | NULL    |                |
| gender    | varchar(10)  | NO   |     | NULL    |                |
| contactno | varchar(10)  | YES  |     | NULL    |                |
+-----------+--------------+------+-----+---------+----------------+
6 rows in set (0.00 sec)

mysql> INSERT INTO users (username, password, usertype) VALUES
    -> ('Unhealthy Man', 'obeese', 'patient');
Query OK, 1 row affected (0.05 sec)

mysql> select * from users;
+--------+---------------+--------------+-----------+
| userid | username      | usertype     | password  |
+--------+---------------+--------------+-----------+
|      1 | AdminGod      | Admin        | Passcode  |
|      2 | Shubham       | Doctor       | Unlock    |
|      3 | Bhusanm       | Doctor       | Access    |
|      4 | Nikita        | Nurse        | Enter     |
|      5 | Hema          | receptionist | boldhead  |
|      6 | Aditya        | Wardboy      | heythere  |
|      7 | Yash          | CleanerHead  | beingdumb |
|      8 | John          | Nurse        | theDon    |
|      9 | Unhealthy Man | patient      | obeese    |
+--------+---------------+--------------+-----------+
9 rows in set (0.00 sec)

mysql> INSERT INTO patients (userid, name, dob, gender, contactno) VALUE (9, 'White Walker', '2001-01-23', 'Male', '656355287');
Query OK, 1 row affected (0.05 sec)

mysql> select * from patients;
+-----------+--------+--------------+------------+--------+-----------+
| patientid | userid | name         | dob        | gender | contactno |
+-----------+--------+--------------+------------+--------+-----------+
|         1 |      9 | White Walker | 2001-01-23 | Male   | 656355287 |
+-----------+--------+--------------+------------+--------+-----------+
1 row in set (0.00 sec)

mysql> INSERT INTO patients (userid, name, dob, gender, contactno) VALUE (10, 'Black Walker', '2001-01-24', 'Male', '656354787');
ERROR 1452 (23000): Cannot add or update a child row: a foreign key constraint fails (`hospital_management_system`.`patients`, CONSTRAINT `patients_ibfk_1` FOREIGN KEY (`userid`) REFERENCES `users` (`userid`))
mysql> INSERT INTO users (username, password, usertype) VALUES
    -> ('Unhealthy Woman', 'Skiny', 'patient');
Query OK, 1 row affected (0.05 sec)

mysql> INSERT INTO patients (userid, name, dob, gender, contactno) VALUE (10, 'Blacky Walker', '2001-01-24', 'Female', '656354787');
Query OK, 1 row affected (0.01 sec)

mysql> select * from users;
+--------+-----------------+--------------+-----------+
| userid | username        | usertype     | password  |
+--------+-----------------+--------------+-----------+
|      1 | AdminGod        | Admin        | Passcode  |
|      2 | Shubham         | Doctor       | Unlock    |
|      3 | Bhusanm         | Doctor       | Access    |
|      4 | Nikita          | Nurse        | Enter     |
|      5 | Hema            | receptionist | boldhead  |
|      6 | Aditya          | Wardboy      | heythere  |
|      7 | Yash            | CleanerHead  | beingdumb |
|      8 | John            | Nurse        | theDon    |
|      9 | Unhealthy Man   | patient      | obeese    |
|     10 | Unhealthy Woman | patient      | Skiny     |
+--------+-----------------+--------------+-----------+
10 rows in set (0.00 sec)

mysql> select * from patients;
+-----------+--------+---------------+------------+--------+-----------+
| patientid | userid | name          | dob        | gender | contactno |
+-----------+--------+---------------+------------+--------+-----------+
|         1 |      9 | White Walker  | 2001-01-23 | Male   | 656355287 |
|         3 |     10 | Blacky Walker | 2001-01-24 | Female | 656354787 |
+-----------+--------+---------------+------------+--------+-----------+
2 rows in set (0.00 sec)

mysql> DESC diagnosis;
+------------------+------+------+-----+---------+----------------+
| Field            | Type | Null | Key | Default | Extra          |
+------------------+------+------+-----+---------+----------------+
| diagnosisid      | int  | NO   | PRI | NULL    | auto_increment |
| patientid        | int  | NO   | MUL | NULL    |                |
| diagnosisdate    | date | NO   |     | NULL    |                |
| diagnosisdetails | text | YES  |     | NULL    |                |
+------------------+------+------+-----+---------+----------------+
4 rows in set (0.00 sec)

mysql> INSERT INTO diagnosis (patientid, diagnosisdate, diagnosisdetails) VALUES (1, '2024-01-24', 'Cholestrol Treatement'), (3, '2024-01-24', 'Skinny Treatement');
Query OK, 2 rows affected (0.05 sec)
Records: 2  Duplicates: 0  Warnings: 0

mysql> select * from patients;
+-----------+--------+---------------+------------+--------+-----------+
| patientid | userid | name          | dob        | gender | contactno |
+-----------+--------+---------------+------------+--------+-----------+
|         1 |      9 | White Walker  | 2001-01-23 | Male   | 656355287 |
|         3 |     10 | Blacky Walker | 2001-01-24 | Female | 656354787 |
+-----------+--------+---------------+------------+--------+-----------+
2 rows in set (0.00 sec)

mysql> select * from diagnosis;
+-------------+-----------+---------------+-----------------------+
| diagnosisid | patientid | diagnosisdate | diagnosisdetails      |
+-------------+-----------+---------------+-----------------------+
|           1 |         1 | 2024-01-24    | Cholestrol Treatement |
|           2 |         3 | 2024-01-24    | Skinny Treatement     |
+-------------+-----------+---------------+-----------------------+
2 rows in set (0.00 sec)

mysql> DESC bill;
+--------------+---------------+------+-----+---------+----------------+
| Field        | Type          | Null | Key | Default | Extra          |
+--------------+---------------+------+-----+---------+----------------+
| billid       | int           | NO   | PRI | NULL    | auto_increment |
| patientid    | int           | NO   | MUL | NULL    |                |
| billamount   | decimal(10,2) | NO   |     | NULL    |                |
| checkoutdate | date          | NO   |     | NULL    |                |
+--------------+---------------+------+-----+---------+----------------+
4 rows in set (0.00 sec)

mysql> INSERT INTO bill (patientid, billamount, checkoutdate) VALUES
    -> (1, '5000.00', '2024-01-24');
Query OK, 1 row affected (0.01 sec)

mysql> select * from BILL;
+--------+-----------+------------+--------------+
| billid | patientid | billamount | checkoutdate |
+--------+-----------+------------+--------------+
|      1 |         1 |    5000.00 | 2024-01-24   |
+--------+-----------+------------+--------------+
1 row in set (0.00 sec)

mysql> DESC insurance;
+----------------+---------------+------+-----+---------+----------------+
| Field          | Type          | Null | Key | Default | Extra          |
+----------------+---------------+------+-----+---------+----------------+
| insuranceid    | int           | NO   | PRI | NULL    | auto_increment |
| patientid      | int           | NO   | MUL | NULL    |                |
| insurancelimit | decimal(10,2) | NO   |     | NULL    |                |
| expirydate     | date          | NO   |     | NULL    |                |
+----------------+---------------+------+-----+---------+----------------+
4 rows in set (0.00 sec)

mysql> INSERT INTO insurance (patientid, insurancelimit, expirydate) VALUES
    -> (1, '100000.00', '2025-03-24');
Query OK, 1 row affected (0.01 sec)

mysql> select * from insurance;
+-------------+-----------+----------------+------------+
| insuranceid | patientid | insurancelimit | expirydate |
+-------------+-----------+----------------+------------+
|           1 |         1 |      100000.00 | 2025-03-24 |
+-------------+-----------+----------------+------------+
1 row in set (0.00 sec)

_____________________________________________________________________________________________________
-----------------------------------------------------------------------------------------------------
1. Write necessary queries to register new user roles and personas.

mysql> INSERT INTO users (username, password, usertype) VALUES ('Gas Man', 'phusphus', 'Patient');
Query OK, 1 row affected (0.05 sec)

mysql> INSERT INTO users (username, password, usertype) VALUES ('Weak Man', 'Stick', 'Patient');
Query OK, 1 row affected (0.05 sec)

mysql> select * from users;
+--------+-----------------+--------------+-----------+
| userid | username        | usertype     | password  |
+--------+-----------------+--------------+-----------+
|      1 | AdminGod        | Admin        | Passcode  |
|      2 | Shubham         | Doctor       | Unlock    |
|      3 | Bhusanm         | Doctor       | Access    |
|      4 | Nikita          | Nurse        | Enter     |
|      5 | Hema            | receptionist | boldhead  |
|      6 | Aditya          | Wardboy      | heythere  |
|      7 | Yash            | CleanerHead  | beingdumb |
|      8 | John            | Nurse        | theDon    |
|      9 | Unhealthy Man   | patient      | obeese    |
|     10 | Unhealthy Woman | patient      | Skiny     |
|     11 | Gas Man         | Patient      | phusphus  |
|     12 | Weak Man        | Patient      | Stick     |
+--------+-----------------+--------------+-----------+
12 rows in set (0.00 sec)

2. Write necessary queries to add to the list of diagnosis of the patient tagged by date.

mysql> INSERT INTO patients (userid, name, dob, gender, contactno) VALUES
    -> (11, 'Tushar', '2000-08-26', 'Male', '4545662774');
Query OK, 1 row affected (0.05 sec)

mysql> SELECT * FROM PATIENTS;
+-----------+--------+---------------+------------+--------+------------+
| patientid | userid | name          | dob        | gender | contactno  |
+-----------+--------+---------------+------------+--------+------------+
|         1 |      9 | White Walker  | 2001-01-23 | Male   | 656355287  |
|         3 |     10 | Blacky Walker | 2001-01-24 | Female | 656354787  |
|         4 |     11 | Tushar        | 2000-08-26 | Male   | 4545662774 |
+-----------+--------+---------------+------------+--------+------------+
3 rows in set (0.00 sec)

mysql> INSERT INTO diagnosis (patientid, diagnosisdate, diagnosisdetails) VALUES
    -> (4, '2024-01-24', 'Acidity Overload');
Query OK, 1 row affected (0.05 sec)

mysql> select * from diagnosis;
+-------------+-----------+---------------+-----------------------+
| diagnosisid | patientid | diagnosisdate | diagnosisdetails      |
+-------------+-----------+---------------+-----------------------+
|           1 |         1 | 2024-01-24    | Cholestrol Treatement |
|           2 |         3 | 2024-01-24    | Skinny Treatement     |
|           3 |         4 | 2024-01-24    | Acidity Overload      |
+-------------+-----------+---------------+-----------------------+
3 rows in set (0.00 sec)

3. Write necessary queries to fetch required details of a particular patient.

mysql> select * from bill;
+--------+-----------+------------+--------------+
| billid | patientid | billamount | checkoutdate |
+--------+-----------+------------+--------------+
|      1 |         1 |    5000.00 | 2024-01-24   |
+--------+-----------+------------+--------------+
1 row in set (0.00 sec)

mysql> INSERT INTO bill (patientid, billamount, checkoutdate) VALUES
    -> (3, 700.00, '2024-01-24');
Query OK, 1 row affected (0.05 sec)

mysql> select * from bill;
+--------+-----------+------------+--------------+
| billid | patientid | billamount | checkoutdate |
+--------+-----------+------------+--------------+
|      1 |         1 |    5000.00 | 2024-01-24   |
|      2 |         3 |     700.00 | 2024-01-24   |
+--------+-----------+------------+--------------+
2 rows in set (0.00 sec)

mysql> SELECT patients.name, patients.dob, diagnosis.diagnosisdetails, bill.billamount, bill.checkoutdate FROM patients
    -> LEFT JOIN bill ON patients.patientid = bill.patientid
    -> LEFT JOIN diagnosis ON patients.patientid = diagnosis.patientid
    -> WHERE patients.patientid = 3;
+---------------+------------+-------------------+------------+--------------+
| name          | dob        | diagnosisdetails  | billamount | checkoutdate |
+---------------+------------+-------------------+------------+--------------+
| Blacky Walker | 2001-01-24 | Skinny Treatement |     700.00 | 2024-01-24   |
+---------------+------------+-------------------+------------+--------------+
1 row in set (0.00 sec)

4. Write necessary queries to prepare bill for the patient at the end of the checkout.

mysql> INSERT INTO bill (patientid, billamount, checkoutdate) VALUES
    -> (4, 1000.00, '2024-01-25');
Query OK, 1 row affected (0.05 sec)

mysql> SELECT * FROM bill;
+--------+-----------+------------+--------------+
| billid | patientid | billamount | checkoutdate |
+--------+-----------+------------+--------------+
|      1 |         1 |    5000.00 | 2024-01-24   |
|      2 |         3 |     700.00 | 2024-01-24   |
|      3 |         4 |    1000.00 | 2024-01-25   |
+--------+-----------+------------+--------------+
3 rows in set (0.00 sec)

5. Write necessary queries to fetch and show data from various related tables (Joins).

mysql> SELECT patients.name, patients.dob, diagnosis.diagnosisdetails, bill.billamount, bill.checkoutdate FROM patients
    -> LEFT JOIN bill ON patients.patientid = bill.patientid
    -> LEFT JOIN diagnosis ON patients.patientid = diagnosis.patientid
    -> WHERE patients.patientid = 4;
+--------+------------+------------------+------------+--------------+
| name   | dob        | diagnosisdetails | billamount | checkoutdate |
+--------+------------+------------------+------------+--------------+
| Tushar | 2000-08-26 | Acidity Overload |    1000.00 | 2024-01-25   |
+--------+------------+------------------+------------+--------------+
1 row in set (0.00 sec)

6. Optimise read operations using Views/Materialized views.

mysql> CREATE VIEW patientdetails AS
    -> SELECT patients.name, patients.dob, diagnosis.diagnosisdetails, bill.billamount, bill.checkoutdate
    -> FROM patients
    -> LEFT JOIN diagnosis ON patients.patientid = diagnosis.patientid
    -> LEFT JOIN bill ON patients.patientid = bill.patientid;
Query OK, 0 rows affected (0.05 sec)

mysql> SELECT * FROM patientdetails;
+---------------+------------+-----------------------+------------+--------------+
| name          | dob        | diagnosisdetails      | billamount | checkoutdate |
+---------------+------------+-----------------------+------------+--------------+
| White Walker  | 2001-01-23 | Cholestrol Treatement |    5000.00 | 2024-01-24   |
| Blacky Walker | 2001-01-24 | Skinny Treatement     |     700.00 | 2024-01-24   |
| Tushar        | 2000-08-26 | Acidity Overload      |    1000.00 | 2024-01-25   |
+---------------+------------+-----------------------+------------+--------------+
3 rows in set (0.00 sec)

mysql> SELECT * FROM patientdetails WHERE billamount>999;
+--------------+------------+-----------------------+------------+--------------+
| name         | dob        | diagnosisdetails      | billamount | checkoutdate |
+--------------+------------+-----------------------+------------+--------------+
| White Walker | 2001-01-23 | Cholestrol Treatement |    5000.00 | 2024-01-24   |
| Tushar       | 2000-08-26 | Acidity Overload      |    1000.00 | 2024-01-25   |
+--------------+------------+-----------------------+------------+--------------+
2 rows in set (0.05 sec)

7. Optimize read operations using indexing wherever required. (Create index on at least 1 table)

mysql> SELECT * FROM patients;
+-----------+--------+---------------+------------+--------+------------+
| patientid | userid | name          | dob        | gender | contactno  |
+-----------+--------+---------------+------------+--------+------------+
|         1 |      9 | White Walker  | 2001-01-23 | Male   | 656355287  |
|         3 |     10 | Blacky Walker | 2001-01-24 | Female | 656354787  |
|         4 |     11 | Tushar        | 2000-08-26 | Male   | 4545662774 |
+-----------+--------+---------------+------------+--------+------------+
3 rows in set (0.00 sec)

mysql> CREATE UNIQUE INDEX serialno ON patients(name);
Query OK, 0 rows affected (0.10 sec)
Records: 0  Duplicates: 0  Warnings: 0

mysql> CREATE INDEX genderno ON patients(GENDER);
Query OK, 0 rows affected (0.10 sec)
Records: 0  Duplicates: 0  Warnings: 0

mysql> SELECT * FROM patients;
+-----------+--------+---------------+------------+--------+------------+
| patientid | userid | name          | dob        | gender | contactno  |
+-----------+--------+---------------+------------+--------+------------+
|         1 |      9 | White Walker  | 2001-01-23 | Male   | 656355287  |
|         3 |     10 | Blacky Walker | 2001-01-24 | Female | 656354787  |
|         4 |     11 | Tushar        | 2000-08-26 | Male   | 4545662774 |
+-----------+--------+---------------+------------+--------+------------+
3 rows in set (0.00 sec)

8. Try optimizing bill generation using stored procedures.

mysql> DELIMITER //
mysql> CREATE PROCEDURE GenerateBill(IN patient_id INT, IN bill_amount DECIMAL(10, 2))
    -> BEGIN
    ->     INSERT INTO Bill (PatientID, BillAmount, CheckoutDate)
    ->     VALUES (patient_id, bill_amount, NOW());
    -> END //
Query OK, 0 rows affected (0.01 sec)

mysql> DELIMITER ;
mysql> CALL GenerateBill(1,800.00);
Query OK, 1 row affected, 1 warning (0.01 sec)

mysql> Select * from bill;
+--------+-----------+------------+--------------+
| billid | patientid | billamount | checkoutdate |
+--------+-----------+------------+--------------+
|      1 |         1 |   28000.00 | 2024-01-24   |
|      2 |         3 |   28000.00 | 2024-01-24   |
|      3 |         4 |   28000.00 | 2024-01-25   |
|      4 |         4 |   28000.00 | 2024-01-25   |
|      5 |         3 |    7000.00 | 2024-01-25   |
|      6 |         1 |     800.00 | 2024-01-29   |
+--------+-----------+------------+--------------+
6 rows in set (0.00 sec)

mysql> CALL GenerateBill(4,8000.00);
Query OK, 1 row affected, 1 warning (0.05 sec)

mysql> Select * from bill;
+--------+-----------+------------+--------------+
| billid | patientid | billamount | checkoutdate |
+--------+-----------+------------+--------------+
|      1 |         1 |   28000.00 | 2024-01-24   |
|      2 |         3 |   28000.00 | 2024-01-24   |
|      3 |         4 |   28000.00 | 2024-01-25   |
|      4 |         4 |   28000.00 | 2024-01-25   |
|      5 |         3 |    7000.00 | 2024-01-25   |
|      6 |         1 |     800.00 | 2024-01-29   |
|      7 |         4 |    8000.00 | 2024-01-29   |
+--------+-----------+------------+--------------+
7 rows in set (0.00 sec)

mysql>

9. Add necessary triggers to indicate when patients medical insurance limit has expired.

mysql> DELIMITER //
mysql> CREATE TRIGGER CheckInsuranceExpiry
    -> BEFORE INSERT ON insurance
    -> FOR EACH ROW
    -> BEGIN
    ->  IF NEW.ExpiryDate < NOW() THEN
    ->          SIGNAL SQLSTATE '50000' SET MESSAGE_TEXT = 'INSURANCE LIMIT EXPIRED!!!';
    -> END IF;
    -> END;
    -> //
Query OK, 0 rows affected (0.05 sec)

mysql> DELIMITER //
mysql> INSERT INTO Insurance (PatientID, InsuranceLimit, ExpiryDate) VALUES (1, 5000.00, '2023-12-31');
    -> //
ERROR 1644 (50000): INSURANCE LIMIT EXPIRED!!!


## ***Question 2***

#### Rendering and Design Patterns

**Client-Side Rendering (CSR):**

In CSR, web pages initially load with minimal content, usually just a basic structure. The bulk of the content generation happens in the client's browser using JavaScript after the initial page load.

- Pros:
  - Interactivity: CSR enables highly interactive web applications as most rendering logic runs in the client's browser, allowing for dynamic content updates without page reloads.
  - User Experience: Users often experience faster initial page loads since only essential resources are sent initially.
  - Ideal for SPAs: CSR is well-suited for Single-Page Applications (SPAs) where content changes frequently based on user interactions.

- Cons:
  - SEO Challenges: Search engines may struggle to index content rendered dynamically via JavaScript, impacting SEO.
  - Initial Load Time: Initial load time may be longer due to the need to download and execute JavaScript before rendering content.
  - Limited Server-Side Rendering: CSR lacks built-in server-side rendering, which may be necessary for certain use cases or to improve performance.

**Server-Side Rendering (SSR):**

In SSR, the server generates complete HTML for each page and sends it to the client, including initial content. The client's browser still executes JavaScript, but the HTML content is already present.

- Pros:
  - Improved SEO: SSR ensures search engine crawlers receive fully-rendered HTML content, leading to better SEO.
  - Faster Initial Load: Since pre-rendered HTML content is sent to the client, SSR typically results in faster initial page loads.
  - Accessibility: SSR provides better support for users with JavaScript-disabled browsers or assistive technologies.

- Cons:
  - Reduced Interactivity: SSR may result in slower subsequent page updates compared to CSR, as each user interaction often requires a server request.
  - Server Load: SSR can increase server load, especially for dynamic or high-traffic websites.
  - Development Complexity: SSR adds complexity to development, particularly in handling server-side rendering logic and state synchronization.

**Static Site Generation (SSG):**

SSG involves generating HTML files for all pages of a website at build time, rather than on-demand like SSR or CSR. These pre-generated HTML files are served directly to users.

- Pros:
  - Performance: SSG eliminates server-side processing for each request, resulting in instant page loads and superior performance.
  - Scalability: SSG is highly scalable and can handle high traffic volumes without performance impact.
  - SEO: SSG ensures all content is available to search engines as pre-rendered HTML, benefiting SEO.

- Cons:
  - Limited Interactivity: SSG is less suitable for highly interactive web applications requiring real-time updates or user-specific content.
  - Build Time Complexity: SSG introduces complexities during the build process, especially for large websites with dynamic content.
  - Deployment Overhead: Continuous deployment may require rebuilding the entire site, which can be time-consuming for large projects.

Each rendering pattern has its advantages and trade-offs, and the choice depends on factors such as application nature, performance needs, and development resources. Many modern web applications strategically combine these patterns to leverage their benefits.


### Design Patterns

**Creational Patterns:**
Creational design patterns provide various object creation mechanisms, it increase flexibility and reuse of existing code.
1. Factory Method Pattern: This pattern defines an interface for creating objects but allows subclasses to alter the type of objects that will be created. It's handy when you have a superclass with multiple subclasses, and you want to delegate the responsibility of object instantiation to the subclasses.

2. Abstract Factory Pattern: The abstract factory pattern provides an interface for creating families of related or dependent objects without specifying their concrete classes. It's helpful when you need to create families of related objects where the exact types may vary but need to ensure they are compatible.

3. Builder Pattern: The builder pattern separates the construction of a complex object from its representation. It allows the same construction process to create different representations of the object. It's useful when you need to create complex objects with many optional parts or configurations.

4. Prototype Pattern: This pattern creates new objects by copying an existing object, known as a prototype, during runtime. It's beneficial when the cost of creating a new object is more expensive than copying an existing one, or when the object creation process is complex and involves multiple steps.

5. Singleton Pattern: This pattern ensures that a class has only one instance and provides a global point of access to it. It's useful when you need to control access to a shared resource or when exactly one object is needed to coordinate actions across the system.

### Structural Patterns:
Structural design patterns explain how to assemble objects and classes into larger structures, while keeping these structures efficient and flexible.
1. Adapter Pattern: The adapter pattern allows incompatible interfaces to work together by providing a wrapper that converts the interface of a class into another interface clients expect. It's like using a middleman to translate between two systems that speak different languages.

2. Bridge Pattern: The bridge pattern decouples an abstraction from its implementation so that the two can vary independently. It's useful when you want to avoid a permanent binding between an abstraction and its implementation, allowing both to evolve separately.

3. Composite Pattern: The composite pattern composes objects into tree structures to represent part-whole hierarchies. It allows clients to treat individual objects and compositions of objects uniformly. It's helpful when dealing with hierarchical structures that need to be treated uniformly.

4. Decorator Pattern: The decorator pattern attaches additional responsibilities to an object dynamically. Decorators provide a flexible alternative to subclassing for extending functionality. It's handy when you need to add functionality to objects at runtime without affecting other instances of the same class.

5. Facade Pattern: The facade pattern provides a unified interface to a set of interfaces in a subsystem. It defines a higher-level interface that makes the subsystem easier to use. It's useful when you want to provide a simplified interface to a complex system, hiding its complexity from clients.

### Behavioral Patterns: 
Behavioral design patterns are concerned with algorithms and the assignment of responsibilities between objects.
1. Observer Pattern: The observer pattern defines a one-to-many dependency between objects so that when one object changes state, all its dependents are notified and updated automatically. It's helpful for building loosely coupled systems where objects need to be notified of changes without being tightly coupled to the object that triggers the change.

2. Strategy Pattern: The strategy pattern defines a family of algorithms, encapsulates each one, and makes them interchangeable. It allows the algorithm to vary independently from clients that use it. It's useful when you need to switch between different algorithms or behaviors dynamically.

3. Command Pattern: The command pattern encapsulates a request as an object, thereby allowing for parameterization of clients with queues, requests, and operations. It's useful when you need to decouple the sender of a request from the object that handles the request, enabling more flexibility and extensibility.

4. Chain of Responsibility Pattern: The chain of responsibility pattern passes a request along a chain of handlers. Each handler decides either to process the request or to pass it to the next handler in the chain. It's useful when you want to give multiple objects a chance to handle a request without explicitly specifying the receiver.

5. Iterator Pattern: The iterator pattern provides a way to access the elements of an aggregate object sequentially without exposing its underlying representation. It's useful when you need to traverse a collection of objects without caring about the underlying structure of the collection.

6. State Pattern: The state pattern allows an object to alter its behavior when its internal state changes. The object will appear to change its class. It's useful when you have an object that behaves differently depending on its internal state, and you want to encapsulate each state's behavior in a separate class.

7. Visitor Pattern: The visitor pattern represents an operation to be performed on the elements of an object structure. It allows you to define a new operation without changing the classes of the elements on which it operates. It's useful when you have a complex structure of objects and want to perform various operations on them without modifying their code.




### Mention and elaborate where a particular Rendering pattern is applicable and is well suited for which use case.

1. **Client-Side Rendering (CSR)**:
   Since CSR works by initially loading a basic page structure and then dynamically rendering content using JavaScript in the client's browser, it's great for applications where interactivity and dynamic content updates are crucial. Therefore, this pattern can be used in real-time dashboards, social media platforms, or e-commerce websites that require instant content updates and highly interactive user experiences.

2. **Server-Side Rendering (SSR)**:
   Since SSR generates complete HTML for each page on the server and sends it to the client, it's ideal for applications prioritizing SEO, initial load time, and accessibility. Therefore, this pattern can be used in content-focused websites like blogs, news portals, or multilingual websites where SEO is crucial, and ensuring accessibility compliance is important.

3. **Static Site Generation (SSG)**:
   Since SSG generates HTML files for all pages of a website at build time and serves them directly to users, it's perfect for content-centric websites, documentation sites, or landing pages where content changes infrequently and performance is paramount. Therefore, this pattern can be used in company websites, documentation sites, or marketing websites focusing on delivering fast, optimized experiences to visitors.