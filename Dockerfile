FROM openjdk:17-alpine3.14 AS gradle_build_jar
COPY . .
RUN ./gradlew  --no-daemon --console plain --info check bootJar
COPY build/libs/*.jar SpringBootTest.jar
EXPOSE 80
ENTRYPOINT ["java", "-jar", "/SpringBootTest.jar"]
