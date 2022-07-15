CREATE SCHEMA IF NOT EXISTS example_schema;

CREATE TABLE projects (
                       instance_id bigserial PRIMARY KEY ,
                       student_id VARCHAR ( 10 ) NOT NULL,
                       student_name VARCHAR ( 100 ) NOT NULL,
                       degree_title VARCHAR ( 100 ) NOT NULL,
                       project_name VARCHAR ( 100 ) NOT NULL,
                       supervisor_1_name VARCHAR ( 100 ) NOT NULL,
                       supervisor_1_email VARCHAR ( 100 ) NOT NULL,
                       group_project boolean NOT NULL,
                       supervisor_2_name VARCHAR ( 100 ),
                       supervisor_2_email VARCHAR ( 100 ),
                       cybersec_project boolean NOT NULL,
                       ethics_required boolean NOT NULL
);