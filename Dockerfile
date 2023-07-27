# Use an official Node.js runtime as the base image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the WebSocket client code to the container
COPY websocket-client.js .

# Expose the port on which your WebSocket server is running (change the port number as needed)
EXPOSE 8080

# Command to run the WebSocket client when the container starts
CMD ["node", "app.js"]
