# Use Eclipse Temurin 21 (Java 21) as the base image
FROM eclipse-temurin:21-jammy as build

# Install Maven
RUN apt-get update && \
    apt-get install -y maven && \
    apt-get clean

# Set the working directory inside the Docker image
WORKDIR /workspace/app

# Copy the project files
COPY . .

# Build the application using Maven
RUN mvn package

# Use Eclipse Temurin 21 (Java 21) for the runtime stage
FROM eclipse-temurin:21-jammy

# Set the working directory inside the Docker image
WORKDIR /app

# Copy the built JAR file from the build stage
COPY --from=build /workspace/app/target/*.jar ./app.jar

# Expose the port the application runs on
EXPOSE 8080

# Command to run the application
CMD ["java", "-jar", "app.jar"]
