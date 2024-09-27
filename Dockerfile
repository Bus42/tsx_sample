# Use the official Node.js image with the version you need
FROM node:20.17.0

# Set working directory
WORKDIR /usr/src/app

# Install dependencies first, only copy package.json and package-lock.json to leverage Docker cache
COPY package*.json ./

# Install development dependencies
RUN npm install

# Copy the rest of the app's source code
COPY . .

# Expose the port React app runs on (default: 3000)
EXPOSE 3000

# Start the development server
CMD ["npm", "start"]
