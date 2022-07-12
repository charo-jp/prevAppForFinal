## Prerequisites

The following are required for this application to run locally:
 - Java SE 17
 - Docker
 - psql (postgres command line tool)

### Running the Application Locally

This project uses docker-compose to spin up database and java application containers
locally, for local development and local running only. 

Running the java application with a persistent postgres database will come in a later development.

### Commands List

To spin up 2 local containers for the database and web applications, run: 

`docker-compose up`

To run a postgres container locally, with the correct user, pw, and DB

`docker run -it --rm -e POSTGRES_PASSWORD=apptest123  -e POSTGRES_USER=appuser -e POSTGRES_DB=example -p 5432:5432 postgres:12.3-alpine `

To generate a build of the application using the Gradle wrapper and then run it, run:

`./gradlew clean build bootRun`

To connect to the database container (databse container must already be running)

`psql -h localhost -p 5432 -d "example" -U appuser -W` - password is apptest123

To check that the tables are created by flyway (or you can do a select * from ;)

`\dt example_schema.*`

To test the api (mac/linux only):

`curl --request GET 'http://localhost:8080/getusers' --header 'Content-Type: text/plain'`

Powershell equlivalent (in testing)
`Invoke-WebRequest - Uri 'http://localhost:8080/getusers' --header 'Content-Type: text/plain'`
