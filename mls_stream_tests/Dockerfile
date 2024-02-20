# Use a base image with Node.js and Chrome
FROM node:14

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Set environment variables (if needed)
# ENV KEY=VALUE

# Command to run the test
CMD ["npm", "test"]
