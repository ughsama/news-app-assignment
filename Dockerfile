# Use an official Node.js runtime as a base image
FROM node:latest

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the application
RUN npm run build

# Expose the port the app runs on
EXPOSE 3000

# Add your environment variables
ENV VITE_APP_NEWS_API_KEY yournewsapikey
ENV VITE_GUARDIAN_API_KEY yourguardiankey
ENV VITE_NY_TIMES_API_KEY yournytimeskey

# Define the command to run the app
CMD ["npm", "start"]
