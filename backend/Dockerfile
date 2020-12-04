FROM openjdk:11.0.4-jre
COPY target/*.jar /app.jar
EXPOSE 8080
ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","/app.jar"]
