# Use an official Node.js runtime as the base image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Install WebSocket
RUN npm install ws

# Copy the WebSocket client code to the container
COPY app.js .

# Expose the port on which your WebSocket server is running (change the port number as needed)
EXPOSE 8080

# Command to run the WebSocket client when the container starts
CMD ["node", "app.js"]
