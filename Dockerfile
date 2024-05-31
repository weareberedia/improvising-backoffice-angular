# Use the official Node.js image as the base image
FROM node:18

# Set the working directory
WORKDIR /app

# Install Angular CLI globally
RUN npm install -g @angular/cli

# Expose port 4200 for the Angular app
EXPOSE 4200

# Default command to run when starting the container
CMD ["bash"]