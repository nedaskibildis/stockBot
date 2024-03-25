# Use Eclipse Temurin 21 (Java 21) as the base image for the build stage
FROM eclipse-temurin:21-jammy as build

# Set the working directory inside the Docker image
WORKDIR /workspace/app

# Copy the Maven wrapper and necessary files
COPY mvnw .
COPY .mvn .mvn
COPY pom.xml .

# Use the Maven wrapper to ensure the project is properly set up
RUN chmod +x ./mvnw
RUN ./mvnw dependency:go-offline

# Copy the project source
COPY src src

# Build the application using Maven
RUN ./mvnw package

# Use Eclipse Temurin 21 (Java 21) for the runtime stage
FROM eclipse-temurin:21-jammy

WORKDIR /app

# Copy the built JAR file from the build stage
COPY --from=build /workspace/app/target/*.jar ./app.jar

# Expose the port the application runs on
EXPOSE 8080

# Command to run the application
CMD ["java", "-jar", "app.jar"]