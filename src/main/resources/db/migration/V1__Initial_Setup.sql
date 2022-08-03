CREATE SCHEMA IF NOT EXISTS example_schema;

CREATE TABLE projects (
                       instance_id bigserial PRIMARY KEY ,
                       student_id VARCHAR ( 10 ) NOT NULL,
                       student_name VARCHAR ( 100 ) NOT NULL,
                       degree_title VARCHAR ( 100 ) NOT NULL,
                       project_name VARCHAR ( 100 ) NOT NULL,
                       supervisor_1_name VARCHAR ( 100 ) NOT NULL,
                       supervisor_1_email VARCHAR ( 100 ) NOT NULL,
                       supervisor_2_name VARCHAR ( 100 ),
                       supervisor_2_email VARCHAR ( 100 ),
                       special_resources_check boolean NOT NULL,
                       special_resources_text VARCHAR (500),
                       group_project boolean NOT NULL,
                       ethics_review_check boolean NOT NULL,
                       ethics_review_text VARCHAR (500),
                       cybersec_project boolean NOT NULL
);