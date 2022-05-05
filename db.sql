CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE DATABASE userdb;

CREATE TABLE users (
    user_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_name TEXT NOT NULL,
    user_email TEXT NOT NULL UNIQUE,
    user_password TEXT NOT NULL
);

CREATE TABLE COURSE_DETAILS(CourseCode varchar(10),CourseName varchar(150),PRIMARY KEY(CourseCode));
Insert into Course_details values ('XC7076','Pattern Recognition');
Insert into Course_details values ('XC7871','Machine Learning Techniques');

CREATE TABLE COURSE_OUTCOME(CourseCode varchar(10),CourseOutcomes varchar(500),FOREIGN KEY (CourseCode) REFERENCES Course_Details(CourseCode));

Insert into Course_outcome values ('XC7076','To know about Supervised and unsupervised Learning.');
Insert into Course_outcome values ('XC7076','To study about feature extraction and structural pattern recognition.');
Insert into Course_outcome values ('XC7076','To explore different classification models.');
Insert into Course_outcome values ('XC7076','To understand Fuzzy Pattern Classifiers and Perception.');

CREATE TABLE BL_DETAILS(BL_LEVEL varchar(15), KEYWORDS varchar(20));

Insert into BL_Details values ('Remembering', 'Define');
Insert into BL_Details values ('Remembering', 'Choose');
Insert into BL_Details values ('Understanding', 'Classify');
Insert into BL_Details values ('Understanding', 'Compare');

CREATE TABLE users(user_name varchar(15),user_email varchar(30), user_password varchar(10));