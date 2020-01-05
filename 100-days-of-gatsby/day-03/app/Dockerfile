FROM node:12-alpine

# Create the app directory
WORKDIR /app

# Install Gatsby CLI
RUN npm install -g gatsby-cli

# Install dependencies
COPY package.json ./
RUN npm install --silent
