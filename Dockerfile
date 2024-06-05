# Use the official Node.js image as the base image
FROM node:18-alpine3.18

# Set the working directory
WORKDIR /app

# Install Angular CLI globally
RUN npm install -g @angular/cli

# Copy package.json and package-lock.json to the working directory
COPY ./improvising-backoffice-angular/package*.json ./

# Install node modules
RUN npm install

# Copy the rest of the application code to the working directory
COPY ./improvising-backoffice-angular ./

# Expose port 4200 for the Angular app
EXPOSE 4200

# Default command to run when starting the container
CMD ["sh", "-c", "npm install && ng serve --host 0.0.0.0"]