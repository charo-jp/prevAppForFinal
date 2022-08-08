[[_TOC_]]

## Prerequisites

The following are required for this application to run locally:
 - Java SE 17
 - Docker
 - psql (postgres command line tool)

### Running the Application Locally

This project uses docker-compose to spin up database and java application containers
locally, for local development and local running only. 

Running the java application with a persistent postgres database will come in a later development.

To build the app from zero, first ensure that there are no other instances of either the springapp or postgres containers running. This can be done on docker desktop or by running `docker ps` and `docker kill x` where x is the containers needing removal.

Similar actions need to be taken to ensure active volumes do not interact with the application. Either use docker desktop to remove unwanted volumes, or do `docker volume ls`, and `docker volume rm x` where x is the volume needing removal.
### Commands List

To generate a build of the application using the Gradle wrapper, run:

`./gradlew clean build`

To spin up 2 local containers for the database and web applications, run: 

`docker-compose build --no-cache` 

Then run

`docker-compose up`

The application can be interacted with independently of the frontend by using [postman](https://www.postman.com/downloads/) and building get and post requests there, with the endpoints:

`http://localhost:8080/getusers` to pull al data from the db and present it in json format

`http://localhost:8080/registerUser` with data to add, in json format






### Additional Commands

To run a postgres container locally, with the correct user, pw, and DB

`docker run -it --rm -e POSTGRES_PASSWORD=apptest123  -e POSTGRES_USER=appuser -e POSTGRES_DB=example -p 5432:5432 postgres:12.3-alpine `

To connect to the database container (database container must already be running)

`export POSTGRES_PASSWORD = 'apptest123'; psql -h localhost -p 5432 -d "example" -U appuser -W` - password is apptest123

To check that the tables are created by flyway; 

`\dt example_schema.*`

To view the data in the database in the terminal;

`SELECT * FROM example_schema.projects;`

To test the api (mac/linux only):

`curl --request GET 'http://localhost:8080/getusers' --header 'Content-Type: text/plain'`


### Uploading excel
Use provided excel file to upload.
If using other excel files, headers in excel must be changed to match variable names of the database

student_id
student_name   
degree_title
project_name
supervisor_1_name
supervisor_1_email
supervisor_2_name
supervisor_2_email
special_resources_check
special_resources_text
ethics_review_text
ethics_review_check
cybersec_project
group_project