CREATE TABLE users (
                       user_id bigserial PRIMARY KEY ,
                       username VARCHAR ( 25 ) NOT NULL,
                       user_email VARCHAR ( 100 ) NOT NULL,
                       user_first_name VARCHAR ( 50 ) NOT NULL,
                       user_last_name VARCHAR ( 50 ) NOT NULL
);