##Before you begin

Ensure you have docker installed on the computer this is running on. 

## Commands
Run a database container, bind it to localhost:5432 
`docker run -it --rm -e POSTGRES_PASSWORD=apptest123 -e POSTGRES_USER=appuser -e POSTGRES_DB=example -p 5432:5432 postgres:12.3-alpine`

Keep this terminal window open, open a second one. Build and run the application 
`./gradlew clean build bootRun`

Use PSQL command line tool to log into your DB 
`psql -h localhost -p 5432 -d "example" -U appuser -W`

Password is apptest123

Check that the table exists (should see a table called users) 
`\dt public.*`
